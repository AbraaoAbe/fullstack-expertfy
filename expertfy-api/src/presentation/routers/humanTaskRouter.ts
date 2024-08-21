import express from 'express'
import { Request, Response } from "express";
import { GetAllHumanTaskUseCase } from '../../domain/interfaces/use-cases/humanTask/getAllHumanTask';
import { CreateHumanTaskUseCase } from "../../domain/interfaces/use-cases/humanTask/createHumanTask";
import { UpdateHumanTaskUseCase } from "../../domain/interfaces/use-cases/humanTask/updateHumanTask";
import { DeleteHumanTaskUseCase } from "../../domain/interfaces/use-cases/humanTask/deleteHumanTask";
import { GetHumanTaskByIdUseCase } from "../../domain/interfaces/use-cases/humanTask/getHumanTaskById";
import { GetCountGroupByPersonHumanTasksUsecase } from '../../domain/interfaces/use-cases/humanTask/getCountGroupByPersonHumanTasks';
import { GetHumanTaskTableListByPersonIdUseCase } from '../../domain/interfaces/use-cases/humanTask/getHumanTaskTableListByPersonId';
import { GetCountHumanTaskByPersonGroupBySkillUsecase } from '../../domain/interfaces/use-cases/humanTask/getCountHumanTaskByPersonGroupBySkill';
import { GetTotalCountHumanTaskGroupBySkillUsecase } from '../../domain/interfaces/use-cases/humanTask/getTotalCountHumanTaskGroupBySkill';

export default function humanTaskRouter(
  getAllHumanTaskUseCase: GetAllHumanTaskUseCase,
  createHumanTaskUseCase: CreateHumanTaskUseCase,
  updateHumanTaskUseCase: UpdateHumanTaskUseCase,
  deleteHumanTaskUseCase: DeleteHumanTaskUseCase,
  getHumanTaskByIdUseCase: GetHumanTaskByIdUseCase,
  getCountGroupByPersonHumanTasksUsecase: GetCountGroupByPersonHumanTasksUsecase,
  getHumanTaskTableListByPersonIdUseCase: GetHumanTaskTableListByPersonIdUseCase,
  getCountHumanTaskByPersonGroupBySkillUsecase: GetCountHumanTaskByPersonGroupBySkillUsecase,
  getTotalCountHumanTaskGroupBySkillUsecase: GetTotalCountHumanTaskGroupBySkillUsecase
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {

      const humanTasks = await getAllHumanTaskUseCase.execute();
      res.status(200).send(humanTasks);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const humanTask = await getHumanTaskByIdUseCase.execute(req.params.id);
      res.status(200).send(humanTask);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newHumanTask = await createHumanTaskUseCase.execute(req.body);
      res.status(200).send(newHumanTask);
    } catch (error) {
      res.status(500).send({ error: "error creating data", message: error });
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const updatedHumanTask = await updateHumanTaskUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedHumanTask);
    } catch (error) {
      res.status(500).send({ error: "error updating data", message: error });
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const deletedHumanTask = await deleteHumanTaskUseCase.execute(req.params.id);
      res.status(200).send(deletedHumanTask);
    } catch (error) {
      res.status(500).send({ error: "error deleting data", message: error });
    }
  });

  router.get("/countGroupByPersonBySkillTypeId/:id", async (req: Request, res: Response) => {
    try {
      const countGroupByPersonBySkillTypeId = await getCountGroupByPersonHumanTasksUsecase.execute(req.params.id);
      res.status(200).send(countGroupByPersonBySkillTypeId);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  //TODO: Mesclar com o front-end
  router.get("/tableListByPersonId/:id", async (req: Request, res: Response) => {
    try {
      const tableListByPersonId = await getHumanTaskTableListByPersonIdUseCase.execute(req.params.id);
      res.status(200).send(tableListByPersonId);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/countByPersonGroupBySkill/:id", async (req: Request, res: Response) => {
    try {
      const countByPersonGroupBySkill = await getCountHumanTaskByPersonGroupBySkillUsecase.execute(req.params.id);
      res.status(200).send(countByPersonGroupBySkill);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/total/CountGroupBySkill", async (req: Request, res: Response) => {
    try {
      const totalCountGroupBySkill = await getTotalCountHumanTaskGroupBySkillUsecase.execute();
      res.status(200).send(totalCountGroupBySkill);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  return router;


}