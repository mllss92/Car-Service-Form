const app = require('./app');
const config = require('./config/app');

app.listen(config.PORT, () => console.log(`Server has been started on Port: ${config.PORT}`));