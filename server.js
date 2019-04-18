require('dotenv').config();

const app = require('./lib/app');

app.listen(3315, () => {
  console.log('listening on PORT 3315');
});
