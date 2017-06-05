import {
    GET_ANSWERS_LIST,
    PERSIST_QUEST,
} from "../actions/quests";

import FORM_ERRORS from "../data/errors";
import DEFAULT_QUESTIONS from "../data/questions";
import FORM_STATUSES from "../data/statuses";

const initialState = {
    answersList: [],
    questions: DEFAULT_QUESTIONS,
    newQuest: {
        status: FORM_STATUSES.READY,
        error: FORM_ERRORS.NONE,
    },
};

const LOCALSTORAGE_NAME = "answers";

function mutateToPersist(quest) {
    const newDate = {};

    quest.forEach((item) => {
        newDate[item.name] = item.value || "";
    });

    return newDate;
}

export default function questForm(state = initialState, action) {

    switch (action.type) {
        case PERSIST_QUEST:
            const newData = mutateToPersist(action.quest);
            const newQuest = {
                status: FORM_STATUSES.READY,
                error: FORM_ERRORS.NONE,
            };
            const answered = state.answersList.filter((item) => {
                return item.email === newData["email"] ? true : false;
            });

            if (answered.length === 0) {
                state.answersList.push(newData);

                localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(state.answersList));

                newQuest.status = FORM_STATUSES.PERSISTED;
                newQuest.error = FORM_ERRORS.NONE;
            } else {
                newQuest.status = FORM_STATUSES.ERROR;
                newQuest.error = FORM_ERRORS.ANSWERED;
            }

            return {...state, newQuest};
        case GET_ANSWERS_LIST:
            const answers = localStorage.getItem(LOCALSTORAGE_NAME);
            let answersList = [];

            try {
                answersList = JSON.parse(answers);
            } catch (e) {
                answersList = [];
            }

            if (answersList === null) {
                answersList = [];
            }

            return {...state, answersList};
        default:
            return state;
    }
}
