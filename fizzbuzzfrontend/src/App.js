import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

function App() {
  const [value, setValue] = useState('');
  const [resData, setResData] = useState([]);

  const handleSubmit = async () => {
    try {
      if (value !== '') {
        const data = value;
        const valArr = data.split(' ');
        const res = await axios.post('http://localhost:3000/check', valArr);
        setResData(res.data.resultTable);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='App'>
      <h1>Hello welcome to Fizz Buzz!!</h1>
      <textarea value={value} onChange={(e) => handleChange(e)}></textarea>
      <br />
      <Button
        style={{
          border: '2px solid black',
          backgroundColor: 'white',
          color: 'black',
        }}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
      <br />
      <br />
      <h3>Resule -</h3>
      {resData.map((data) => {
        return (
          <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <table style={{ border: '2px solid black', width: '500px' }}>
                <tr>
                  {' '}
                  <td style={{ border: '2px solid black', width: '100px' }}>
                    {data.id}
                  </td>
                  <td style={{ border: '2px solid black' }}>
                    {data.resultOfValue}
                  </td>{' '}
                </tr>
              </table>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
