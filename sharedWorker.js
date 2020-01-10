var clients = [];
onconnect = function(e) {
  var port = e.ports[0];
  clients.push(port);
  port.addEventListener('message', function(e) {
    clients.forEach(p => p.postMessage(e.data))
  });
}
