import { customElement } from 'solid-element';
import { createSignal } from 'solid-js';
import  html  from 'html';

console.log(html)
// Counter Custom Element
customElement(
  'solid-counter',
  {
    initialCount: 0,
  },
  (props) => {
    const [count, setCount] = createSignal(parseInt(props.initialCount) || 0);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);


    return () => html`
      <div style="border: 1px solid #ccc; padding: 1rem; margin: 1rem; border-radius: 4px;">
        <h2>Counter: ${count}</h2>
        <button onClick=${decrement} style="margin-right: 0.5rem;">-</button>
        <button onClick=${increment}>+</button>
      </div>
    `;
  }
);