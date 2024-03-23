import express from 'express';
const app = express();
const port =  2345;

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Your other routes
// Example: app.get('/api/data', (req, res) => { ... });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
