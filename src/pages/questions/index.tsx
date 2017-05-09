import * as React from "react";
import AnswersList from "../../components/answers_list/index";

/**
 *
 */
class QuestionsPage extends React.Component<any, any> {
    public render() {
        return <div>
            <h1>Questions</h1>
            <AnswersList />
        </div>;
    }
}

export default QuestionsPage;
