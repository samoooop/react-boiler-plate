const express = require('express');
const cors = require('cors');
const config = require('config');
const cluster = require('cluster');
const os = require('os');

const port = config.get('port');
const app = express();
// add middlewares
app.use(express.json()); // parse json
app.use(
    cors({
        origin: '*', // change this in production!
    }),
);

app.use(express.static('dist'));
app.use((req, res) => {
    console.log('sending index.html');
    res.sendFile('index.html', { root: './dist' } );
});

const isProduction = process.env.NODE_ENV === 'production';
const numThread = isProduction ? os.cpus().length : 1;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    // Fork workers.
    for (let i = 0; i < numThread; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died (code ${code} signal ${signal})`);
    });
} else {
    console.log(`Worker ${process.pid} is running`);
    app.listen(port);
}
