import * as React from "react";
import Quest from "../../components/quest/index";

/**
 *
 */
class QuestionPage extends React.Component<any, any> {
    public render() {
        return <div>
            <h1>Your quest</h1>
            <Quest />
        </div>;
    }
}

export default QuestionPage;
