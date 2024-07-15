const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  address : {
    type : String,
  },

},{
  timestamps: { createdAt: true, updatedAt: false }
});

const user = mongoose.model("userDetail", userSchema);
module.exports = user;
