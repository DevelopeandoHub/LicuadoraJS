/* Funcionamiento de la Licuadora */
var estadoLicuadora = "apagado";
var sonidoLicuadora = document.getElementById( "blender-sound" );
var botonLicuadora = document.getElementById( "blender-button-sound" );
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
  if ( estadoLicuadora == "apagado" ) {
    estadoLicuadora = "encendido";
    hacerBrrBrr();
    licuadora.classList.add("active");
    /* document.getElementById( "blender-button" ).style.backgroundColor = "green"; */
  } else {
    estadoLicuadora = "apagado";
    hacerBrrBrr();
    licuadora.classList.remove("active");
    /* document.getElementById( "blender-button" ).style.backgroundColor = "red"; */
  }
}

function hacerBrrBrr() {
if( sonidoLicuadora.paused ){
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0; /* Reinicia el audio al segundo 0 */
  }
}