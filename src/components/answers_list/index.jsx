import * as React from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import { bindActionCreators } from "redux";

import "react-table/react-table.css";

import DEFAULT_QUESTIONS from "../../data/questions";

import {
    getAnswersList,
} from "../../actions/quests";

/**
 *
 */
class AnswersList extends React.Component {

    /**
     *
     */
    constructor(props) {
        super(props);

        this.state = {
            columns: [],
            answers: [],
        };
    }

    /**
     *
     */
    componentWillMount() {
        const newColumns = [];

        DEFAULT_QUESTIONS.forEach((answer) => {
            const newColumn = {
                header: answer.title,
                accessor: answer.name,
            };

            newColumns.push(newColumn);
        });

        this.setState({
            columns: newColumns,
        });

        this.props.getAnswersList();
    }

    /**
     *
     */
    render() {
        return <ReactTable
            data={this.state.answers}
            columns={this.state.columns}
        />;
    }

    /**
     *
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            answers: nextProps.answers,
        });
    }
}


function mapStateToProps(state) {
    return {
        answers: state.quests.answersList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getAnswersList}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswersList);
