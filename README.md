# React Chronos

⛓ React chronology components: Timeline, Event, EventDetails and Pin.

# 🔨 This project is currently work in progress

## Concept

### Usage

```js
import { Chronology, Timeline, Event, Pin } from 'react-chronos';

class Dashboard extends Component {
  render() {
    return (
      <Chronology
        tagName="ul"
        timeline="vertical"
        eventSelector=".event"
        markerSelector=".marker"
        >
      </Chronology>
    );
  }
}
```

### Feature

 - [ ] Single horizontal `<Chronology />` rendering.
 - [ ] Single vertical `<Chronology />` rendering.
 - [ ] Dual horizontal `<Chronology />` rendering.
 - [ ] Dual vertical `<Chronology />` rendering.
