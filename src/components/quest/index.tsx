import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import QuestItem from "./item";

import {
    getAnswersList,
    persistQuest,
} from "../../actions/quests";

import "./style.less";

import FORM_ERRORS from "../../data/errors";
import FORM_STATUSES from "../../data/statuses";
import STRINGS from "../../data/strings";

/**
 *
 */
class Quest extends React.Component<any, any> {
    /**
     *
     */
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            answers: [],
        };
    }

    /**
     * 
     */
    public componentWillMount() {
        this.initAnswers();

        this.props.getAnswersList();
    }

    /**
     * 
     */
    public initAnswers() {
        const newAnswers = [];

        this.props.questions.forEach((item) => {
            newAnswers.push(item);
        });

        this.setState({
            answers: newAnswers,
        });
    }

    /**
     * 
     */
    public onChangeValue(value, item) {
        let active = false;
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.state.answers.forEach((it) => {
            if (it.name === "email") {
                if (re.test(it.value)) {
                    active = true;
                }
            }
        });

        this.setState({active});
    }

    /**
     *
     */
    public renderQuestions() {
        const questions = [];
        
        this.state.answers.forEach((item) => questions.push(<QuestItem item={item} key={item.name} onChangeValue={this.onChangeValue.bind(this)} />));

        return questions;
    }

    /**
     * 
     */
    public onClick() {
        this.props.persistQuest(this.state.answers);
    }

    /**
     *
     */
    public render() {
        let error = "";

        if (this.props.form.status === FORM_STATUSES.ERROR) {
            if (this.props.form.error === FORM_ERRORS.ANSWERED) {
                error = STRINGS.ERRORS[this.props.form.error];
            }
        }

        return <div id="quest">
            {this.props.form.status !== FORM_STATUSES.PERSISTED ?
                <form action="">
                    <ul>
                        {this.renderQuestions()}
                    </ul>

                    <p className="error">{error}</p>

                    <input disabled={!this.state.active} onClick={this.onClick.bind(this)} className="button" type="button" value="Answer"/>
                </form>
                : 
                <p className="success">Thank you!</p>
            }
        </div>;
    }
}


function mapStateToProps(state) {
    return {
        form: state.quests.newQuest,
        questions: state.quests.questions,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({persistQuest, getAnswersList}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quest);
