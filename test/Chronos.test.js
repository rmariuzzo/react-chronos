import React from 'react';
import {shallow, mount} from 'enzyme';

import * as Chronos from './../src/index';

/*global describe, it, expect, spyOn*/

describe('Chronos', () => {

  it('should export a Chronology component', () => {
    expect(Chronos.Chronology).toBeDefined();
  });

  it('should export a Timeline component', () => {
    expect(Chronos.Timeline).toBeDefined();
  });

  it('should export an Event component', () => {
    expect(Chronos.Event).toBeDefined();
  });

  it('should export a Marker component', () => {
    expect(Chronos.Marker).toBeDefined();
  });

});
