var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var usr_number = 0;

//--Servir la pagina principal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("Página principal: /")
});

//-- Servir el cliente javascript
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("Fichero js solicituado")
});

//-- Lanzar el servidor
http.listen(3000, function(){
  console.log('listening on *:3000');
});


//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!


io.on('connection', function(socket){
  socket.on('new_person', person => {
    console.log(person + " esta conectado");
    usr_number = usr_number + 1;
  });

  //console.log(person + "--> Usuario conectado!");

  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
    console.log('--> Usuario Desconectado');
    usr_number = usr_number - 1;
  });

  //-- Detectar si se ha recibido un mensaje del cliente
  socket.on('new_message', msg => {

    mens = msg.split(": ")

    if (mens[0] == '/help'){
      console.log("El usuario ha seleccionado: /help")

      res = "<h4>COMANDOS SOPORTADOS:</h4>" +
      "<ul>" +
      "<li>/help</li>" +
      "<li>/list</li>" +
      "<li>/hello</li>" +
      "<li>/date</li>" +
      "</ul>"
      io.emit('new_message', res);

    }else if(mens[0] == '/list'){
      console.log("El usuario ha seleccionado /list")
      res = "<p>Servidor: Número de usuarios conectados: " + usr_number +
                  "</p>";
      io.emit('new_message', res);

    }else if(mens[0] == '/hello'){
      console.log("El usuario ha seleccionado /hello")
      respuesta = "<p>Servidor: Hola!!!"
      io.emit('new_message', r);

    }else if(mens[0] == '/date'){
      console.log("El usuario ha seleccionado /date")
      var d = new Date();
      res = "<p> Servidor: Fecha: " + d.getDate() + '/' + d.getMonth() +
        '/' + d.getFullYear() + " - " + d.getHours() + ':' + d.getMinutes()	+
        ':' + d.getSeconds() + "</p>";
      io.emit('new_message', res);

    }else{
      //-- Notificarlo en la consola del servidor
      console.log("Mensaje recibido: " + msg)

      //-- Emitir un mensaje a todos los clientes conectados
      io.emit('new_message', msg);
    }

  })

});
