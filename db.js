const mongoose = require('mongoose');

//==============> HANDLE WARNING MESSAGE
mongoose.set('strictQuery', true);

let mongoURI="mongodb+srv://sanjayv:sanjay@cluster0.9ycsbw8.mongodb.net/nxm301cw?retryWrites=true&w=majority"
//==============> MONGOOSE CONNECTION
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connnected to Mongoose');
    } catch (error) {
        console.log({ Error: error })
    }
}
module.exports = {connectToMongo};