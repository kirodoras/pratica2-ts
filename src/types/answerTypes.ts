import { Answers } from "@prisma/client";

type IAnswerData = Omit<Answers, "id">;

export { IAnswerData, Answers };
