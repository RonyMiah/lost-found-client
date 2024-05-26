import { SxProps } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';

interface IDatePicker {
  name: string;
  size?: 'small' | 'medium';
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const ReuseableDatePicker = ({
  name,
  size = 'small',
  label,
  required,
  fullWidth = true,
  sx,
}: IDatePicker) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              {...field}
              value={value || Date.now()}
              label={label}
              timezone="system"
              // disablePast
              onChange={(date) => onChange(date)}
              slotProps={{
                textField: {
                  required: required,
                  size: size,
                  sx: {
                    ...sx,
                  },

                  fullWidth: fullWidth,
                  error: isError,
                  helperText: isError
                    ? (formState.errors[name]?.message as string)
                    : '',
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default ReuseableDatePicker;
