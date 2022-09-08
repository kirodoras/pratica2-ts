import { Request, Response } from "express";
import * as questionService from "../services/questionService";
import * as answerService from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  // TODO
  const { askedBy, question } = req.body;
  await questionService.createQuestion(askedBy, question);
  res.status(201).send();
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
  const { answeredBy, answer } = req.body;
  const { id } = req.params;
  const questionId = +id;

  await answerService.createAnswer(answeredBy, answer, questionId);
  res.status(201).send();
}

export async function get(req: Request, res: Response) {
  // TODO
  const questions = await questionService.get();
  res.status(200).send({ questions });
}

export async function getById(req: Request, res: Response) {
  // TODO
  const { id } = req.params;
  const question = await questionService.getById(+id);
  res.status(200).send({ question });
}
