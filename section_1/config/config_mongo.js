const mongoose = require("mongoose");
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}
let uri = 'mongodb://localhost:27017/Test_Zetta_DB';

mongoose.connect(uri, options, (err) => {
    if (err) {
        console.error(err)
        console.error(err);
        process.exit(1);
    } else {
        console.log('Test_Zetta_DB connected');
    }
})