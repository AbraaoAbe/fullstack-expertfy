import express from 'express'
import { Request, Response } from "express";
import { GetAllAttitudeUseCase } from '../../domain/interfaces/use-cases/attitude/getAllAttitude';
import { CreateAttitudeUseCase } from "../../domain/interfaces/use-cases/attitude/createAttitude";
import { UpdateAttitudeUseCase } from "../../domain/interfaces/use-cases/attitude/updateAttitude";
import { DeleteAttitudeUseCase } from "../../domain/interfaces/use-cases/attitude/deleteAttitude";
import { GetAttitudeByIdUseCase } from "../../domain/interfaces/use-cases/attitude/getAttitudeById";


export default function attitudeRouter(
  getAllAttitudeUseCase: GetAllAttitudeUseCase,
  createAttitudeUseCase: CreateAttitudeUseCase,
  updateAttitudeUseCase: UpdateAttitudeUseCase,
  deleteAttitudeUseCase: DeleteAttitudeUseCase,
  getAttitudeByIdUseCase: GetAttitudeByIdUseCase,
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {

      const attitudes = await getAllAttitudeUseCase.execute();
      res.status(200).send(attitudes);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const attitude = await getAttitudeByIdUseCase.execute(req.params.id);
      res.status(200).send(attitude);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newAttitude = await createAttitudeUseCase.execute(req.body);
      res.status(200).send(newAttitude);
    } catch (error) {
      res.status(500).send({ error: "error creating data", message: error });
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const updatedAttitude = await updateAttitudeUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedAttitude);
    } catch (error) {
      res.status(500).send({ error: "error updating data", message: error });
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const deletedAttitude = await deleteAttitudeUseCase.execute(req.params.id);
      res.status(200).send(deletedAttitude);
    } catch (error) {
      res.status(500).send({ error: "error deleting data", message: error });
    }
  });

  return router;

}