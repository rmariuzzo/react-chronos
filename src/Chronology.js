import React, { PropTypes } from 'react';
import * as utils from './utils'

let styles;

/**
 * The Chronology component is the main and base component.
 */
class Chronology extends React.Component {

  constructor(props) {
    super(props);
    this.styles = {
      timeline: {},
    };
  }

  styleTimeline() {
    if (this.options.type === 'horizontal') {
      this.styles.timeline = { ...styles.timeline, ...styles.timelineHorizontal };
    } else if (this.options.type === 'vertical') {
      this.styles.timeline = { ...styles.timeline, ...styles.timelineVertical };
    }
  }

  styleEvents() {
    const events = this.container.querySelectorAll(this.options.eventSelector);

    // Positionate events side by side.
    let sides = { a: 0, b: 0 };
    Array.prototype.forEach.call(events, (event) => {
      event.style.position = 'absolute';
      if (this.options.type === 'horizontal') {
        // Select in which side to put the event.
        if (sides.a <= sides.b) {
          event.style.top = 0;
          event.style.left = `${sides.a}px`;
          sides.a += utils.outerWidth(event);
        } else {
          event.style.bottom = 0;
          event.style.left = `${sides.b}px`;
          sides.b += utils.outerWidth(event);
        }
        console.log(sides);
        // Adjust the width of the container and the timeline.
        // TODO The container should only be resized if the width wasn't provided.
        // this.container.style.width = Math.max(sides.a, sides.b) + 'px';
        this.timeline.style.width = Math.max(sides.a, sides.b) + 'px';
      } else if (this.options.type === 'vertical') {
        // Select in which side to put the event.
        if (sides.a <= sides.b) {
          event.style.left = 0;
          event.style.top = `${sides.a}px`;
          sides.a += utils.outerHeight(event);
        } else {
          event.style.right = 0;
          event.style.top = `${sides.b}px`;
          sides.b += utils.outerHeight(event);
        }
        // Adjust the height of the container and the timeline.
        // TODO The container should only be resized if the height wasn't provided.
        // this.container.style.height = Math.max(sides.a, sides.b) + 'px';
        this.timeline.style.height = Math.max(sides.a, sides.b) + 'px';
      }
    });
  }

  redraw() {
    this.container.style.position = 'relative';
    this.styleTimeline();
    this.styleEvents();
  }

  componentDidMount() {
    this.redraw();
  }

  componentDidUpdate() {
    this.redraw();
  }

  render() {

    let { type, eventSelector, markerSelector, ...otherProps } = this.props;
    type = type || 'vertical';
    eventSelector = eventSelector || '.event';
    markerSelector = markerSelector || '.mark';
    this.options = { type, eventSelector, markerSelector };

    return (
      <div { ...otherProps } ref={(el) => this.container = el}>
        <div style={this.styles.timeline} ref={(el) => this.timeline = el}></div>
        {this.props.children}
      </div>
    );
  }
}

Chronology.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  eventSelector: PropTypes.string,
  markerSelector: PropTypes.string,
};

styles = {
  timeline: {
    position: 'absolute',
    backgroundColor: '#ccc',
  },
  timelineHorizontal: {
    top: '50%',
    left: '0',
    height: '4px',
    marginTop: '-2px',
  },
  timelineVertical: {
    left: '50%',
    top: '0',
    width: '4px',
    marginLeft: '-2px',
  },
};

export default Chronology;
