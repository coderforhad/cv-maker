import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function YearSelection({label}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          openTo="year"
          views={['year', 'month', 'day']}
          sx={{margin:"10px 0px"}}
        />
    </LocalizationProvider>
  );
}
