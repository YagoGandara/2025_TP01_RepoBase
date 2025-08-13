// Versión inicial
function saludar() {
    console.log("Hola mundo");
}

saludar();

// src/app.js
const fs = require('fs');

// Nueva funcionalidad: analiza un archivo de texto
function analyze(file = 'data/info.txt') {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split(/\r?\n/).filter(l => l.length > 0).length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  return { lines, words };
}

// Si se ejecuta directamente: saluda y muestra estadísticas
if (require.main === module) {
  saludar();
  const target = process.argv[2] || 'data/info.txt';
  const { lines, words } = analyze(target);
  console.log(`Archivo: ${target} | líneas=${lines} | palabras=${words}`);
}

// Export para poder testear/importar
module.exports = { analyze, saludar };