import * as React from "react";

interface CommentProps {
    Damage: number;
    name: string;
}

class Comment extends React.Component<CommentProps,{}> {
    render(){
        return(
            <p>{this.props.name}の攻撃！！<br/>相手に{this.props.Damage}のダメージ！</p>
        );
    }
}

export default Comment;
