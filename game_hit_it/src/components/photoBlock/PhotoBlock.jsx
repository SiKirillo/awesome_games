import React from "react";
import style from "./PhotoBlock.module.css";

class PhotoBlock extends React.Component {


    render() {
        return (
            <div className={style.photo} onClick={this.props.onPhotoClick}>
                {this.props.id}
            </div>
        );
    }
}

export default PhotoBlock;