// ClientApp/index.tsx
import React from "react";
import { createRoot } from 'react-dom/client';
import { components } from './components';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('react-root');
  if (!rootElement) return;

  const componentName = rootElement.getAttribute('data-component');
  const propsData = rootElement.getAttribute('data-props');

  if (!componentName || !(componentName in components)) {
    console.error(`Componente "${componentName}" no encontrado en el objeto 'components'.`);
    return;
  }

  let props = {};
  if (propsData) {
    try {
      props = JSON.parse(propsData);
    } catch (e) {
      console.error('Error al parsear data-props:', e);
      return;
    }
  }

  const Component = components[componentName as keyof typeof components];
  const root = createRoot(rootElement);
  root.render(<Component {...props} />);
});