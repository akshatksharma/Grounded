var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser')
var multer = require('multer');

var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function (req, file, cb) {
            var firstPart = (Math.random() * 1679616) | 0;
            var secondPart = (Math.random() * 1679616) | 0;
            firstPart = ("0000" + firstPart.toString(36)).slice(-4);
            secondPart = ("0000" + secondPart.toString(36)).slice(-4);

            cb(null, firstPart + "-" + secondPart);
        }
    }
);

var upload = multer({ storage: storage });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/submitAudio', upload.single('recording'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file);
    //console.log(req.body.email);
    //console.log(req.body.recording.blobURL);

    res.send({ success: true, name: req.body.name, email: req.body.email, file: req.file });
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

module.exports = app;
