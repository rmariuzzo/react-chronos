# React Chronos

⛓ React chronology components: Timeline, Event, EventDetails and Pin.

# 🔨 This project is currently work in progress

## Concept

### Usage

```jsx
import Chronology from 'react-chronos';

<Chronology type="vertical">
    {events.map(event => (
        <div class="marker"></div>
        <div class="event">{ event.details }</div>
    ))}
</Chronology>
```

## Documentation

### `Chronology`

The `Chronology` component is the main and only component provided by `react-chronos`. It accepts the following properties:

#### `type`

The type of chronology and timeline to render. It can one of the following values: `horizontal` or `vertical`. If not specified, the default will be `vertical`.
