const mongoose = require('mongoose');
mongoose.set('debug',true);
mongoose.set('useUnifiedTopology', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/warbler',{
//mongoose.connect('mongodb+srv://abhishekfu:Abhi@2019@cluster0.jnz9x.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    keepAlive:true,
    useNewUrlParser: true,
    useCreateIndex:true
});
module.exports.Message = require('./message');
module.exports.User = require('./user');
