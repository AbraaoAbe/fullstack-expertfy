import express from 'express'
import { Request, Response } from "express";
import { GetAllSkillUseCase } from '../../domain/interfaces/use-cases/skill/getAllSkill';
import { CreateSkillUseCase } from "../../domain/interfaces/use-cases/skill/createSkill";
import { UpdateSkillUseCase } from "../../domain/interfaces/use-cases/skill/updateSkill";
import { DeleteSkillUseCase } from "../../domain/interfaces/use-cases/skill/deleteSkill";
import { GetSkillByIdUseCase } from "../../domain/interfaces/use-cases/skill/getSkillById";


export default function skillRouter(
  getAllSkillUseCase: GetAllSkillUseCase,
  createSkillUseCase: CreateSkillUseCase,
  updateSkillUseCase: UpdateSkillUseCase,
  deleteSkillUseCase: DeleteSkillUseCase,
  getSkillByIdUseCase: GetSkillByIdUseCase,
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {

      const skills = await getAllSkillUseCase.execute();
      res.status(200).send(skills);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const skill = await getSkillByIdUseCase.execute(req.params.id);
      res.status(200).send(skill);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newSkill = await createSkillUseCase.execute(req.body);
      res.status(200).send(newSkill);
    } catch (error) {
      res.status(500).send({ error: "error creating data", message: error });
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const updatedSkill = await updateSkillUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedSkill);
    } catch (error) {
      res.status(500).send({ error: "error updating data", message: error });
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const deletedSkill = await deleteSkillUseCase.execute(req.params.id);
      res.status(200).send(deletedSkill);
    } catch (error) {
      res.status(500).send({ error: "error deleting data", message: error });
    }
  });

  return router;

}