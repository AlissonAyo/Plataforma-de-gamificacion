'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mensaje, setMensaje] = useState('Probando conexión...');

  useEffect(() => {
    fetch('http://localhost:3001/test-db')
      .then((res) => res.json())
      .then((data) => {
        setMensaje(
          `${data.mensaje} | BD: ${data.resultado[0].current_database} | Usuario: ${data.resultado[0].current_user}`
        );
      })
      .catch(() => {
        setMensaje('Error al conectar con el backend');
      });
  }, []);

  return (
    <main style={{ padding: '40px' }}>
      <h1>CANS RoboLearn</h1>
      <p>{mensaje}</p>
    </main>
  );
}