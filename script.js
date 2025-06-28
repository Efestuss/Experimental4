const items = [
  "Workflow CI (YAML) que se ejecuta en cada push a main.",
  "Despliegue automático a GitHub Pages.",
  "Estructura mínima: HTML, CSS, JavaScript.",
  "Código 100 % público y versionado con Git.",
  "Ejemplo para auditoría de configuración."
];

document.getElementById("features").innerHTML = items.map(text => `<li>${text}</li>`).join("");
