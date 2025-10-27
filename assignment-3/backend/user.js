const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    product: {
        type: String,   // ✅ correct
        require:true,
        min: 3,
        max: 20,
        // trim: true

    },
    description: {
        type: String,   // ✅ correct
        min: 3,
        max: 520
    },
 
  
    
},
{
    collection: "SMIT_Student",  // ✅ small letters
    timestamps: true
});



const User = mongoose.model("User", userSchema);
module.exports = { User };