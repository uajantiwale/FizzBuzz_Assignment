const express = require('express');
const bp = require('body-parser');
const { checkValue } = require('./checkValues');
const app = express();
const port = 3000;

app.use(bp.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html', (err) => {
    if (err) console.log(err);
  });
});

app.post('/check', (req, res) => {
  const values = req.body.values;

  const valArr = values.split(' ');
  console.log('valArr..', valArr);

  let result = [];
  for (let i = 0; i < valArr.length; i++) {
    const processedValues = checkValue(valArr[i], res);
    console.log('processedValues..', processedValues);
    result.push(processedValues);
  }

  const resultTable = result.map((resultOfValue, index) => ({
    id: valArr[index],
    resultOfValue,
  }));

  res.json({ resultTable });

  /*for (let i = 0; i < result.length; i++) {
    return `<div style="border:1px solid black">${res.send(result)}</div>`;
    res.json({ result });
  }*/
});

app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`);
});
