import { useState } from 'react';
import Box from '@material-ui/core/Box';

import Textarea from './Textarea';
import Chart from './Chart';

export const calculateFrequency = (text = '') => {
  let cleanText = text.match(/[a-zA-Z]+/g);

  if(text.length === 0 || cleanText === null) {
    return [];
  }

  let cleanTextArr = cleanText.join('').toLowerCase().split('');
  let count = cleanTextArr.length;
  let countedLetters = cleanTextArr.reduce((acc, currentValue) => {
  
    acc[currentValue] ? acc[currentValue]++ : acc[currentValue] = 1;
    return acc;
  }, {});
  
  return Object
    .entries(countedLetters)
    .sort((a, b) => a[0]
      .localeCompare(b[0]))
    .map(el => {
  
      return {
        letter: el[0],
        frequency: Number(((100*el[1]) /count).toFixed(1))
      }
    });
};

function LettersFrequency() {
  const [text, setText] = useState('');

  const data = calculateFrequency(text);

  return (
    <Box>
      <Textarea value={text} onChange={e => setText(e.target.value)} />

      <Chart data={data} />
    </Box>
  );
}

export default LettersFrequency;
