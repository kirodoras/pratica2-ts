// TODO
import * as answerRepository from '../repositories/answerRepository';

export async function createAnswer(answeredBy: string, answer: string, questionId: number) {
    console.log({answeredBy, answer, questionId});
    await answerRepository.createAnswer(answeredBy, answer, questionId);
}