import express from 'express'
import { Request, Response } from "express";
import { GetAllTaskOutputUseCase } from '../../domain/interfaces/use-cases/taskOutput/getAllTaskOutput';
import { CreateTaskOutputUseCase } from "../../domain/interfaces/use-cases/taskOutput/createTaskOutput";
import { UpdateTaskOutputUseCase } from "../../domain/interfaces/use-cases/taskOutput/updateTaskOutput";
import { DeleteTaskOutputUseCase } from "../../domain/interfaces/use-cases/taskOutput/deleteTaskOutput";
import { GetTaskOutputByIdUseCase } from "../../domain/interfaces/use-cases/taskOutput/getTaskOutputById";


export default function taskOutputRouter(
  getAllTaskOutputUseCase: GetAllTaskOutputUseCase,
  createTaskOutputUseCase: CreateTaskOutputUseCase,
  updateTaskOutputUseCase: UpdateTaskOutputUseCase,
  deleteTaskOutputUseCase: DeleteTaskOutputUseCase,
  getTaskOutputByIdUseCase: GetTaskOutputByIdUseCase,
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {

      const taskOutputs = await getAllTaskOutputUseCase.execute();
      res.status(200).send(taskOutputs);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const taskOutput = await getTaskOutputByIdUseCase.execute(req.params.id);
      res.status(200).send(taskOutput);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newTaskOutput = await createTaskOutputUseCase.execute(req.body);
      res.status(200).send(newTaskOutput);
    } catch (error) {
      res.status(500).send({ error: "error creating data", message: error });
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const updatedTaskOutput = await updateTaskOutputUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedTaskOutput);
    } catch (error) {
      res.status(500).send({ error: "error updating data", message: error });
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const deletedTaskOutput = await deleteTaskOutputUseCase.execute(req.params.id);
      res.status(200).send(deletedTaskOutput);
    } catch (error) {
      res.status(500).send({ error: "error deleting data", message: error });
    }
  });

  return router;

}