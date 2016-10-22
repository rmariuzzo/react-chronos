import React from 'react';
import { Chronology, Timeline } from '../src/Chronos';

require('./styles.scss');

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
              <div className="marker"></div>
              <div className="event event-vertical"
                style={{ height: `${sizes[i % sizes.length]}px` }}>
                {`#${i}`}
              </div>
            </div>
          ))}
        </Chronology>
      </div>
    );
  }
}

export default VerticalChronologyWithMarkers;
