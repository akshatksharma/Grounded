var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser')
var multer = require('multer');
var debug = require('debug')('api:server');
//var https = require('https')
var http = require('http')
var fs = require('fs');

var storage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            path = `./uploads/${file.fieldname}`;
            cb(null, path);
        },
        filename: function (req, file, cb) {
            console.log(app.locals.code);

            cb(null, app.locals.code);
        }
    }
);

var upload = multer({ storage: storage });

function generateCode(req, res, next) {
    var firstPart = (Math.random() * 1679616) | 0;
    var secondPart = (Math.random() * 1679616) | 0;
    firstPart = ("0000" + firstPart.toString(36)).slice(-4);
    secondPart = ("0000" + secondPart.toString(36)).slice(-4);
    app.locals.code = firstPart + "-" + secondPart;

    upload.fields([{ name: 'audioStory', maxCount: 1 }, { name: 'image', maxCount: 1 }])(req, res, next);
}


//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({
    origin: 'https://groundedarchive.com',
    credentials: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

//app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/submitForm', generateCode, function (req, res, next) {
    //insert user data into mysql

    res.send({ success: true, email: req.body, files: req.files });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);

//module.exports = app;
/*
var port = normalizePort(process.env.PORT || '9000');
app.set('port', port);

/**
 * Create HTTPS server.
 

//var server = http.createServer(app);


var server = https.createServer({
	key: fs.readFileSync('./aws_key.pem'),
	cert: fs.readFileSync('./aws_cert.pem'),
	ca: fs.readFileSync('./aws_cert_chain.pem'),
	passphrase: 'StoryShare3'
}, app);




/**
 * Listen on provided port, on all network interfaces.
 

server.listen(port);
//server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.


function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
*/
