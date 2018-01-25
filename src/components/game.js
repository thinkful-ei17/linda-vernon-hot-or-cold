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
        let answer = number;
        let distance = Math.abs(answer-guess);
        if(distance >= 50){
            return 'You are ice cold!'
        }
        else if(distance >=30 && distance < 50){
            return 'You are cold!'
        }
        else if(distance > 10 && distance < 30){
            return 'You are warm!'
        }
        else if(answer === guess){
            return 'You got it!'
        }
        else if(distance <= 10) {
            return 'You are hot!!!'
        }
        else {
            return 'Make your guess!'
        }
    }


    updateAll(guessNumber){
        if(this.updateFeedback(this.state.randomNumber, guessNumber) === 'You got it'){
            //reset
            this.setState({guessNumber: null, randomNumber: this.setRandomNumber(), feedback: 'Make your guess!'})
        }
        else {
            this.setState({guessList: [...this.state.guessList, guessNumber], message: this.updateFeedback(this.state.randomNumber, guessNumber), count: this.state.guessList.length})
        }
    }

    printSomething(e){
        e.preventDefault();
        console.log('I am printing e', e);
    }

    render(){
        return (
            <div>
                <Header />
                <GuessSection feedback={(guessNumber) => {this.printSomething(guessNumber)}} />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}

