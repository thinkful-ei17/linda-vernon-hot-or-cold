import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }


    render() {
    return (
        <form onSubmit={(e)=> {e.preventDefault(); this.props.feedback(this.state.value); this.setState({value: ''})}}>
            <input value={this.state.value} onChange={this.handleChange} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
    }
};



