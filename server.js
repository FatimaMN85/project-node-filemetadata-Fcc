var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()
var app = express();
const userRoutes = require('./routes/fileRoutes');

const dbURL = "mongodb+srv://Sana:Sana2020@cluster0.awlma.mongodb.net/filemetadata?retryWrites=true&w=majority";
mongoose.connect(dbURL,
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
 .then(() => console.log("Conected to DB successfully"))
 .catch(() => console.log("Cannot connect to db"));


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.use('/api/fileanalyse', userRoutes);


const port = 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
