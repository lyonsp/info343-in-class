import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user">
                <div>
                    <img src={this.props.user.avatar_url} 
                        alt={this.props.user.login}/>
                </div>
                <div className="user-description">
                    <h2>{this.props.user.login}</h2>
                    <p>
                    {/*want to render what was put inside the start/end tag. In this case the add to fav button inside the UserCard*/}
                        {this.props.children}
                    </p>
                </div>
            </div>
        );
    }
}