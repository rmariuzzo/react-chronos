import React from 'react';
import { Chronology } from '../src/Chronos';

let styles;

class HorizontalChronology extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };
    // There's no autobinding in React components declared as es6 classes 😭
    // https://facebook.github.io/react/docs/reusable-components.html#autobinding
    this.handleAddEvent = this.handleAddEvent.bind(this);
  }

  handleAddEvent() {
    let { events } = this.state;
    let date = new Date();
    let id = Math.random().toString(36).slice(2);
    events.push({ id, date });
    this.setState({ events });
  }

  render() {
    const sizes = [40, 60, 120];
    return (
      <div>
        <button onClick={this.handleAddEvent}>Add Event</button>
        <hr/>
        <Chronology
          type="horizontal"
          timelineStyle={{ height: '2px', backgroundColor: '#aaa' }}
          style={{ height: '300px' }}>
          {this.state.events.map((event, i) => (
            <div
              key={event.id}
              style={{ ...styles.event, ...{ width: `${sizes[i % sizes.length]}px` } }}
              className="event"
              >
              {`#${i}`}
            </div>
          ))}
        </Chronology>
      </div>
    );
  }
}

styles = {
  event: {
    backgroundColor: '#fe6191',
    padding: '10px',
    marginLeft: '15px',
    height: '45%',
    boxSizing: 'border-box',
    border: '5px solid #6c6349',
  },
};

export default HorizontalChronology;
