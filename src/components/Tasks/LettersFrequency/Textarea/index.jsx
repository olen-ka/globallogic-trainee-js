import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

function Textarea({ value, onChange }) {
  return (
    <Box mb={4}>
      <FormControl fullWidth>
        <TextField
          multiline
          rows={10}
          value={value}
          onChange={onChange}
          variant="filled"
        />
      </FormControl>
    </Box>
  );
}

export default Textarea;
