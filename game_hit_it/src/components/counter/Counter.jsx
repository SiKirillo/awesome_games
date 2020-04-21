import React from "react";
import style from "./Counter.module.css";

class Counter extends React.Component {
    render() {
        return (
            <div className={style.gameCounter}>
                <strong>{this.props.counter}</strong>
            </div>
        );
    }
}

export default Counter;