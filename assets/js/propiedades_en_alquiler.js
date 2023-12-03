import propiedadesAlquiler from "./data/alquiler.js";

const mostrarPropiedades = (propiedades, containerClass) => {
  const container = document.querySelector(`.${containerClass}`);

  let template = "";
  for (const propiedad of propiedades) {
    template += `
      <div class ="col-md-4 mb-4">
          <div class = "card">
          <img src =" ${propiedad.src}" alt="Imagen del departamento"/>
          <div class ="card-body">
          <h5 class ="card-title">${propiedad.nombre}</h5>
          <p class ="card-text"> ${propiedad.descripcion}</p>
          <p><i class ="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.bathroom} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString(
            "es"
          )}</p>
          <p class="${
            propiedad.smoke == true ? "text-success" : "text-danger"
          }">
          <i class="${
            propiedad.smoke == true ? "fas fa-smoking" : "fas fa-smoking-ban"
          }"></i> ${
      propiedad.smoke == true ? "Se permite fumar" : "No se permite fumar"
    }</p>
          <p class="${propiedad.pets == true ? "text-success" : "text-danger"}">
          <i class="${
            propiedad.pets == true ? "fas fa-paw" : "fas fa-ban"
          }"></i> ${
      propiedad.pets == true ? "Se admiten mascotas" : "No se admiten mascotas"
    }</p>
          </div>
          </div>
          </div>
          `;
  }
  container.innerHTML = template;
};

mostrarPropiedades(propiedadesAlquiler, "container-alquiler");
