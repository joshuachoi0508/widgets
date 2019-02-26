import React from 'react';
// import JobIndex from './JobIndex';

class Clock extends React.Component {
  constructor() {
    super();
    
    this.state = {
      time: new Date(),
    };
    
    this.tick = this.tick.bind(this);
  }
  
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  tick() {
    this.setState({time: new Date()});
  }
  
  render() {
    return (
      <div className="clock">
        <div className="clock-components">
          <h1 className="clock-title">Widgets</h1>
          <span className="time">{this.state.time.getMonth() + 1}-{this.state.time.getDate()}-{this.state.time.getFullYear() - 2000}</span>
          <span className="time">{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</span>
        </div>
      </div>  
    );
  }
}

export default Clock;