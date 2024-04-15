const express = require('express');
const bp = require('body-parser');
const { checkValue } = require('./checkValues');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use(cors());

app.post('/check', (req, res) => {
  const values = req.body;

  let result = [];
  for (let i = 0; i < values.length; i++) {
    const processedValues = checkValue(values[i], res);
    result.push(processedValues);
  }

  const resultTable = result.map((resultOfValue, index) => ({
    id: values[index],
    resultOfValue,
  }));

  res.json({ resultTable });
});

app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`);
});
