// TODO
import { prisma } from "../config/database";

export async function createAnswer(
  answeredBy: string,
  answer: string,
  questionId: number
) {
  await prisma.answers.create({
    data: {
      answeredBy,
      answer,
      questionId,
    },
  });
}
