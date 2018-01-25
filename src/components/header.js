import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

  }

  triggerFinger() {
    console.log('Twitter finger has been triggered!');
      this.setState({show: !this.state.show });
    }

    render() {

      let isThereAModal = this.state.show ? <InfoModal trigger={() => this.triggerFinger()}/> : '';
    return (
        <header>
            <TopNav trigger={() => this.triggerFinger()} reset={() => this.props.reset()}/>
            {isThereAModal}
            <h1>HOT or COLD</h1>
        </header>
    );

  }
};
