import mongoose from "mongoose";
const Schema = mongoose.Schema;

const indexSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  changed: {
    type: Boolean,
  },
});

const indexModel = mongoose.model("indexDB", indexSchema);
export default indexModel;
