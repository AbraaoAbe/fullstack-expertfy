import express from 'express'
import { Request, Response } from "express";
import { GetAllSkillEndorsUseCase } from '../../domain/interfaces/use-cases/skillEndors/getAllSkillEndors';
import { CreateSkillEndorsUseCase } from "../../domain/interfaces/use-cases/skillEndors/createSkillEndors";
import { UpdateSkillEndorsUseCase } from "../../domain/interfaces/use-cases/skillEndors/updateSkillEndors";
import { DeleteSkillEndorsUseCase } from "../../domain/interfaces/use-cases/skillEndors/deleteSkillEndors";
import { GetSkillEndorsByIdUseCase } from "../../domain/interfaces/use-cases/skillEndors/getSkillEndorsById";
import { GetCountSkillEndorsByPersonIdUseCase } from '../../domain/interfaces/use-cases/skillEndors/getCountSkillEndorsByPersonId';


export default function skillEndorsRouter(
  getAllSkillEndorsUseCase: GetAllSkillEndorsUseCase,
  createSkillEndorsUseCase: CreateSkillEndorsUseCase,
  updateSkillEndorsUseCase: UpdateSkillEndorsUseCase,
  deleteSkillEndorsUseCase: DeleteSkillEndorsUseCase,
  getSkillEndorsByIdUseCase: GetSkillEndorsByIdUseCase,
  getCountSkillEndorsByPersonIdUseCase: GetCountSkillEndorsByPersonIdUseCase
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {

      const skillEndors = await getAllSkillEndorsUseCase.execute();
      res.status(200).send(skillEndors);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const skillEndors = await getSkillEndorsByIdUseCase.execute(req.params.id);
      res.status(200).send(skillEndors);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newSkillEndors = await createSkillEndorsUseCase.execute(req.body);
      res.status(200).send(newSkillEndors);
    } catch (error) {
      res.status(500).send({ error: "error creating data", message: error });
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const updatedSkillEndors = await updateSkillEndorsUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedSkillEndors);
    } catch (error) {
      res.status(500).send({ error: "error updating data", message: error });
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const deletedSkillEndors = await deleteSkillEndorsUseCase.execute(req.params.id);
      res.status(200).send(deletedSkillEndors);
    } catch (error) {
      res.status(500).send({ error: "error deleting data", message: error });
    }
  });

  router.get("/person/:id", async (req: Request, res: Response) => {
    try {
      const countSkillEndors = await getCountSkillEndorsByPersonIdUseCase.execute(req.params.id);
      res.status(200).send(countSkillEndors);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  return router;

}