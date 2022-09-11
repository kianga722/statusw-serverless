import React, { Component } from 'react';
import axios from 'axios';

import Title from './Title/Title'
import Status from './Status/Status'
import Streams from './Streams/Streams'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null,
      active: null
    };
  }

  getActiveStreamers = streamersLive => {
    return Object.keys(streamersLive).filter(d => {
      return streamersLive[d].live === true
    })
  }

  // initial stream status check
  async componentDidMount() {
    const twitchURL = '/.netlify/functions/twitch';
    const dataTwitch = (await axios.get(twitchURL)).data;

    if (dataTwitch && dataTwitch.streamersLive) {
      const active = this.getActiveStreamers(dataTwitch.streamersLive)
      this.setState({
        status: dataTwitch.streamersLive,
        active
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Status status={this.state.status} />
        <Streams active={this.state.active} />
      </div>
    );
  }
}

export default App;
