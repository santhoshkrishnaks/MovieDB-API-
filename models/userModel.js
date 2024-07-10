const mongoose=require('mongoose');
const userSchema=mongoose.Schema(
    {
        user:
        {
            type:String,
            required:true,
        },
        password:
        {
            type:String,
            require:true,
        }
    },
    {
        timestamps: true
    }
)
const user=mongoose.model('user',userSchema);
module.exports=user;