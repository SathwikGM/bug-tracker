import mongoose from 'mongoose';
import defectList from './defectList.js';
import Defects from '../models/defectSchema.js';

mongoose.connect('mongodb://127.0.0.1:27017/tackerApp', {
    
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Proceed to the next step after the connection is established
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  const seedDb = async () => {
  await Defects.deleteMany({});
  await Defects.create(defectList);

}
seedDb();