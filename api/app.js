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
var nodemailer = require('nodemailer');

// HELPER FUNCTIONS/OBJECTS:

// Basically an email object that sends confirmation emails once someone makes a submission
// TODO: store username and password as environment variables for security
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'groundedarchives@gmail.com',
        pass: 'StoryShare3'
    }
});

// Used to store image and audio files
// TODO: use S3 rather than Ec2 storage
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


// Create an 8 digit alphanumeric id for each submission and then store audio / image files to storage
// TODO: make sure this will work if simultaneous submissions occur
function generateCode(req, res, next) {
    var firstPart = (Math.random() * 1679616) | 0;
    var secondPart = (Math.random() * 1679616) | 0;
    firstPart = ("0000" + firstPart.toString(36)).slice(-4);
    secondPart = ("0000" + secondPart.toString(36)).slice(-4);
    app.locals.code = firstPart + "-" + secondPart;

    upload.fields([{ name: 'audioStory', maxCount: 1 }, { name: 'image', maxCount: 1 }])(req, res, next);
}


// END HELPER FUNCTIONS/OBJECTS

var usersRouter = require('./routes/users');

// Create the backend "app" that interacts with frontend
var app = express();

app.use(express.static(path.join(__dirname, 'build')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Specify from what url we expect POST requests to come
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

app.use('/users', usersRouter);


// Serves index.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// This function if run once the user hits the submit button
app.post('/submitForm', generateCode, function (req, res, next) {
    // check if the user did a text submission rather than audio
    // save text submission and / or user email to storage
    if (req.body.textStory) {
        const data = req.body.textStory + " - " + req.body.email;
        fs.writeFile("uploads/textStory/" + app.locals.code + ".txt", data, (err) => {
            if (err) console.log(err);
        });
    }
    else{
	const data = req.body.email;
	fs.writeFile("uploads/textStory/" + app.locals.code + ".txt", data, (err) => {
	    if (err) console.log(err);
	});
    }

    // Send confirmation email
    // TODO: check Grounded's email to resolve errors
    var mailOptions = {
        from: 'Grounded Archive Team <groundedarchives@gmail.com>',
        to: req.body.email,
        subject: 'Thank you for your submission!',
        text: 'Hello,\n\nThank you for contributing to the Grounded Archive! Your submission has been successfully processed. Here is our short survey if you haven\'t filled it out already.\n\nIf you like our project, please support us here to keep our project going.\n\nThank You,\n\nGrounded Archive Team\nhttps://gowustl-my.sharepoint.com/:w:/g/personal/lisahan_wustl_edu/Edb4WYQRNWNJr3_074YmF_IB3ikcrviPFbj4WKqkDzlUJQ?e=4eFZwt'
    };

    // Uses the email object we created above to send the email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


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
