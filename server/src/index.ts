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

// Get method to send the list of defects
app.get('/defectList', async(req, res) => {
  const defects = await Defects.find({});
  // console.log(defects)
  res.json(defects);
});

// POST method to create a new issue
app.post('/createissue',  async(req, res) => {
  const { defectId, title,description,owners,status,priority,environment,createdBy } = req.body;
  try {
    const existingDefect = await Defects.findOne({ defectId });
        if (existingDefect) {
          return res.status(500).json({ error: 'An error occurred' });
        }
        if (!existingDefect) {
            const newIssue = new Defects({
            defectId,
            title,
            description,
            owners,
            status,
            priority,
            environment,
            createdBy,
            createdDate: new Date()
          });
          await newIssue.save();
          res.sendStatus(204);
        }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// deleting existing Defect

app.delete("/delete/:id", async(req, res) => {
  const {id}  = req.params;
  try {
    const deleteDefect = await Defects.findByIdAndDelete({_id: id});
      // console.log(id)
      res.sendStatus(204);
  }
  catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
})
 
// updating existing Defect
app.put("/updatedefect", async(req, res) => {
  const { _id, defectId,
            title,
            description,
            owners,
            status,
            priority,
            environment,
            createdBy,
  } = req.body;
   try {
    const updatedDefect = await Defects.findByIdAndUpdate(_id, {defectId,
            title,
            description,
            owners,
            status,
            priority,
            environment,
      createdBy,
    }, { new: true });
    // console.log(updatedDefect)
    res.sendStatus(204);
    // return updatedDefect;
  }
  catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
 })











app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});


