import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Chronology, Timeline } from '../src/Chronos';

let styles;

class ChronologyWithEvents extends React.Component {

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
        <Chronology { ...this.props }>
          {this.state.events.map((event, i) => (
            <div
              key={event.id}
              style={{ ...styles.event, ...{ height: `${sizes[i % sizes.length]}px` } }}
              className="event"
              >
              {`Event #${i}`}
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
};

storiesOf('<Chronology />', module)
  .add('horizontal', () => (
    <ChronologyWithEvents type="horizontal" style={{ height: '300px' }} />
  ))
  .add('vertical', () => (
    <ChronologyWithEvents type="vertical" />
  ));
