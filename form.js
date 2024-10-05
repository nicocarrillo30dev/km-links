const cursos = [
  {
    nombre: "Cakes y Muffins Saludables",
    precio: "S/159.00",
    link: "https://kathymonzon.com/courses/cakes-y-muffins-saludables",
  },
  {
    nombre: "Empanadas para Emprender",
    precio: "S/69.00",
    link: "https://kathymonzon.com/courses/empanadas-para-emprender",
  },
  {
    nombre: "Tortas Clásicas - Presencial",
    precio: "S/496.00",
    link: "https://kathymonzon.com/courses/tortas-clasicas-presencial",
  },
  {
    nombre: "Tortas de Vitrina - Presencial",
    precio: "S/620.00",
    link: "https://kathymonzon.com/courses/tortas-de-vitrina-presencial",
  },
  {
    nombre: "El Secreto del Hojaldre",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/el-secreto-del-hojaldre",
  },
  {
    nombre: "Cakes Frutados",
    precio: "S/98.00",
    link: "https://kathymonzon.com/courses/cakes-frutados",
  },
  {
    nombre: "Cheesecakes Horneados",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/cheesecakes-horneados",
  },
  {
    nombre: "Tortas Cuchareables",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/tortas-cuchareables",
  },
  {
    nombre: "Postres Clásicos Renovado",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/postres-clasicos-renovado",
  },
  {
    nombre: "Cakes 3 Renovado",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/cakes-3-renovado",
  },
  {
    nombre: "Cakes 2 Renovado",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/cakes-2-renovado",
  },
  {
    nombre: "Dulce Corazón de Mamá (Ganache Mágico)",
    precio: "S/98.00",
    link: "https://kathymonzon.com/courses/dulce-corazon-de-mama-ganache-magico",
  },
  {
    nombre: "Las Mejores Recetas de Empanadas",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/las-mejores-recetas-de-empanadas",
  },
  {
    nombre: "Tortas de Temporada",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/tortas-de-temporada",
  },
  {
    nombre: "Postres in a Jar",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/postres-in-a-jar",
  },
  {
    nombre: "Las Mejores Carrot Cakes",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/las-mejores-carrot-cakes",
  },
  {
    nombre: "Galletas Rellenas",
    precio: "S/85.00",
    link: "https://kathymonzon.com/courses/galletas-rellenas",
  },
  {
    nombre: "Cakes Navideños",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/cakes-navidenos",
  },
  {
    nombre: "Torta Napolitana",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/torta-napolitana",
  },
  {
    nombre: "Mini Tortas Heladas",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/mini-tortas-heladas",
  },
  {
    nombre: "Galletas Glaseadas Virtual",
    precio: "S/85.00",
    link: "https://kathymonzon.com/courses/galletas-glaseadas-virtual",
  },
  {
    nombre: "Cakes y Rellenos para Bodas",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/cakes-y-rellenos-para-bodas",
  },
  {
    nombre: "Diplomado de Buttercream - Presencial",
    precio: "S/496.00",
    link: "https://kathymonzon.com/courses/diplomado-de-buttercream-presencial",
  },
  {
    nombre: "10 Mejores Buttercream",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/10-mejores-buttercream",
  },
  {
    nombre: "Decoración con Chantilly Básico Presencial",
    precio: "S/496.00",
    link: "https://kathymonzon.com/courses/decoracion-con-chantilly-basico-presencial",
  },
  {
    nombre: "Mesa de Dulces para Boda",
    precio: "S/160.00",
    link: "https://kathymonzon.com/courses/mesa-de-dulces-para-boda",
  },
  {
    nombre: "Postres Individuales",
    precio: "S/105.00",
    link: "https://kathymonzon.com/courses/postres-individuales",
  },
  {
    nombre: "Éclairs",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/eclairs",
  },
  {
    nombre: "Pan de Leche",
    precio: "Gratis",
    link: "https://kathymonzon.com/courses/pan-de-leche",
  },
  {
    nombre: "Cheesecakes 2",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/cheesecakes-2",
  },
  {
    nombre: "Hojaldre y Bocaditos Presencial",
    precio: "S/200.00",
    link: "https://kathymonzon.com/courses/hojaldre-y-bocaditos-presencial",
  },
  {
    nombre: "Navideño 2",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/navideno-2",
  },
  {
    nombre: "Panes Artesanales 2",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/panes-artesanales-2",
  },
  {
    nombre: "Panes Artesanales 1",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/panes-artesanales-1",
  },
  {
    nombre: "Navideño 1",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/navideno-1",
  },
  {
    nombre: "Pasión en Rojo",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/pasion-en-rojo",
  },
  {
    nombre: "Delicias con Fresas",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/delicias-con-fresas",
  },
  {
    nombre: "Tortas Especiales",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/tortas-especiales",
  },
  {
    nombre: "Postres para Mamá",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/postres-para-mama",
  },
  {
    nombre: "Bocaditos Dulces y Salados",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/bocaditos-dulces-y-salados",
  },
  {
    nombre: "Mini Tortas en Buttercream",
    precio: "S/118.00",
    link: "https://kathymonzon.com/courses/mini-tortas-en-buttercream",
  },
  {
    nombre: "Slice Cakes",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/slice-cakes",
  },
  {
    nombre: "Cupcakes de Oreo",
    precio: "Gratis",
    link: "https://kathymonzon.com/courses/cupcakes-de-oreo",
  },
  {
    nombre: "Cupcakes y Muffins 1",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/cupcakes-y-muffins-1",
  },
  {
    nombre: "Hojaldre Bocaditos y Pasteles",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/hojaldre-bocaditos-y-pasteles",
  },
  {
    nombre: "Cupcakes y Muffins 2",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/cupcakes-y-muffins-2",
  },
  {
    nombre: "Tortas de Chocolate",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/tortas-de-chocolate",
  },
  {
    nombre: "Pie's Clásicos",
    precio: "S/98.00",
    link: "https://kathymonzon.com/courses/pies-clasicos",
  },
  {
    nombre: "Trufas y Bombones",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/trufas-y-bombones",
  },
  {
    nombre: "Fondant",
    precio: "S/254.00",
    link: "https://kathymonzon.com/courses/fondant",
  },
  {
    nombre: "Mini Tortas en Fondant",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/mini-tortas-en-fondant",
  },
  {
    nombre: "Tortas en Chantilly",
    precio: "S/160.00",
    link: "https://kathymonzon.com/courses/tortas-en-chantilly",
  },
  {
    nombre: "Tortas de Cumpleaños 1",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/tortas-de-cumpleanos-1",
  },
  {
    nombre: "Diplomado de Bodas",
    precio: "S/254.00",
    link: "https://kathymonzon.com/courses/diplomado-de-bodas",
  },
  {
    nombre: "Panetón",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/paneton",
  },
  {
    nombre: "Pasteles Salados",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/pasteles-salados",
  },
  {
    nombre: "Tortas de Cumpleaños 2",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/tortas-de-cumpleanos-2",
  },
  {
    nombre: "Bocaditos 2",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/bocaditos-2",
  },
  {
    nombre: "Tartas",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/tartas",
  },
  {
    nombre: "Mi Curso Emprendedor",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/mi-curso-emprendedor",
  },
  {
    nombre: "Pasteles Salados y Dulces",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/pasteles-salados-y-dulces",
  },
  {
    nombre: "Dulces para Compartir 2",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/dulces-para-compartir-2",
  },
  {
    nombre: "Cheesecakes Sin Azúcar",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/cheesecakes-sin-azucar",
  },
  {
    nombre: "Recetas Económicas",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/recetas-economicas",
  },
  {
    nombre: "Costos y Marketing",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/costos-y-marketing",
  },
  {
    nombre: "Postres Gourmet",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/postres-gourmet",
  },
  {
    nombre: "Postres Saludables",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/postres-saludables",
  },
  {
    nombre: "Decoración en Chantilly",
    precio: "S/160.00",
    link: "https://kathymonzon.com/courses/decoracion-en-chantilly",
  },
  {
    nombre: "Tortas de Vitrina",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/tortas-de-vitrina",
  },
  {
    nombre: "Chifón",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/chifon",
  },
  {
    nombre: "Pizza",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/pizza",
  },
  {
    nombre: "Dulces para Compartir 1",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/dulces-para-compartir-1",
  },
  {
    nombre: "Galletas para Mamá",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/galletas-para-mama",
  },
  {
    nombre: "Lunch Box en Chantilly",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/lunch-box-en-chantilly",
  },
  {
    nombre: "Black Buttercream",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/black-buttercream",
  },
  {
    nombre: "Buttercream Básico",
    precio: "S/160.00",
    link: "https://kathymonzon.com/courses/buttercream-basico",
  },
  {
    nombre: "Soufflés",
    precio: "S/85.00",
    link: "https://kathymonzon.com/courses/souffles",
  },
  {
    nombre: "Turrón de Doña Pepa",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/turron-de-dona-pepa",
  },
  {
    nombre: "Cakes 2",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/cakes-2",
  },
  {
    nombre: "Brownies",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/brownies",
  },
  {
    nombre: "Cakes 1",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/cakes-1",
  },
  {
    nombre: "Dulces Antojitos",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/dulces-antojitos",
  },
  {
    nombre: "Chantilly Estable",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/chantilly-estable",
  },
  {
    nombre: "Pasteles Vintage",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/pasteles-vintage",
  },
  {
    nombre: "Tortas Sorpresa",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/tortas-sorpresa",
  },
  {
    nombre: "Mini Postres en Vasitos",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/mini-postres-en-vasitos",
  },
  {
    nombre: "Rellenos para Tortas 2",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/rellenos-para-tortas-2",
  },
  {
    nombre: "Bizcochos y Merengues",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/bizcochos-y-merengues",
  },
  {
    nombre: "Tres Leches 6 Sabores",
    precio: "S/98.00",
    link: "https://kathymonzon.com/courses/tres-leches-6-sabores",
  },
  {
    nombre: "Postres Clásicos",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/postres-clasicos",
  },
  {
    nombre: "Tortas Comerciales",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/tortas-comerciales",
  },
  {
    nombre: "Tortas Tropicales",
    precio: "S/140.00",
    link: "https://kathymonzon.com/courses/tortas-tropicales",
  },
  {
    nombre: "Piononos Especiales",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/piononos-especiales",
  },
  {
    nombre: "Cakes 3",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/cakes-3",
  },
  {
    nombre: "Tres Leches Especiales",
    precio: "S/98.00",
    link: "https://kathymonzon.com/courses/tres-leches-especiales",
  },
  {
    nombre: "Chantilly Avanzado",
    precio: "S/160.00",
    link: "https://kathymonzon.com/courses/chantilly-avanzado",
  },
  {
    nombre: "Cheesecakes Fríos",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/cheesecakes-frios",
  },
  {
    nombre: "Pastelitos",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/pastelitos",
  },
  {
    nombre: "Cake de Rosas",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/cake-de-rosas",
  },
  {
    nombre: "Rellenos para Tortas 1",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/rellenos-para-tortas-1",
  },
  {
    nombre: "Una Torta para Mamá",
    precio: "S/89.00",
    link: "https://kathymonzon.com/courses/una-torta-para-mama",
  },
  {
    nombre: "Tortas de Verano",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/tortas-de-verano",
  },
  {
    nombre: "Torta de Ajedrez",
    precio: "S/70.00",
    link: "https://kathymonzon.com/courses/torta-de-ajedrez",
  },
  {
    nombre: "Bordes Rectos",
    precio: "S/120.00",
    link: "https://kathymonzon.com/courses/bordes-rectos",
  },
  {
    nombre: "Dulces sin Horno",
    precio: "S/52.50",
    link: "https://kathymonzon.com/courses/dulces-sin-horno",
  },
  {
    nombre: "Torta de Oreo",
    precio: "Gratis",
    link: "https://kathymonzon.com/courses/torta-de-oreo",
  },
];

const dateSection = document.getElementById("date--section");
const selectorDate = document.getElementById("selector--date");
const noDateButton = document.getElementById("none--button");
const courseSection = document.getElementById("section--courses");
const addCourseButton = document.getElementById("course--add");
const generateText = document.getElementById("course--create");

cursos.sort(function (a, b) {
  if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
  if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
  return 0;
});

let courseCount = 1;
let cursosVisibles = [];
let botonSeleccionado = "";

function crearCurso() {
  let numeroCurso = 1;
  while (cursosVisibles.includes(numeroCurso)) {
    numeroCurso++;
  }

  cursosVisibles.push(numeroCurso);

  const newCourseContainer = document.createElement("div");
  newCourseContainer.classList.add("course-container");
  newCourseContainer.id = `course-container-${numeroCurso}`;

  const courseTitle = document.createElement("h3");
  courseTitle.textContent = `Curso ${numeroCurso}`;
  courseTitle.classList.add("course__count");

  const inputFields = document.createElement("div");
  inputFields.classList.add("input__fields");

  const selectElement = document.createElement("select");
  selectElement.classList.add("select__field");
  selectElement.id = `field--select-${numeroCurso}`;

  cursos.forEach((curso) => {
    const option = document.createElement("option");
    option.value = curso.precio;
    option.textContent = `${curso.nombre} - ${curso.precio}`;
    selectElement.appendChild(option);
  });

  const discountInput = document.createElement("input");
  discountInput.type = "number";
  discountInput.classList.add("discount--number");
  discountInput.id = `number--discount-${numeroCurso}`;
  discountInput.max = 100;
  discountInput.min = 0;
  discountInput.value = 0;

  inputFields.appendChild(selectElement);
  inputFields.appendChild(discountInput);

  const finalPrice = document.createElement("div");
  finalPrice.classList.add("final__price");
  finalPrice.id = `price--final-${numeroCurso}`;
  finalPrice.textContent = "Precio final: 0 soles";

  function actualizarPrecioFinalNuevo() {
    const selectedValue = selectElement.value;
    const precioOriginal = parseFloat(selectedValue.replace(/S\/|,/g, ""));

    if (isNaN(precioOriginal)) {
      finalPrice.textContent = "Por favor selecciona un curso válido";
      return;
    }

    const descuento = parseFloat(discountInput.value) || 0;

    if (descuento < 0 || descuento > 100) {
      finalPrice.textContent = "El descuento debe estar entre 0 y 100";
      return;
    }

    const descuentoAplicado = (precioOriginal * descuento) / 100;
    const precioConDescuento = precioOriginal - descuentoAplicado;

    finalPrice.textContent = `Precio final: S/ ${precioConDescuento.toFixed(
      2
    )}`;
  }

  selectElement.addEventListener("change", actualizarPrecioFinalNuevo);
  discountInput.addEventListener("input", actualizarPrecioFinalNuevo);

  actualizarPrecioFinalNuevo();

  newCourseContainer.appendChild(courseTitle);
  newCourseContainer.appendChild(inputFields);
  newCourseContainer.appendChild(finalPrice);

  const courseSection = document.getElementById("section--courses");
  courseSection.appendChild(newCourseContainer);
}

let cursoInicializado = false;
window.addEventListener("DOMContentLoaded", function () {
  if (!cursoInicializado) {
    crearCurso();
    cursoInicializado = true;
  }
});

document.getElementById("course--add").addEventListener("click", function () {
  crearCurso();
});

function resetDiscountButtons() {
  document.getElementById("promocion--button").classList.remove("button-blue");
  document.getElementById("preventa--button").classList.remove("button-blue");
  document.getElementById("ninguno--button").classList.remove("button-blue");
}

function resetDateButtons() {
  noDateButton.classList.remove("button-blue");
  selectorDate.classList.remove("button-blue");
}

document
  .getElementById("promocion--button")
  .addEventListener("click", function () {
    resetDiscountButtons();
    document.getElementById("promocion--button").classList.add("button-blue");
    dateSection.classList.remove("hidden");
    botonSeleccionado = "promoción";
  });

document
  .getElementById("preventa--button")
  .addEventListener("click", function () {
    resetDiscountButtons();
    document.getElementById("preventa--button").classList.add("button-blue");
    dateSection.classList.remove("hidden");
    botonSeleccionado = "pre venta";
  });

document
  .getElementById("ninguno--button")
  .addEventListener("click", function () {
    resetDiscountButtons();
    document.getElementById("ninguno--button").classList.add("button-blue");
    dateSection.classList.add("hidden");
    courseSection.classList.add("visible");
    courseSection.classList.remove("hidden");
    addCourseButton.classList.add("visible");
    generateText.classList.add("visible");
    botonSeleccionado = "ninguno";
  });

selectorDate.addEventListener("click", function () {
  resetDateButtons();
  selectorDate.classList.add("button-blue");
  noDateButton.classList.remove("button-blue");
  courseSection.classList.add("visible");
  addCourseButton.classList.add("visible");
  generateText.classList.add("visible");
});

noDateButton.addEventListener("click", function () {
  resetDateButtons();
  noDateButton.classList.add("button-blue");
  courseSection.classList.add("visible");
  selectorDate.classList.remove("button-blue");
  addCourseButton.classList.add("visible");
  generateText.classList.add("visible");
});

const generateTextButton = document.getElementById("course--create");
const textSection = document.getElementById("container--text");
const paragraphContainer = document.getElementById("container-paragraph");
const copyButton = document.getElementById("text--button--copy");

function formatearFecha(fecha) {
  const fechaObj = new Date(fecha);
  const opciones = { day: "numeric", month: "long" };
  return fechaObj.toLocaleDateString("es-ES", opciones);
}

function obtenerPorcentajeDescuento(inputElement) {
  return inputElement.value ? `${inputElement.value}%` : "0%";
}

function obtenerPrecioFinal(precioTexto) {
  const regex = /S\/\s*([\d,.]+)/; // Expresión regular para capturar el monto después de "S/"
  const match = precioTexto.match(regex);
  return match ? `S/ ${match[1]}` : "Precio no disponible";
}

function calcularMontoTotal() {
  let total = 0;
  cursosVisibles.forEach((numeroCurso) => {
    const precioFinalTexto = document.getElementById(
      `price--final-${numeroCurso}`
    ).textContent;
    const precioFinal = parseFloat(precioFinalTexto.replace(/[^\d.-]/g, ""));
  });
  return total.toFixed(2);
}

generateTextButton.addEventListener("click", function () {
  let textoGenerado = "Buenas tardes, ";
  let esPromocion = botonSeleccionado === "promoción";
  let esPreventa = botonSeleccionado === "pre venta";
  let esNinguno = botonSeleccionado === "ninguno";
  let tieneFecha =
    selectorDate.value && !noDateButton.classList.contains("button-blue");
  let fecha = selectorDate.value ? formatearFecha(selectorDate.value) : "";

  if (cursosVisibles.length === 1) {
    const numeroCurso = cursosVisibles[0];
    const cursoSelect = document.getElementById(`field--select-${numeroCurso}`);
    const cursoNombre =
      cursoSelect.options[cursoSelect.selectedIndex].text.split(" - ")[0];
    const precioFinalTexto = document.getElementById(
      `price--final-${numeroCurso}`
    ).textContent;
    const precioFinal = obtenerPrecioFinal(precioFinalTexto);
    const precioOriginal = cursoSelect.value;

    const cursoObj = cursos.find((curso) => curso.nombre === cursoNombre);
    const linkCurso = cursoObj ? cursoObj.link : "Link no disponible";

    if (esPromocion) {
      const discountInput = document.getElementById(
        `number--discount-${numeroCurso}`
      );
      const porcentajeDescuento = obtenerPorcentajeDescuento(discountInput);
      textoGenerado += `el precio en promoción, con el ${porcentajeDescuento} de descuento, del curso <strong>${cursoNombre}</strong> es de ${precioFinal} 🙌. Su precio normal es de ${precioOriginal}.`;
      if (tieneFecha) {
        textoGenerado += ` La promoción es válida hasta el ${fecha}.`;
      }
    } else if (esPreventa) {
      textoGenerado += `el precio en pre venta del curso <strong>${cursoNombre}</strong> es de ${precioFinal} 🙌. Su precio normal es de ${precioOriginal}.`;
      if (tieneFecha) {
        textoGenerado += ` La pre venta es válida hasta el ${fecha}.`;
      }
    } else if (esNinguno) {
      textoGenerado += `el precio del curso <strong>${cursoNombre}</strong> es de ${precioFinal} 🙌.`;
    }

    textoGenerado += ` Le adjuntamos el link para que pueda obtener mayor información: <a href="${linkCurso}">${linkCurso}</a><br><br>`;
  } else if (cursosVisibles.length > 1) {
    if (esPromocion) {
      textoGenerado +=
        "los precios de los cursos en promoción son los siguientes:<br><br>";
    } else if (esPreventa) {
      textoGenerado +=
        "los precios de los cursos en pre venta son los siguientes:<br><br>";
    } else if (esNinguno) {
      textoGenerado += "los precios de los cursos son los siguientes:<br><br>";
    }

    cursosVisibles.forEach((numeroCurso) => {
      const cursoSelect = document.getElementById(
        `field--select-${numeroCurso}`
      );
      const cursoNombre =
        cursoSelect.options[cursoSelect.selectedIndex].text.split(" - ")[0];
      const precioFinalTexto = document.getElementById(
        `price--final-${numeroCurso}`
      ).textContent;
      const precioFinal = obtenerPrecioFinal(precioFinalTexto);
      const precioOriginal = cursoSelect.value;

      const cursoObj = cursos.find((curso) => curso.nombre === cursoNombre);
      const linkCurso = cursoObj ? cursoObj.link : "Link no disponible";

      if (esPromocion) {
        const discountInput = document.getElementById(
          `number--discount-${numeroCurso}`
        );
        const porcentajeDescuento = obtenerPorcentajeDescuento(discountInput);
        textoGenerado += `El precio en promoción, con el ${porcentajeDescuento} de descuento, del curso <strong>${cursoNombre}</strong> es de ${precioFinal} 🙌. Su precio normal es de ${precioOriginal}.`;
        if (tieneFecha) {
          textoGenerado += ` La promoción es válida hasta el ${fecha}.`;
        }
      } else if (esPreventa) {
        textoGenerado += `El precio en pre venta del curso <strong>${cursoNombre}</strong> es de ${precioFinal} 🙌. Su precio normal es de ${precioOriginal}.`;
        if (tieneFecha) {
          textoGenerado += ` La pre venta es válida hasta el ${fecha}.`;
        }
      } else if (esNinguno) {
        textoGenerado += `El precio del curso <strong>${cursoNombre}</strong> es de ${precioFinal} 🙌.`;
      }

      textoGenerado += ` Le adjuntamos el link para mayor información: <a href="${linkCurso}">${linkCurso}</a><br><br>`;
    });

    const montoTotal = calcularMontoTotal();
    textoGenerado += `El monto total por ${cursosVisibles.length} cursos es de S/ ${montoTotal} 🙌.<br>`;
  }

  paragraphContainer.innerHTML = textoGenerado;

  textSection.classList.remove("hidden");
});

copyButton.addEventListener("click", function () {
  let textToCopy = paragraphContainer.innerHTML;

  textToCopy = textToCopy.replace(/<br\s*\/?>/gi, "\n");

  textToCopy = textToCopy.replace(/<\/?strong>/gi, "");

  textToCopy = textToCopy.replace(
    /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1>.*?<\/a>/gi,
    "$2"
  );

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  document.execCommand("copy");

  document.body.removeChild(tempTextArea);

  alert("¡Texto copiado exitosamente! 🎉");
});
const newTextButton = document.getElementById("new--button--text");

newTextButton.addEventListener("click", function () {
  resetDiscountButtons();
  botonSeleccionado = "";

  dateSection.classList.add("hidden");
  courseSection.classList.add("hidden");
  addCourseButton.classList.add("hidden");
  generateText.classList.add("hidden");
  textSection.classList.add("hidden");

  selectorDate.value = "";
  noDateButton.classList.remove("button-blue");
  selectorDate.classList.remove("button-blue");

  cursosVisibles.forEach((numeroCurso) => {
    const courseContainer = document.getElementById(
      `course-container-${numeroCurso}`
    );
    if (courseContainer) {
      courseContainer.remove();
    }
  });
  cursosVisibles = [];

  crearCurso();

  paragraphContainer.textContent = "";

  courseSection.classList.remove("visible");
  addCourseButton.classList.remove("visible");
  generateText.classList.remove("visible");
});
