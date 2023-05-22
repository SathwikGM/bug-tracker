import mongoose from 'mongoose';
const { Schema } = mongoose;

// Defining type script interface
interface IDefect{
  defectId: string;
  title: string;
  description: string;
  owners: string[];
  status: string;
  priority: string;
  environment: string;
  createdBy: string;
  createdDate: Date;
}

// Defects schema
const defectsSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),// Assign a default value using mongoose.Types.ObjectId
  },
   defectId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owners: [{
    type: String
  }],
  status: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  environment: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true
  }

})

// Create the Mongoose model
export default mongoose.model<IDefect>('Defects', defectsSchema);
