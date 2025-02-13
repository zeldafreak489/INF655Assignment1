import React, {Component} from "react";

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            profession: 'Software Engineer'
        };
    }

    render() {
        return (
            <div>
                <h2>Name: {this.state.name}</h2>
                <h3>Profession: {this.state.profession}</h3>
                <p>Your lucky number is {Math.floor(Math.random() * 100)}</p>
            </div>
        );
    }
}