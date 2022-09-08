// TODO
import { prisma } from "../config/database";

export async function createQuestion(askedBy: string, question: string) {
  await prisma.questions.create({
    data: {
      askedBy,
      question,
    },
  });
}

export async function get() {
  return await prisma.questions.findMany({});
}
