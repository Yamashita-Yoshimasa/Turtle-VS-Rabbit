import * as React from "react";
import { Link } from 'react-router-dom';


class GameStart extends React.Component {
    render() {
        return (
            <div className="l-start">
                <h1 className="p-start__title -view">ウサギとカメ</h1>
                <button className="p-start__button -view"><Link to="/field" className="p-start__link">Game Start</Link></button>
            </div>

            );
    }
}

export default GameStart;
