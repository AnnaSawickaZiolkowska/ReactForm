import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;


const Sliderinput = () => {
    const [value, setValue] = React.useState(0);

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleInputChange = (event) => {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
  
    const handleBlur = () => {
      if (value < 1) {
        setValue(1);
      } else if (value > 10) {
        setValue(10);
      }
    };
  
    return (
        <>
                    <Typography gutterBottom>spiciness scale</Typography>

      <Box sx={{ width: 250 }}>
      
        <Grid container spacing={2} alignItems="center">
          <Grid item>
          </Grid>
          <Grid item xs>
            <Slider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              />
          </Grid>
          <Grid item>
            <Input
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                  step: 1,
                  min: 1,
                  max: 10,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
                />
          </Grid>
        </Grid>
      </Box>
                </>
    );
}

export default Sliderinput;
