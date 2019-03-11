import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/dedupe';
import { omit, keys } from 'lodash';
import * as utils from './utils';

/**
 * The Chronology component is the main and base component.
 */
class Chronology extends React.Component {

  /**
   * Construct a new chronlogy.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Apply styling to timeline.
   */
  styleTimeline() {
    this.timeline.style.position = 'absolute';

    if (this.props.type === 'horizontal') {
      const timelineHeight = this.timeline.offsetHeight;
      const containerHeight = this.container.offsetHeight;
      const timelineTop = ((containerHeight - timelineHeight) / containerHeight) / 2;
      this.timeline.style.top = `${timelineTop * 100}%`;
      this.timeline.style.left = 0;
      this.timeline.style.height = `${timelineHeight}px`;
      this.timeline.style.marginTop = `-${timelineHeight / 2}px`;
    } else if (this.props.type === 'vertical') {
      const timelineWidth = this.timeline.offsetWidth;
      const containerWidth = this.container.offsetWidth;
      const timelineLeft = ((containerWidth - timelineWidth) / containerWidth) / 2;
      this.timeline.style.left = `${timelineLeft * 100}%`;
      this.timeline.style.top = 0;
      this.timeline.style.width = `${timelineWidth}px`;
      this.timeline.style.marginTop = `-${timelineWidth / 2}px`;
    }
  }

  /**
   * Apply styling to events and its markers (if any).
   */
  styleEvents() {
    const events = Array.from(this.container.querySelectorAll(this.props.eventSelector));
    const markers = Array.from(this.container.querySelectorAll(this.props.markerSelector));

    const containerWidth = this.container.offsetWidth;
    const containerHeight = this.container.offsetHeight;

    const { type, eventClassNames, markerClassNames } = this.props;

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
          event.className = classnames(event.className, eventClassNames.top);
        } else {
          event.style.bottom = 0;
          event.style.left = `${sides.b}px`;
          sides.b += utils.outerWidth(event);
          event.className = classnames(event.className, eventClassNames.bottom);
        }

        // Position the marker.
        const marker = markers[i];
        if (marker) {
          const className = top ? markerClassNames.top : markerClassNames.bottom;
          marker.className = classnames(marker.className, className);

          marker.style.position = 'absolute';
          const markerTop = ((containerHeight - marker.offsetHeight) / containerHeight) / 2;
          marker.style.top = `${markerTop * 100}%`;

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
          event.className = classnames(event.className, eventClassNames.left);
        } else {
          event.style.right = 0;
          event.style.top = `${sides.b}px`;
          sides.b += utils.outerHeight(event);
          event.className = classnames(event.className, eventClassNames.right);
        }

        // Position the marker.
        const marker = markers[i];
        if (marker) {
          const className = left ? markerClassNames.left : markerClassNames.right;
          marker.className = classnames(marker.className, className);

          marker.style.position = 'absolute';
          const markerLeft = ((containerWidth - marker.offsetWidth) / containerWidth) / 2;
          marker.style.left = `${markerLeft * 100}%`;

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

  /**
   * Redraw the entire chronology.
   */
  redraw() {
    this.container.style.position = 'relative';
    this.styleTimeline();
    this.styleEvents();
  }

  /**
   * Redraw upon mounting.
   */
  componentDidMount() {
    this.redraw();
  }

  /**
   * Redraw upon update.
   */
  componentDidUpdate() {
    this.redraw();
  }

  /**
   * Render the chronology.
   */
  render() {
    const { timelineStyle } = this.props;
    const otherProps = omit(this.props, keys(Chronology.propTypes));

    return (
      <div ref={(el) => this.container = el} {...otherProps}>
        <div style={timelineStyle} ref={(el) => this.timeline = el}></div>
        {this.props.children}
      </div>
    );
  }
}

Chronology.propTypes = {
  type: PropTypes.oneOf(['horizontal', 'vertical']),
  eventSelector: PropTypes.string,
  eventClassNames: PropTypes.shape({
    left: PropTypes.string,
    right: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
  }),
  markerSelector: PropTypes.string,
  markerClassNames: PropTypes.shape({
    left: PropTypes.string,
    right: PropTypes.string,
    top: PropTypes.string,
    bottom: PropTypes.string,
  }),
  timelineStyle: PropTypes.object,
};

Chronology.defaultProps = {
  type: 'vertical',
  eventSelector: '.event',
  eventClassNames: {
    left: 'event-left',
    right: 'event-right',
    top: 'event-top',
    bottom: 'event-bottom',
  },
  markerSelector: '.marker',
  markerClassNames: {
    left: 'marker-left',
    right: 'marker-right',
    top: 'marker-top',
    bottom: 'marker-bottom',
  },
  timelineStyle: {
    backgroundColor: '#888',
  },
};

export default Chronology;
