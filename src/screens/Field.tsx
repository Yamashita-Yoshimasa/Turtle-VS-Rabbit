import * as React from "react"; 
import HP from "./HP";
import Comment from "./Comment";

interface FieldState {
    TurtleHP: number;
    RabbitHP: number;
    Damage: number;
    name: string;
    ShowFlag: boolean;
    ClickFlag: boolean
} 

class Field extends React.Component<{},FieldState> {
    constructor(props:{}) {
        super(props);
        this.state = {
            TurtleHP: 5,
            RabbitHP: 5,
            Damage: null,
            name: '',
            ShowFlag: false,
            ClickFlag: true,
        }
        this.RabbitAttack = this.RabbitAttack.bind(this)
    }

    TurtleAttack ():void {
        if(this.state.ClickFlag) {
            this.setState({ClickFlag: false});
            const Damage:number[] = [10,15,20,25];
            let TurtleAttack = Damage[Math.floor(Math.random()* Damage.length)];
            this.setState({Damage: TurtleAttack});
            this.setState({name: 'カメイ・ウェザー'})
            let RestHP = this.state.RabbitHP - TurtleAttack / 20; 
            if (RestHP > 0){
                this.setState({RabbitHP: RestHP}); 
            } else {
                this.setState({RabbitHP: 0});
                location.href ="/Turtle_win"

            }
            setTimeout(this.RabbitAttack ,800);
        }else {
            this.setState({ClickFlag:false});
        }
    }

    RabbitAttack ():void{
        const Damage:number[] = [15,15,15,15,15,20,20,20,20,20,100000000];
        let RabbitAttack = Damage[Math.floor(Math.random()* Damage.length)];
        this.setState({Damage: RabbitAttack});
        this.setState({name: 'バニー・パッキャオ'})
        let RestHP = this.state.TurtleHP - RabbitAttack / 20; 
        if (RestHP > 0){
            this.setState({TurtleHP: RestHP}); 
        } else {
            this.setState({TurtleHP: 0});
            setTimeout(()=>{location.href ="/Rabbit_win"},500);
        }
        this.setState({ClickFlag: true});
    }

    render () {
        interface CharacterHP {
            width:string;
        }
        let TurtleHP:CharacterHP = {
            width:`${this.state.TurtleHP}rem`,
        }
        let  RabbitHP:CharacterHP = {
            width:`${this.state.RabbitHP}rem`,
        } 
        let ShowDamage = this.state.ShowFlag ? <Comment Damage = {this.state.Damage} name = {this.state.name} /> : '';
        return (
            <div className="l-field">
                <div className="p-field">
                    <div className="p-field__wrapper">
                        <div className="p-field__character-box -turtle">
                            <img src={`${window.location.origin}/images/turtle.png`} alt="キャラクターの画像" className="p-field__character -turtle"/>
                            <HP CharacterHP = {TurtleHP} />
                            <button className="p-field__button -view" onClick = { () => {this.TurtleAttack(); this.setState({ShowFlag:true});}}>たたかう</button>
                        </div>
                        <div className="p-field__character-box -rabbit">
                            <HP CharacterHP = {RabbitHP} />
                            <img src={`${window.location.origin}/images/rabbit.png`} alt="キャラクターの画像" className="p-field__character -rabbit"/>
                        </div>
                    </div>
                </div>
                {ShowDamage}
            </div>
        );
    }
}

export default Field;
