import React from 'react';
import style from './App.module.css';
import GameBlock from "./components/gameBlock/GameBlock";
import PhotoBlock from "./components/photoBlock/PhotoBlock";
import Counter from "./components/counter/Counter";
import music from "./templates/dogMusic.mp3";

class App extends React.Component {
    state = {
        fieldSize: 9,
        currentIndex: 0,
        counter: 0
    };

    onPhotoClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
        let audio = new Audio(music);
        audio.currentTime = 0;
        audio.play();
        this.getRandomIndex();
    };

    getRandomIndex = () => {
        let randomNumber = Math.floor(Math.random() * this.state.fieldSize);
        this.setState({
            currentIndex: randomNumber
        });
    };

    componentDidMount() {
        setInterval(this.getRandomIndex, 1000);
    };

    render() {
        let fieldElements = [];

        let createField = () => {
            let photoIndex = this.state.currentIndex;
            for (let i = 0; i < this.state.fieldSize; i++) {
                if (i === photoIndex) {
                    fieldElements.push(<PhotoBlock id={i}
                                                   onPhotoClick={this.onPhotoClick}/>)
                } else {
                    fieldElements.push(<GameBlock id={i}/>);
                }
            }
        };

        createField();

        return (
            <div className={style.App}>
                <div className={style.gameWrapper}>
                    {fieldElements}
                </div>
                <Counter counter={this.state.counter}/>
                {this.state.random}
            </div>
        );
    }
}

export default App;
