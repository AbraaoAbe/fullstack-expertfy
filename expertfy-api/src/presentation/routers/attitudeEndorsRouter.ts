import express from 'express'
import { Request, Response } from "express";
import { GetAllAttitudeEndorsUseCase } from '../../domain/interfaces/use-cases/attitudeEndors/getAllAttitudeEndors';
import { CreateAttitudeEndorsUseCase } from "../../domain/interfaces/use-cases/attitudeEndors/createAttitudeEndors";
import { UpdateAttitudeEndorsUseCase } from "../../domain/interfaces/use-cases/attitudeEndors/updateAttitudeEndors";
import { DeleteAttitudeEndorsUseCase } from "../../domain/interfaces/use-cases/attitudeEndors/deleteAttitudeEndors";
import { GetAttitudeEndorsByIdUseCase } from "../../domain/interfaces/use-cases/attitudeEndors/getAttitudeEndorsById";


export default function attitudeEndorsRouter(
  getAllAttitudeEndorsUseCase: GetAllAttitudeEndorsUseCase,
  createAttitudeEndorsUseCase: CreateAttitudeEndorsUseCase,
  updateAttitudeEndorsUseCase: UpdateAttitudeEndorsUseCase,
  deleteAttitudeEndorsUseCase: DeleteAttitudeEndorsUseCase,
  getAttitudeEndorsByIdUseCase: GetAttitudeEndorsByIdUseCase,
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {

      const attitudeEndors = await getAllAttitudeEndorsUseCase.execute();
      res.status(200).send(attitudeEndors);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const attitudeEndors = await getAttitudeEndorsByIdUseCase.execute(req.params.id);
      res.status(200).send(attitudeEndors);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newAttitudeEndors = await createAttitudeEndorsUseCase.execute(req.body);
      res.status(200).send(newAttitudeEndors);
    } catch (error) {
      res.status(500).send({ error: "error creating data", message: error });
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const updatedAttitudeEndors = await updateAttitudeEndorsUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedAttitudeEndors);
    } catch (error) {
      res.status(500).send({ error: "error updating data", message: error });
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const deletedAttitudeEndors = await deleteAttitudeEndorsUseCase.execute(req.params.id);
      res.status(200).send(deletedAttitudeEndors);
    } catch (error) {
      res.status(500).send({ error: "error deleting data", message: error });
    }
  });

  return router;

}