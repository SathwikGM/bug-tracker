import express from 'express';
import mongoose from 'mongoose';
import Defects from './models/defectSchema';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 3000;

const app = express();


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//  Connection to Mongo database
mongoose.connect('mongodb://127.0.0.1:27017/tackerApp', {
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Proceed to the next step after the connection is established
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



app.get('/', (req, res) => {
  res.send('MERN BugTracker');
});

app.get('/defectList', async(req, res) => {
  const defects = await Defects.find({});
  // console.log(defects)
  res.json(defects);
  
});












app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

