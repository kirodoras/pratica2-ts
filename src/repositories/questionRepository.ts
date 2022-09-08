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

export async function getById(id: number) {
  return await prisma.questions.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      askedBy: true,
      question: true,
      Answers: {
        select: {
          answeredBy: true,
			    answer: true
        },
      }
    }
  });
}
