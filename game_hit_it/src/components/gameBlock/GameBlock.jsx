import React from "react";
import style from "./GameBlock.module.css";

class GameBlock extends React.Component {
    render() {
        return (
            <div className={style.block}>
                {this.props.id}
            </div>
        );
    }
}

export default GameBlock;