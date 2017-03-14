# React Chronos

⛓ React chronology component providing dual chronological timelines.

![Preview of dual chronological timelines](https://github.com/rmariuzzo/react-chronos/raw/master/banner.gif)

### Installation

```shell
npm install react-chronos --save
```

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

#### `eventSelector`

The query selector to use to find **events** inside the chronology.

#### `markerSelector`

The query selector to use to find **markers** inside the chronology.

#### `markerClassNames`

The object that defines the class names to be applied to **markers**. The shape of the object and its default values is as follow:

```js
{
    left: 'marker-left',
    right: 'marker-right',
    top: 'marker-top',
    bottom: 'marker-bottom',
}
```

For a vertical chronology the values for `left` and `right` will be applied to **markers** where its related **event** was positioned to any of those sides. The same behavior goes for horizontal chronology using `top` and `bottom`.

#### `markerStyles`

The object that defines the inline styles to be applied to **markers**. The shape of the object and its default values is as follow:

```js
{
    left: {},
    right: {},
    top: {},
    bottom: {},
}
```

For a vertical chronology the values for `left` and `right` will be applied to **markers** where its related **event** was positioned to any of those sides. The same behavior goes for horizontal chronology using `top` and `bottom`.

## Development

TBD

```shell
# For quick development and hot reload...
npm run storybook

# For building the distribution package...
npm start
```

## Tests

TBD

```shell
npm test
```
