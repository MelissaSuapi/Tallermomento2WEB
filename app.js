
let notas = [];

function agregarNota() {
  const inputNota = document.getElementById("notaInput");
  const textoNota = inputNota.value.trim();

  if (textoNota === "") {
    alert("Por favor, escribe una nota.");
    return;
  }

   const nuevaNota = {
    id: Date.now(),
    texto: textoNota
  };


  notas.push(nuevaNota);


  inputNota.value = "";

  
  mostrarNotas();
}


function mostrarNotas() {
  const container = document.getElementById("notasContainer");
  container.innerHTML = ""; 

  notas.forEach(nota => {
    const divNota = document.createElement("div");
    divNota.classList.add("nota");
    divNota.dataset.id = nota.id;

 
    const textoNota = document.createElement("span");
    textoNota.textContent = nota.texto;

   
    const botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.onclick = () => editarNota(nota.id);

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");
    botonEliminar.onclick = () => eliminarNota(nota.id);

    divNota.appendChild(textoNota);
    divNota.appendChild(botonEditar);
    divNota.appendChild(botonEliminar);

    
    container.appendChild(divNota);
  });
}


function editarNota(id) {
  const nuevaNota = prompt("Edita tu nota:");
  if (nuevaNota) {
    const index = notas.findIndex(nota => nota.id === id);
    if (index !== -1) {
      notas[index].texto = nuevaNota;
      mostrarNotas(); 
    }
  }
}


function eliminarNota(id) {
  notas = notas.filter(nota => nota.id !== id);
  mostrarNotas(); 
}


function filtrarNotas() {
  const terminoBusqueda = document.getElementById("buscador").value.toLowerCase();
  const container = document.getElementById("notasContainer");
  container.innerHTML = ""; 

  const notasFiltradas = notas.filter(nota => nota.texto.toLowerCase().includes(terminoBusqueda));

  notasFiltradas.forEach(nota => {
    const divNota = document.createElement("div");
    divNota.classList.add("nota");
    divNota.dataset.id = nota.id;

    const textoNota = document.createElement("span");
    textoNota.textContent = nota.texto;

    const botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.onclick = () => editarNota(nota.id);

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");
    botonEliminar.onclick = () => eliminarNota(nota.id);

    divNota.appendChild(textoNota);
    divNota.appendChild(botonEditar);
    divNota.appendChild(botonEliminar);

    container.appendChild(divNota);
  });
}