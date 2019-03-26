import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Button from '../button';
import Input from '../input';
import ProgressBar from '../progress';
import { signup, login, setCookie } from '../../services/userService';
import { Dropdown } from 'semantic-ui-react'
import Chart from 'chart.js';
import Map from '../map';

import {
  StyledSummaryContainer, StyledCard, StyledCardTitle, StyledTable, StyledPasswordModal, StyledScrim,
} from './styles';
import { isAbsolute } from 'path';

const apiKey = 'AIzaSyB2l7-JS9nr4NK98gKJo0rHtfz3k98cdFA';


class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: true,
    }
  }

  dropModal() {
    this.setState({
      modal: false,
    }, () => {
      const myChart = new Chart('myChart', {
        type: 'line',
        data: {
          labels: ['03/02', '10/02', '17/02', '24/02', '03/03', '10/03'],
          datasets: [{
            data: [517, 420, 670, 230, 300, 900],
            label: 'Total spend by weeks',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    });
  }

  render() {
    return this.state.modal ? (
      <StyledSummaryContainer>
        <StyledScrim></StyledScrim>
        <StyledPasswordModal>
          <h3 style={{ marginTop: '20px' }}>Welcome, Peter.</h3>
          <p>Enter your password to continue.</p>
          <Input placeholder="Password" type="password" onKeyUp={(e) => e.keyCode == 13 && this.dropModal()}></Input>
        </StyledPasswordModal>
      </StyledSummaryContainer>
    ) : (
        <StyledSummaryContainer>
          <StyledCard>
            <StyledCardTitle>Total Spend</StyledCardTitle>
            <canvas id="myChart" width="300" height="200"></canvas>
            <p style={{ marginTop: '20px' }}>You spent <span style={{ fontWeight: 400, color: '#EC0000' }}>38%</span> of your total monthly income.</p>
            <p style={{ marginTop: '20px' }}>You entered your overdraft on your Select Current Account.</p>

          </StyledCard>
          <StyledCard>
            <StyledCardTitle>Top Retailers</StyledCardTitle>
            <StyledTable>
              <tbody>
                <tr>
                  <td><img src="/static/assets/icons/sainsburys.svg" /></td>
                  <td>Sainsbury’s</td>
                  <td>9</td>
                  <td><img src="/static/assets/icons/green-arrow.svg" /></td>
                </tr>
                <tr>
                  <td><img src="/static/assets/icons/argos.svg" /></td>
                  <td>Argos</td>
                  <td>6</td>
                  <td><img src="/static/assets/icons/green-arrow.svg" /></td>
                </tr>
                <tr>
                  <td><img src="/static/assets/icons/cineworld.svg" /></td>
                  <td>Cineworld</td>
                  <td>4</td>
                  <td><img src="/static/assets/icons/red-arrow.svg" /></td>
                </tr>
              </tbody>
            </StyledTable>
          </StyledCard>
          <StyledCard>
            <StyledCardTitle>Most Expensive Transactions</StyledCardTitle>
            <StyledTable>
              <tbody>
                <tr>
                  <td><img src="/static/assets/icons/sainsburys.svg" /></td>
                  <td>Sainsbury’s</td>
                  <td>£175.43</td>
                  <td>07/03</td>
                </tr>
                <tr>
                  <td><img src="/static/assets/icons/argos.svg" /></td>
                  <td>Argos</td>
                  <td>£128.50</td>
                  <td>06/03</td>
                </tr>
                <tr>
                  <td><img src="/static/assets/icons/british-airways.svg" /></td>
                  <td>British Airways</td>
                  <td>£91.00</td>
                  <td>08/03</td>
                </tr>
              </tbody>
            </StyledTable>
          </StyledCard>
          <StyledCard style={{ height: '260px' }}>
            <StyledCardTitle>Where You’ve Been</StyledCardTitle>
            <Map></Map>
          </StyledCard>
          <StyledCard>
            <StyledCardTitle>Standing Orders & Direct Debits</StyledCardTitle>
            <StyledTable>
              <tbody>
                <tr>
                  <td><img src="/static/assets/icons/spotify.svg" /></td>
                  <td>Spotify</td>
                  <td>£4.99</td>
                  <td>07/03</td>
                </tr>
                <tr>
                  <td><img src="/static/assets/icons/netflix.svg" /></td>
                  <td>Netflix</td>
                  <td>£7.99</td>
                  <td>06/03</td>
                </tr>
                <tr>
                  <td><img src="/static/assets/icons/estate.svg" /></td>
                  <td>Estate Agent</td>
                  <td>£795.00</td>
                  <td>08/03</td>
                </tr>
              </tbody>
            </StyledTable>
          </StyledCard>
        </StyledSummaryContainer >
      );
  }

}


export default Summary;
