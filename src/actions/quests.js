export const PERSIST_QUEST = "PERSIST_QUEST";
export const GET_ANSWERS_LIST = "GET_ANSWERS_LIST";

export function persistQuest(quest) {
    return {
        type: PERSIST_QUEST,
        quest,
    };
}
export function getAnswersList() {
    return {
        type: GET_ANSWERS_LIST,
    };
}

