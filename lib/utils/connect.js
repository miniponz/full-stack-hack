const { parse } = require('url');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/runs', {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true
});
mongoose.connection.on('open', event  => {
  event.preventDefault();
  console.log('connection open');
});
mongoose.connection.on('error', event  => {
  event.preventDefault();
  console.log('error');
});
mongoose.connection.on('close', event  => {
  event.preventDefault();
  console.log('connection closed');
});
mongoose.connection.on('reconnected', event  => {
  event.preventDefault();
  console.log('reconnected');
});
