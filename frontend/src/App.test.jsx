import { render, screen } from '@testing-library/react' // [cite: 547]
import App from './App' // [cite: 547]
import { describe, it, expect } from 'vitest'

describe('App', () => { // [cite: 548]
  it('muestra el título de la aplicación', () => { // [cite: 549]
    render(<App />); // [cite: 550]
    const titulo = screen.getByText(/Inventario Web \(Demo\)/i); // [cite: 552]
    expect(titulo).toBeDefined(); // [cite: 553]
  });
});