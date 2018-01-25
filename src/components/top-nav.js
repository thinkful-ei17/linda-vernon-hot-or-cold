import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={() => props.trigger()} className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={() => props.reset()}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}
