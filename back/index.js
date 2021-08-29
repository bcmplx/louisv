const express = require('express');

const app = express();
app.use(express.static('public'));
const router = require('./app/router');
const port = 3001;


app.use('/', router);

app.listen(port, () => {
	console.log(`Server started on port:${port}`);
});