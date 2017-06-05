import * as React from "react";

/**
 *
 */
class QuestItem extends React.Component {
    /**
     *
     */
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };
    }

    /**
     *
     */
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.item.value,
        });
    }

    /**
     *
     */
    handleChange(event) {
        const value = event.target.value;

        this.setState({value});

        this.props.item.value = value;
        this.props.onChangeValue();
    }

    /**
     *
     */
    handleChangeCheckbox(event) {
        const value = "" + event.target.checked;

        this.setState({value});

        this.props.item.value = value;
        this.props.onChangeValue();

        console.log(this.props.item);
    } 

    /**
     *
     */
    render() {
        let input;

        const item = this.props.item;
        const type = item.type;

        if (type === "string" ||
            type === "email") {
            input = <input type={type === "string" ? "text" : "email"} name={item.name} placeholder={item.placeholder} onChange={this.handleChange.bind(this)} />;
        }

        if (this.props.item.type === "bool") {
            input = <input type="checkbox" name={item.name} onChange={this.handleChangeCheckbox.bind(this)} />;
        }

        return <div className={`${this.props.item.type} quest_item`}>
            <label htmlFor="">{this.props.item.title}</label>

            <span className="value">{input}</span>
        </div>;
    }
}

export default QuestItem;
