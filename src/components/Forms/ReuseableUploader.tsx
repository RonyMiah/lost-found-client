import { Button, Input, SxProps } from '@mui/material';
import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { Controller, useFormContext } from 'react-hook-form';
type Tprops = {
  name: string;
  label: string;
  sx?: SxProps;
};

const ReuseableUploader = ({ name, label, sx }: Tprops) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ ...sx }}
          >
            {label || 'Upload file'}
            <Input
              sx={{ display: 'none' }}
              type="file"
              value={value?.filename}
              {...field}
              placeholder={label}
              fullWidth={true}
              onChange={(e) =>
                onChange((e.target as HTMLInputElement).files?.[0])
              }
            />
          </Button>
        );
      }}
    />
  );
};

export default ReuseableUploader;
