/* Funcionamiento de la Licuadora */
var estadoLicuadora = "apagado";

function hacerBrrBrr() {
  if (estadoLicuadora == "apagado") {
    estadoLicuadora = "encendido";
    document.getElementById("blender-button").style.backgroundColor = "green";
  } else {
    estadoLicuadora = "apagado";
    document.getElementById("blender-button").style.backgroundColor = "red";
  }
}