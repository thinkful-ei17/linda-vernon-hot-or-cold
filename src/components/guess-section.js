import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.message}</h2>
            <GuessForm feedback={(value) => props.feedback(value)}/>
        </section>
    );
}
