import React from 'react';
import Link from 'next/link';

import Button from '../button';
import Input from '../input';

import {
  StyledHero,
  StyledLeftText,
  StyledRightText,
  StyledImage,
} from './styles';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <StyledHero>
        <StyledLeftText>Get a high level summary of your finances delivered to you at the end of each week.</StyledLeftText>
        <StyledImage src="/static/assets/illustration-1.svg"></StyledImage>
        <StyledImage id="desktop-image" src="/static/assets/illustration-2.svg"></StyledImage>
        <div>
          <StyledRightText>Find out the essence of what, how and where you spent, without getting lost in a sea of graphs and lists.</StyledRightText>
          <StyledRightText>Compare with your previous weeks and make smart decisions armed with all the information you need.</StyledRightText>
        </div>
      </StyledHero>
    );
  }
}

export default Hero;
