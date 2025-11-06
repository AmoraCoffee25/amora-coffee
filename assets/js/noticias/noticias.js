const noticias = [
  {
    titulo: "Vasos 100 % biodegradables",
    fecha: "Noviembre 2025",
    imagen: "C:/cafeteria/amora-coffee/imagenes/1.jpeg",
    imagenes: [
      "C:/cafeteria/amora-coffee/imagenes/1.jpeg",
      "C:/cafeteria/amora-coffee/imagenes/2.jpeg",
      "C:/cafeteria/amora-coffee/imagenes/3.jpeg"
    ],
    resumen: "Amora Coffee presenta su nueva línea de vasos, tapas y sorbetes biodegradables elaborados con materiales naturales.",
    contenido: `
      Amora Coffee reafirma su compromiso con el cuidado del planeta con el lanzamiento
      de su nueva línea de vasos, tapas y sorbetes 100 % biodegradables y compostables,
      elaborados a partir de materiales naturales que se degradan sin dejar residuos contaminantes.<br><br>
      Esta iniciativa forma parte del proyecto “Café con propósito”, con el que la marca busca
      reducir su huella ecológica y promover un consumo más responsable entre sus clientes.
    `
  },
];

// Renderizado visual
const contenedor = document.getElementById("contenedor-noticias");

contenedor.innerHTML = noticias.map(noticia => `
  <article class="news-card" onclick="mostrarDetalle('${encodeURIComponent(JSON.stringify(noticia))}')">
    <img src="${noticia.imagen}" alt="${noticia.titulo}">
    <div class="news-info">
      <h2>${noticia.titulo}</h2>
      <p class="fecha"><i class="bi bi-calendar-event"></i> ${noticia.fecha}</p>
      <p>${noticia.resumen}</p>
      <span class="leer-mas">Leer más →</span>
    </div>
  </article>
`).join("");

// Modal de detalle
function mostrarDetalle(noticiaCodificada) {
  const noticia = JSON.parse(decodeURIComponent(noticiaCodificada));

  const galeria = noticia.imagenes
    .map(img => `<img src="${img}" alt="${noticia.titulo}">`)
    .join("");

  const modal = document.createElement("div");
  modal.classList.add("modal-noticia");
  modal.innerHTML = `
    <div class="modal-content">
      <button class="cerrar" onclick="this.parentElement.parentElement.remove()">&times;</button>
      <div class="galeria">${galeria}</div>
      <h2>${noticia.titulo}</h2>
      <p class="fecha">${noticia.fecha}</p>
      <p>${noticia.contenido}</p>
    </div>
  `;
  document.body.appendChild(modal);
}

