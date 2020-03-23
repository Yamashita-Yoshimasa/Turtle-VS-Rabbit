import * as React from "react"

interface HPProps {
    CharacterHP: {},
}

class HP extends React.Component<HPProps,{}> {
    render (){
        return(
            <div className="l-hp">
                <p>HP:</p>
                <div className="p-hp__box">
                    <div className="p-hp__bar -view"style = {this.props.CharacterHP}></div>
                </div>
            </div>
        );
    }
}

export default HP;
