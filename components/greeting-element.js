import { customElement } from 'solid-element';
import { createSignal } from 'solid-js';
import  html  from 'html';

console.log(html)
// Greeting Custom Element
customElement(
  'solid-greeting',
  {
    name: ''
  },
  (props) => {
    const [name, setName] = createSignal(props.name || 'Guest');

    const updateName = (event) => {
      setName(event.target.value);
    };

    return () => html`
      <div style="border: 1px solid #ccc; padding: 1rem; margin: 1rem; border-radius: 4px;">
        <div style="margin-bottom: 1rem;">
          <label>
            Enter name: 
            <input 
              type="text" 
              value=${name} 
              onInput=${updateName}
              style="margin-left: 0.5rem;"
            />
          </label>
        </div>
        <h2>Hello, ${name}!</h2>
      </div>
    `;
  }
);