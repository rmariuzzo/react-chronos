import React from 'react';
import { Chronology, Timeline } from '../src/Chronos';

require('./styles.scss');

class HorizontalChronologyWithMarkers extends React.Component {

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
        <Chronology type="horizontal" style={{ height: 300 }}>
          {this.state.events.map((event, i) => (
            <div key={event.id}>
              <div className="marker"></div>
              <div
                style={{ width: `${sizes[i % sizes.length]}px` }}
                className="event event-horizontal"
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

export default HorizontalChronologyWithMarkers;
