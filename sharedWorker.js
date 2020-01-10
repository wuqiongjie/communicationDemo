var clients = [];
onconnect = function(e) {
  var port = e.ports[0];
  clients.push(port);
  port.addEventListener('message', function(e) {
    clients.filter(v => v!== port) // 此处为了贴近其他方案的实现，剔除自己
		.forEach(p => p.postMessage(e.data))
  });
}
