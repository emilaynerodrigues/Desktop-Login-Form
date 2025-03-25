function moveRight() {
  const box = document.getElementById("overlay-content");
  box.classList.toggle("move-right");
}

function moveLeft() {
  const box = document.getElementById("overlay-content");
  box.classList.toggle("move-left");
}

function mostrarMatricula(select) {
  const matriculaContainer = document.getElementById("matriculaContainer");
  matriculaContainer.style.display =
    select.value === "Administrador" ? "block" : "none";
}
