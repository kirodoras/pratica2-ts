// TODO
import * as questionRepository from '../repositories/questionRepository';

export async function createQuestion(askedBy: string, question: string) {
    console.log({askedBy, question});
    await questionRepository.createQuestion(askedBy, question);
}

export async function get() {
    const questions = await questionRepository.get();
    return questions;
}