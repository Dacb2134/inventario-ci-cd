import { useEffect, useState } from "react"; // [cite: 470]
import './App.css' // [cite: 473]

const API_URL = 'http://localhost:3000/api/productos'; // [cite: 474]

function App() {
  const [productos, setProductos] = useState([]); // [cite: 477]
  const [sku, setSku] = useState(''); // [cite: 479]
  const [nombre, setNombre] = useState(''); // [cite: 480]

  useEffect(() => {
    fetch(API_URL) // [cite: 483]
      .then((res) => res.json()) // [cite: 484]
      .then((json) => setProductos(json.data ?? [])) // [cite: 485]
      .catch((err) => console.error('Error cargando productos', err)); // [cite: 486]
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // [cite: 489]
    const nuevo = { sku, nombre }; // [cite: 490]

    const resp = await fetch(API_URL, { // [cite: 491]
      method: 'POST', // [cite: 493]
      headers: { 'Content-Type': 'application/json' }, // [cite: 494]
      body: JSON.stringify(nuevo) // [cite: 495]
    });

    if (resp.ok) { // [cite: 496]
      const json = await resp.json(); // [cite: 497]
      setProductos((prev) => [...prev, json.data]); // [cite: 500]
      setSku(''); // [cite: 502]
      setNombre(''); // [cite: 503]
    } else if (resp.status === 400) {
      // ACTIVIDAD 3: Validar respuesta 400 del API de inventario
      const errorJson = await resp.json();
      alert(`Error del servidor (400): ${errorJson.message}`);
    } else {
      alert('Error al crear producto'); // [cite: 505]
    }
  };

  return (
    <div>
      <h1>Inventario Web (Demo)</h1> {/* [cite: 512] */}
      <form onSubmit={handleSubmit}> {/* [cite: 513] */}
        <div>
          <label>SKU: </label> {/* [cite: 515] */}
          {/* ACTIVIDAD 3: Campo SKU marcado como obligatorio */}
          <input
            required
            [cite_start]value={sku} // [cite: 518]
            [cite_start]onChange={(e) => setSku(e.target.value)} // [cite: 519]
            placeholder="A-001" // [cite: 520]
          />
        </div>
        <div>
          <label>Nombre: </label> {/* [cite: 523] */}
          <input
            [cite_start]value={nombre} // [cite: 526]
            [cite_start]onChange={(e) => setNombre(e.target.value)} // [cite: 527]
            placeholder="Cable HDMI" // [cite: 527]
          />
        </div>
        <button type="submit">Crear producto</button> {/* [cite: 529] */}
      </form>
      <hr /> {/* [cite: 531] */}
      <h2>Productos actuales</h2> {/* [cite: 532] */}
      <ul> {/* [cite: 533] */}
        {productos.map((p) => ( // [cite: 534]
          <li key={p.id}> {/* [cite: 535] */}
            {p.sku} - {p.nombre} (stock: {p.stock}) {/* [cite: 536] */}
          </li>
        ))}
      </ul> {/* [cite: 541] */}
    </div>
  );
}

export default App; // [cite: 544]