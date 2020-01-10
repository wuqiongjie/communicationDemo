var clients = [];
onconnect = function(e) {
  var port = e.ports[0];
  clients.push(port);
  port.addEventListener('message', function(e) {
    let tempClients = clients.filter(v => v!= port )
    for(var i = 0; i < tempClients.length; i++) {
      var eElement = tempClients[i];
      eElement.postMessage(e.data);
    }
  });
  port.start();
}
