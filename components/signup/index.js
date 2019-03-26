import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Button from '../button';
import Input from '../input';
import ProgressBar from '../progress';
import { signup, login, setCookie } from '../../services/userService';
import { Dropdown } from 'semantic-ui-react'

import {
  StyledSignupContainer, StyledFormContainer, StyledInputContainer, StyledDropdownContainer,
} from './styles';

const accountOptions = [
  {
    key: '1',
    text: '1|2|3 Current Account',
    value: '1',
  },
  {
    key: '2',
    text: 'Select Current Account',
    value: '2',
  },
  {
    key: '3',
    text: 'Everyday Credit Card',
    value: '3',
  },
];

const deliveryOptions = [
  {
    key: '1',
    text: 'Email',
    value: 'email',
  },
  {
    key: '2',
    text: 'Phone',
    value: 'phone',
  },
];

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      step: 1,
      accounts: [],
      income: '',
      delivery: '',
      phone: '',
      email: '',
      accountDropdowns: [1],
    };

    this.handleInput = this.handleInput.bind(this);
    this.addNewAccount = this.addNewAccount.bind(this);
  }

  handleInput(event, field) {
    this.setState({ [field]: event.target.value });
  }

  step1() {
    // get the acess token
    this.setState({ step: 2 });
  }

  step2() {
    this.setState({ step: 3 });
  }

  step3() {
    this.setState({ step: 4 });
  }

  step4() {
    this.setState({ step: 5 });
  }

  addNewAccount() {
    if (this.state.accountDropdowns.length < 3) {
      this.setState((state, props) => ({
        accountDropdowns: [...state.accountDropdowns, state.accountDropdowns.length + 1],
      }));
    }
  }

  setDelivery(event, data) {
    this.setState({
      delivery: data.value,
    });
  }

  render() {
    return (
      <StyledSignupContainer>
        <StyledFormContainer>
          <ProgressBar step={this.state.step} />
          {this.state.step === 1 && (
            <StyledInputContainer height="150px">
              <Input placeholder="Username" value={this.state.username} onChange={e => this.handleInput(e, 'username')}></Input>
              <Input placeholder="Password" value={this.state.password} onChange={e => this.handleInput(e, 'password')} type="password"></Input>
              <Button onClick={() => this.step1()}>Continue</Button>
            </StyledInputContainer>
          )}
          {this.state.step === 2 && (
            <StyledInputContainer height="150px">
              {
                this.state.accountDropdowns.map(key => (
                  <StyledDropdownContainer>
                    <Dropdown
                      placeholder='Select account'
                      fluid
                      selection
                      options={accountOptions}
                      key={key}
                    />
                  </StyledDropdownContainer>
                ))
              }
              {this.state.accountDropdowns.length < 3 && (
                <Button alt onClick={() => this.addNewAccount()}>+ Add Account</Button>
              )}
              <Button onClick={() => this.step2()}>Continue</Button>
            </StyledInputContainer>
          )}
          {this.state.step === 3 && (
            <StyledInputContainer height="150px">
              <Input placeholder="Monthly income" value={this.state.income} onChange={e => this.handleInput(e, 'income')}></Input>
              <Button onClick={() => this.step3()}>Continue</Button>
            </StyledInputContainer>
          )}
          {this.state.step === 4 && (
            <StyledInputContainer height="150px">
              <StyledDropdownContainer>
                <Dropdown
                  placeholder='Select delivery'
                  fluid
                  selection
                  options={deliveryOptions}
                  onChange={(e, data) => this.setDelivery(e, data)}
                />
              </StyledDropdownContainer>
              {this.state.delivery === 'phone' && (
                <Input placeholder="Phone number" value={this.state.phone} onChange={e => this.handleInput(e, 'phone')}></Input>
              )}
              {this.state.delivery === 'email' && (
                <Input placeholder="Email" value={this.state.email} onChange={e => this.handleInput(e, 'email')}></Input>
              )}
              <Button onClick={() => this.step4()}>Continue</Button>
            </StyledInputContainer>
          )}
          {this.state.step === 5 && (
            <StyledInputContainer height="150px">
              <div>
                <p>You’ve successfully signed up to Santander Weekly Summary. You’ll recieve a link to view your summary via your chosen delivery method every sunday night.</p>
                <p>If you want to change your accounts or delivery method at any time, just go through this process again.</p>
              </div>
            </StyledInputContainer>
          )}
        </StyledFormContainer>
        <img src="/static/assets/illustration-3.svg"></img>
      </StyledSignupContainer>
    );
  }
}

export default Signup;
