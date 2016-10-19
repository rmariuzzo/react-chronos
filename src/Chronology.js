import React, { PropTypes } from 'react';

/**
 * The Chronology component is the main and base component.
 */
class Chronology extends React.Component {
  render() {

    let { tagName, timeline, eventSelector, markerSelector } = this.props;
    timeline = timeline || 'vertical';
    eventSelector = eventSelector || '.event';
    markerSelector = markerSelector || '.mark';

    return (
      <div className="react-chronos--chronology">
        <div className="react-chronos--timeline"></div>
        {this.props.children}
      </div>
    );
  }
}

Chronology.propTypes = {
  timeline: PropTypes.oneOf(['horizontal', 'vertical']),
  eventSelector: PropTypes.string,
  markerSelector: PropTypes.string,
  children: PropTypes.any,
};

export default Chronology;
