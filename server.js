const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Listening on Port: 3000');
});

app.use(express.static('public'));

app.get('/:wrong', function(req, res) {
  if (req.params.wrong === 'api') {
    res.send('Response from api');
  }else {
    res.status(404);
    res.send('404 Not Found');
  }
});
