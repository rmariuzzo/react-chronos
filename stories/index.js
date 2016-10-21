import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Chronology, Timeline } from '../src/Chronos';

import HorizontalChronology from './HorizontalChronology';
import HorizontalChronologyWithMarkers from './HorizontalChronologyWithMarkers';
import VerticalChronology from './VerticalChronology';
import VerticalChronologyWithMarkers from './VerticalChronologyWithMarkers';

storiesOf('<Chronology />', module)
  .add('horizontal', () => (
    <HorizontalChronology />
  ))
  .add('vertical', () => (
    <VerticalChronology />
  ))
  .add('horizontal with markers', () => (
    <HorizontalChronologyWithMarkers />
  ))
  .add('vertical with markers', () => (
    <VerticalChronologyWithMarkers />
  ))
