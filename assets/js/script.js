import propiedadesAlquiler from "./data/alquiler.js";
import propiedadesVenta from "./data/venta.js";

const mostrarPropiedades = (propiedades, containerClass) => {
  const container = document.querySelector(`.${containerClass}`);

  let template = "";
  const filtros = propiedades.slice(0, 3);
  for (const filtro of filtros) {
    template += `
    <article class ="col-md-4 mb-4">
        <div class = "card">
        <img src =" ${filtro.src}" alt="Imagen del departamento"/>
        <div class ="card-body">
        <h5 class ="card-title">${filtro.nombre}</h5>
        <p class ="card-text"> ${filtro.descripcion}</p>
        <p><i class ="fas fa-map-marker-alt"></i> ${filtro.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${filtro.habitaciones} Habitaciones |
        <i class ="fas fa-bath"></i> ${filtro.bathroom} Baños</p>
        <p><i class ="fas fa-dollar-sign"></i> ${filtro.costo.toLocaleString(
          "es"
        )}</p>
        <p class="${filtro.smoke == true ? "text-success" : "text-danger"}">
        <i class="${
          filtro.smoke == true ? "fas fa-smoking" : "fas fa-smoking-ban"
        }"></i> ${
      filtro.smoke == true ? "Se permite fumar" : "No se permite fumar"
    }</p>
        <p class="${filtro.pets == true ? "text-success" : "text-danger"}">
        <i class="${filtro.pets == true ? "fas fa-paw" : "fas fa-ban"}"></i> ${
      filtro.pets == true ? "Se admiten mascotas" : "No se admiten mascotas"
    }</p>
        </div>
        </div>
        </article>
        `;
  }
  container.innerHTML = template;
};

mostrarPropiedades(propiedadesVenta, "container-venta");
mostrarPropiedades(propiedadesAlquiler, "container-alquiler");
