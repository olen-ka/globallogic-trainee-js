import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from 'recharts';

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      letter: PropTypes.string.isRequired,
      frequency: PropTypes.number.isRequired,
    })
  ),
};

function Chart({ data }) {
  return (
    <Box>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={800}
          data={data}
          margin={{
            top: 15,
            right: 40,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="letter" />
          <YAxis tickFormatter={v => `${v}%`} />
          <Tooltip />
          <Legend />
          <Bar dataKey="frequency" fill="#f37037">
            <LabelList dataKey="frequency" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default Chart;
