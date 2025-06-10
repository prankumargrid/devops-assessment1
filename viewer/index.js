const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({ name: String, age: Number });
const User = mongoose.model('User', UserSchema);

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3002, () => {
  console.log('Viewer app listening on port 3002');
});
