# React Chronos

⛓ React chronology components: Timeline, Event, EventDetails and Pin.

# 🔨 This project is currently work in progress

## Concept

### Usage

```jsx
import { Chronology, Timeline, Event, Pin } from 'react-chronos';

class Dashboard extends Component {
  render() {
    return (
      <Chronology>
        <Timeline />
        {events.map(event => (
          <Event>
            <Pin>
              <img src={event.user.avatar} />
            </Pin>
            <EventDetails>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </EventDetails>
          </Event>
        ))}
      </Chronology>
    );
  }
}
```

### Feature

 - [ ] Single horizontal `<Timeline />` rendering.
 - [ ] Single vertical `<Timeline />` rendering.
 - [ ] Dual horizontal `<Timeline />` rendering.
 - [ ] Dual vertical `<Timeline />` rendering.
 - [ ] Single horizontal `<Event />` layout support.
 - [ ] Single vertical `<Event />` layout support.
 - [ ] Dual horizontal `<Event />` layout support.
 - [ ] Dual vertical `<Event />` layout support.
 - [ ] Single horizontal timeline's `<Pin />` attachment.
 - [ ] Single vertical timeline's `<Pin />` attachment.
 - [ ] Dual horizontal timeline's `<Pin />` attachment.
 - [ ] Dual vertical timeline's `<Pin />` attachment.

 
 
