import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Chronology, Timeline } from '../src/Chronos';

storiesOf('<Chronology />', module)
  .add('default', () => (
    <div>
      <p>
        The <code>Chronology</code> component is as simple as an empty <code>div</code>.
        <br/>
        <em>That's the reason you can't see it.</em>
      </p>
      <Chronology />
    </div>
  ));
