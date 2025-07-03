# Solid.js Custom Elements Demo

This is a simple demonstration of using Solid.js custom elements directly in the browser without any build step.

## Features

- Uses import maps for module resolution
- No build tools required
- Pure browser-based implementation
- Includes two custom elements:
  - `<solid-counter>`: A counter component with increment/decrement functionality
  - `<solid-greeting>`: A greeting component with dynamic name input

## Usage

Simply serve the files using any HTTP server and open the index.html in a modern browser

## Demo
https://solid-custom-elements.pages.dev/

### Custom Elements

#### Counter Element
```html
<solid-counter initial-count="5"></solid-counter>
```

#### Greeting Element
```html
<solid-greeting name="World"></solid-greeting>
```

## Structure

- `index.html`: Main entry point
- `components/`: Contains custom element definitions
  - `counter-element.js`: Counter component
  - `greeting-element.js`: Greeting component