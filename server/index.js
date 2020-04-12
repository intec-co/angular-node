const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk.toString();
        });
        req.on('end', () => {
            console.log(data);
            const obj = JSON.parse(data);
            console.log(obj);
            const route = url.parse(req.url).pathname;
            console.log(route);
            let rst;
            if (route === '/child') {
                rst = {
                    fullName: `${obj.name} ${obj.lastName}`
                }
            } else if (route === '/comp3') {
                rst = {

                    sum: `${obj.a+obj.b}`
                    
                }           

            } else if(route === '/comp2'){
                console.log('COMPONENTE 2');
                rst = {
                    fullName: `${obj.name} ${obj.lastName}`
                }
            }
            else {
                res.writeHead(501, { 'Content-Type': 'text/html' });
                res.write("<h1>Not Implemented: </h1>The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g., a new feature of a web-service API).");
                res.end();
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(rst));
            res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('okay');
    }
});
server.listen(5200, () => {
    console.log(`init http serve in port: ${5200}`);

});