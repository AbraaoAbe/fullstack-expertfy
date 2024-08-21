import express from 'express'
import { Request, Response } from "express";
import { GetAllSkillTypeUseCase } from '../../domain/interfaces/use-cases/skillType/getAllSkillType';
import { CreateSkillTypeUseCase } from '../../domain/interfaces/use-cases/skillType/createSkillType';
import { UpdateSkillTypeUseCase } from '../../domain/interfaces/use-cases/skillType/updateSkillType';
import { DeleteSkillTypeUseCase } from '../../domain/interfaces/use-cases/skillType/deleteSkillType';
import { GetSkillTypeByIdUseCase } from '../../domain/interfaces/use-cases/skillType/getSkillTypeById';


export default function skillTypeRouter(
  getAllSkillTypeUseCase: GetAllSkillTypeUseCase,
  createSkillTypeUseCase: CreateSkillTypeUseCase,
  updateSkillTypeUseCase: UpdateSkillTypeUseCase,
  deleteSkillTypeUseCase: DeleteSkillTypeUseCase,
  getSkillTypeByIdUseCase: GetSkillTypeByIdUseCase,
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {

      const skills = await getAllSkillTypeUseCase.execute();
      res.status(200).send(skills);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const skill = await getSkillTypeByIdUseCase.execute(req.params.id);
      res.status(200).send(skill);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newSkillType = await createSkillTypeUseCase.execute(req.body);
      res.status(200).send(newSkillType);
    } catch (error) {
      res.status(500).send({ error: "error creating data", message: error });
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const updatedSkillType = await updateSkillTypeUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedSkillType);
    } catch (error) {
      res.status(500).send({ error: "error updating data", message: error });
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const deletedSkillType = await deleteSkillTypeUseCase.execute(req.params.id);
      res.status(200).send(deletedSkillType);
    } catch (error) {
      res.status(500).send({ error: "error deleting data", message: error });
    }
  });

  return router;

}