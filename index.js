import dns from 'dns';
import { createServer } from 'http';

createServer(function (request, response) {
  const { host } = request.headers;
  console.log('From', host);

  dns.resolveCname(host, (error, result) => {
    console.log(error, result);
    response.write(JSON.stringify(result));
    response.end();
  });
}).listen(process.env.PORT || 9021);
