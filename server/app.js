const PORT = process.env.PORT || 3000;
import express from 'express';
import path from 'path';

const app = express();
	
app.get('/*', (req, res) => {
  let indexPath = path.join(__dirname, '../index.html');
  res.sendFile(indexPath);
});



//SERVER LISTEN
app.listen(PORT, err => {
  if(err) throw err;

  console.log(`Server listening at http://localhost:${PORT}`);
});