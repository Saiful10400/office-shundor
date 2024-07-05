import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

const CustomTimePicker = ({onAccept,placeholder}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            'TimePicker',
            'MobileTimePicker',
            'DesktopTimePicker',
            'StaticTimePicker',
          ]}
          sx={{ width: "100%",borderRadius:"0" }} 
        >
          
          <DemoItem label={placeholder}>
            <MobileTimePicker  onAccept={onAccept} defaultValue={dayjs('2022-04-17T15:30')} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    );
};

export default CustomTimePicker;