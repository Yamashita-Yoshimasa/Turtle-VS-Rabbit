import * as React from "react"

interface HPProps {
    Character: string;
    HP: {},
}

class HP extends React.Component<HPProps,{}> {
    render (){
        return(
            <div className="l-hp">
                <p>HP:</p>
                <div className="p-hp__box">
                    <div className={`p-hp__bar -view ${this.props.Character}`} style = {this.props.HP}></div>
                </div>
            </div>
        );
    }
}

export default HP;
