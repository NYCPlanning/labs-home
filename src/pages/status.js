import React from 'react';
import { Route, Switch } from "react-router-dom";
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import Moment from 'react-moment';


import Hero from '../components/hero'

const statusURI = 'https://updown.io/api/checks?api-key=ro-nzbag1HJmfQBkkLjF12d';

const StatusCard = ({ status }) => {
  const { token, url, alias, uptime, down, last_check_at, next_check_at, ssl } = status;

  const { valid:sslValid } = ssl;
  return (

    <div className="callout cell medium-6" key={status.token}>
      <div className="grid-x grid-margin-x text-small">
        <div className="cell">
          <p className="float-right"><a href={`https://updown.io/${token}`} target="_blank"><FontAwesome name='external-link' fixedWidth={true} /> View full report</a></p>
          <h4 className={down ? 'header-medium status-down' : 'header-medium'}>
            <FontAwesome className={down ? 'status-down' : 'status-up'} name='circle' fixedWidth={true} />&nbsp;
            {alias}
          </h4>
        </div>
        <div className="cell large-6">
          <FontAwesome name='clock-o' size="2x" fixedWidth={true} className="float-left" style={{margin: '0.25rem 0.5rem 0.5rem 0', color: '#888'}} />
          <span className="nowrap">Last Check: <Moment format="k:mm:ss">{last_check_at}</Moment><br/></span>
          <span className="nowrap">Next Check: <Moment format="k:mm:ss">{next_check_at}</Moment></span>
        </div>
        <div className="cell large-6">
          <FontAwesome name='bar-chart' style={{margin: '-0.25rem 0.5rem 0.5rem 0', color: '#888'}} />
          {uptime}%&nbsp;Uptime
          <br/>
          <FontAwesome name='certificate' style={{margin: '0.25rem 0.5rem 0.5rem 0', color: '#888'}} />
          {sslValid ? 'SSL OK' : 'SSL invalid'}
        </div>
      </div>
    </div>
  )
}

class StatusPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statuses: [],
    };
  }

  componentDidMount() {
      console.log('didmount!')
    this.fetchStatusData();
  }

  fetchStatusData() {
    console.log('fetching!')
    return fetch(statusURI)
      .then(response => response.json())
      .then((statuses) => {
        console.log(statuses)
        this.setState({ statuses });
      });
  }

  render() {
    const { statuses } = this.state;
    console.log(statuses)

    const statusCards = () => {
      const cards = statuses
        .map((status, i) => <StatusCard key={i} status={status}/>);

      return (
        <div className="grid-x grid-margin-x">
          {cards}
        </div>
      )
    }


    const spinner = () => (
      <div className="main text-center" style={{
          padding: '20vh 0',
          color: '#888',
        }}>
        <FontAwesome name='refresh' size='3x' spin/>
      </div>
    )

    const { length } = statuses;



    return (
      <div className="main">
        <Hero
          title="Status"
          tagline="We continuously monitor the status of our services."
        />
        <div className="grid-container">
          { length ? statusCards() : spinner() }
        </div>
      </div>
    )
  }
}

export default StatusPage
