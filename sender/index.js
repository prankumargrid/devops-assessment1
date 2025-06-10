const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({ name: String, age: Number });
const User = mongoose.model('User', UserSchema);

app.use(express.json());

app.post('/add', async (req, res) => {
  const { name, age } = req.body;
  const user = new User({ name, age });
  await user.save();
  res.json({ message: 'User added successfully!' });
});

app.listen(3001, () => {
  console.log('Sender app listening on port 3001');
});
