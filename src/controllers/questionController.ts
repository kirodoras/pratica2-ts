import { Request, Response } from "express";
import * as questionService from "../services/questionService";

export async function createQuestion(req: Request, res: Response) {
  // TODO
  const { askedBy, question } = req.body;
  await questionService.createQuestion(askedBy, question);
  res.status(201).send();
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
