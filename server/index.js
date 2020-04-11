const http = require('http');
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
            const rst = {
                fullName: `${obj.name} ${obj.lastName}`
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