import { useState } from 'react';
import Box from '@material-ui/core/Box';

import Textarea from './Textarea';
import Chart from './Chart';

export const calculateFrequency = (text = '') => {
  // your implementation should be inside this function
  // please don't change anything outside
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
