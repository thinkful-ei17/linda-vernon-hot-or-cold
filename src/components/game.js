import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            guessNumber: null,
            randomNumber: this.setRandomNumber(),
            feedback: 'Make your guess!',
            guessList: [],
            count: 0
        }
    }
    setRandomNumber(){
        let generateNumber = Math.floor((Math.random() * 100))
        return generateNumber
    }

    updateFeedback(number, guess){
        let answer = parseInt(number);
        let distance = Math.abs(answer-guess);
        if(answer === parseInt(guess)){
            return 'You got it!'
        }   
        else if (distance >= 50){
            return 'You are ice cold!'
        }
        else if(distance < 50 && distance >=30 ){
            return 'You are cold!'
        }
        else if(distance < 30 && distance > 10 ){
            return 'You are warm!'
        }
        else if(distance <= 10) {
            return 'You are hot!!!'
        }
        else {
            return 'Make your guess!'
        }
    }

    resetState(){
        this.setState({guessNumber: null, randomNumber: this.setRandomNumber(), feedback: 'Make your guess!', guessList: [], count: 0})
        console.log('is resetState done');
    }


    updateAll(guessNumber){
        if(this.updateFeedback(this.state.randomNumber, guessNumber) === 'You got it!'){
            this.setState({feedback: this.updateFeedback(this.state.randomNumber, guessNumber)})
        }
        else {
            this.setState({guessList: [...this.state.guessList, guessNumber], feedback: this.updateFeedback(this.state.randomNumber, guessNumber), count: [...this.state.guessList, guessNumber].length})
            console.log(this.state.randomNumber);
        }
    }

    render(){
        return (
            <div>
                <Header reset={() => this.resetState()}/>
                <GuessSection feedback={(guessNumber) => {this.updateAll(guessNumber)}} message={this.state.feedback} />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guessList} />
            </div>
        );
    }
}

