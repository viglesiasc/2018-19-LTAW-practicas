
function main() {

  console.log("Hola!!!!-------------")

  //-- Crear el websocket
  var socket = io();

  //mensaje del principio para introducir usuario
  var person = prompt("Please enter your name", "Ej.: Jon Nieve");
  if (person != null) {
    document.getElementById("person").innerHTML =
    "Hola " + person + ", escribe algo";
    socket.emit('new_person', person);
    console.log("Usuario emitido emitido")

  }
  //-- Obtener los elementos de interfaz:

  //-- Boton de envio de mensaje
  var send = document.getElementById('send')

  //-- Parrafo para mostrar mensajes recibidos
  var display = document.getElementById('display')

  //-- Caja con el mensaje a enviar
  var msg = document.getElementById("msg")

  //-- Cuando se aprieta el botón de enviar...
  send.onclick = () => {

    //-- Enviar el mensaje, con el evento "new_message"
    socket.emit('new_message', msg.value);

    //-- Lo notificamos en la consola del navegador
    console.log("Mensaje emitido")
  }

  //-- Cuando se reciba un mensaje del servidor se muestra
  //-- en el párrafo



  socket.on('new_message', msg => {
    display.innerHTML += person + ": " + msg + "<br>";
  });

}
