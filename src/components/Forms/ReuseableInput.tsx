import { SxProps, TextField } from '@mui/material';

import { Controller, useFormContext } from 'react-hook-form';

type TInputProps = {
  name: string;
  fullWidth?: boolean;
  type?: string;
  label?: string;
  size?: 'small' | 'medium';
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

const ReuseableInput = ({
  name,
  fullWidth,
  type = 'text',
  label,
  size = 'small',
  sx,
  required,
  disabled,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          disabled={disabled}
          sx={{ ...sx }}
          {...field}
          fullWidth={fullWidth}
          label={label}
          type={type}
          variant="outlined"
          placeholder={label}
          size={size}
          required={required}
          error={!!error?.message} //boolean value recived
          helperText={error?.message} //show error
          //for color
          InputLabelProps={{
            sx: {
              color: 'white',
            },
          }}
        />
      )}
    />
  );
};

export default ReuseableInput;
