const aliadosObvios = [
  "la Municipalidad",
  "la Junta Vecinal",
  "el Colegio"
];

const aliadosDisruptivos = [
  "la Panadería Local (para compostaje de residuos orgánicos)",
  "un Influencer de la zona (para visibilidad en redes sociales)",
  "el Club de Gamers (para campañas creativas de difusión)"
];

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generate");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", () => {
    const aliadoA = aliadosObvios[Math.floor(Math.random() * aliadosObvios.length)];
    const aliadoB = aliadosDisruptivos[Math.floor(Math.random() * aliadosDisruptivos.length)];

    resultDiv.innerHTML = `
      🌱 Tu proyecto se aliará con <strong>${aliadoA}</strong> y con <strong>${aliadoB}</strong>.
    `;
  });
});
