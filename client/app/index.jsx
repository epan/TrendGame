import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import data from '../../integration-tests/fixtures/stitched-timeline';
import Layout from './components/Layout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      start: '',
      end: '',
      trend: '',
      storyPoint: {}
    };
    this.collectData = this.collectData.bind(this);
  }

  collectData(trend) {
    this.setState({trend: trend});
    axios.get('/api/timeline', {
      params: {
        q: trend
      }
    })
    .then( response => {
      console.log('This is the reponse!', response.data);
      let timeline = response.data;

      this.setState({
        start: timeline[0].date,
        end: timeline[timeline.length - 1].date,
        storyPoint: this.findStoryPoint(timeline),
        data: this.makeChartPoints(timeline)
      });

      console.log(this.state.start, this.state.end, this.state.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(trend);
  }

  makeChartPoints (timeline) {
    let dataTuple = [['Date', 'Popularity']];
    timeline.forEach(point => {
      dataTuple.push( [point.date, point.popularity] );
    });
    console.log('This is the dataTuple', dataTuple);
    return dataTuple;
  }

  findStoryPoint (timeline) {
    for (let point of timeline) {
      if ('stories' in point) {
        return point;
      }
    }
  }

  render () {
    return (
      <Layout
        chartData={this.state}
        collectData={this.collectData}
        storyPoint={this.state.storyPoint}
      />
    );
  }
}

render(<App/>, document.getElementById('app'));

