import React, { PropTypes } from 'react';
import classnames from 'classnames/dedupe';
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
    if (this.props.type === 'horizontal') {
      this.styles.timeline = { ...styles.timeline, ...styles.timelineHorizontal };
    } else if (this.props.type === 'vertical') {
      this.styles.timeline = { ...styles.timeline, ...styles.timelineVertical };
    }
  }

  styleEvents() {
    const events = Array.from(this.container.querySelectorAll(this.props.eventSelector));
    const markers = Array.from(this.container.querySelectorAll(this.props.markerSelector));

    const centerX = this.container.offsetWidth / 2;
    const centerY = this.container.offsetHeight / 2;

    const { type, markerClassNames } = this.props;

    // Positionate events side by side.
    let sides = { a: 0, b: 0 };
    let lastMarkerPos = 0;

    events.forEach((event, i) => {
      event.style.position = 'absolute';

      if (type === 'horizontal') {
        // Select in which side to put the event.
        const top = sides.a <= sides.b;
        if (top) {
          event.style.top = 0;
          event.style.left = `${sides.a}px`;
          sides.a += utils.outerWidth(event);
        } else {
          event.style.bottom = 0;
          event.style.left = `${sides.b}px`;
          sides.b += utils.outerWidth(event);
        }

        // Position the marker.
        const marker = markers[i];
        if (marker) {
          const className = top ? markerClassNames.top : markerClassNames.bottom;
          marker.className = classnames(marker.className, className);

          marker.style.position = 'absolute';
          marker.style.top = `${(centerY - (marker.offsetHeight / 2))}px`;

          let nextMarkerLeft = parseInt(event.style.left, 10);
          const markerOuterWidth = utils.outerWidth(marker);
          const willOverlap = i > 0 && (nextMarkerLeft <= (lastMarkerPos + markerOuterWidth));

          if (willOverlap) {
            nextMarkerLeft = lastMarkerPos + markerOuterWidth;
          }
          marker.style.left = `${nextMarkerLeft}px`;
          lastMarkerPos = nextMarkerLeft;
        }

        // TODO Handle special case where the marker could be place outside the event.

        // Adjust the width of the container and the timeline.
        // TODO The container should only be resized if the width wasn't provided.
        // this.container.style.width = Math.max(sides.a, sides.b) + 'px';
        this.timeline.style.width = Math.max(sides.a, sides.b) + 'px';
      } else if (type === 'vertical') {

        // Select in which side to put the event.
        const left = sides.a <= sides.b;
        if (left) {
          event.style.left = 0;
          event.style.top = `${sides.a}px`;
          sides.a += utils.outerHeight(event);
        } else {
          event.style.right = 0;
          event.style.top = `${sides.b}px`;
          sides.b += utils.outerHeight(event);
        }

        // Position the marker.
        const marker = markers[i];
        if (marker) {
          const className = left ? markerClassNames.left : markerClassNames.right;
          marker.className = classnames(marker.className, className);

          marker.style.position = 'absolute';
          marker.style.left = `${(centerX - (marker.offsetWidth / 2))}px`;

          let nextMarkerTop = parseInt(event.style.top, 10);
          const markerOuterHeight = utils.outerHeight(marker);
          const willOverlap = i > 0 && (nextMarkerTop <= (lastMarkerPos + markerOuterHeight));

          if (willOverlap) {
            nextMarkerTop = lastMarkerPos + markerOuterHeight;
          }
          marker.style.top = `${nextMarkerTop}px`;
          lastMarkerPos = nextMarkerTop;
        }

        // TODO Handle special case where the marker could be place outside the event.

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

    let { type, eventSelector, markerSelector, markerClassNames, markerStyles, ...otherProps } = this.props;

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
  markerClassNames: PropTypes.shape({
    left: PropTypes.string,
    right: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
  }),
  markerStyles: PropTypes.shape({
    left: PropTypes.object,
    right: PropTypes.object,
    top: PropTypes.object,
    bottom: PropTypes.object,
  }),
};

Chronology.defaultProps = {
  type: 'vertical',
  eventSelector: '.event',
  markerSelector: '.marker',
  markerClassNames: {
    left: 'marker-left',
    right: 'marker-right',
    top: 'marker-top',
    bottom: 'marker-bottom',
  },
  markerStyles: {
    left: {},
    right: {},
    top: {},
    bottom: {},
  },
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
