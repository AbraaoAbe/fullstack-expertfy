import express from "express";
import { Request, Response } from "express";
import { GetAllLanguagesUseCase } from "../../domain/interfaces/use-cases/language/getAllLanguage";

export default function languageRouter(
  getAllLanguagesUseCase: GetAllLanguagesUseCase
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      const languages = await getAllLanguagesUseCase.getAllLanguages();
      res.status(200).send(languages);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  return router;
}