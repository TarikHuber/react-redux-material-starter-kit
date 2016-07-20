var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var path = require('path')
var bodyParser = require('body-parser')
var app = new(require('express'))()

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

var port = isProduction
    ? 80 
    : 3500;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
}));

app.use(webpackHotMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '', 'index.html'))
});

//REST API simulation
app.use(bodyParser.json({type: 'application/json'}));
app.post('/api/login', function(req, res) {
    const credentials = req.body;

    if (credentials.user != undefined && credentials.user != undefined) {

        res.status(200).json({
            user: {
                name: credentials.user,
                email: 'demoemail@demo.com'
            },
            apiToken: '123456'
        });

    } else {
        res.status(401).json({'message': 'Provide usernam and password'});
    }
});

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> ??  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
