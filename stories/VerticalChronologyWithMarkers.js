import React from 'react';
import { Chronology, Timeline } from '../src/Chronos';

let styles;

class VerticalChronologyWithMarkers extends React.Component {

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
        <Chronology type="vertical">
          {this.state.events.map((event, i) => (
            <div key={event.id}>
              <div className="marker" style={ styles.marker }></div>
              <div
                style={{ ...styles.event, ...{ height: `${sizes[i % sizes.length]}px` } }}
                className="event"
                >
                {`#${i}`}
              </div>
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
    marginBottom: '15px',
    width: '45%',
    boxSizing: 'border-box',
    border: '5px solid #6c6349',
  },
  marker: {
    width: '16px',
    height: '16px',
    backgroundColor: '#263238',
    borderRadius: '16px',
    marginBottom: '10px',
  }
};

export default VerticalChronologyWithMarkers;
