import React from 'react';
import { Stack, Chip, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { grey } from '@mui/material/colors';

// Define styles outside of the component for better readability and performance
const stackStyles = {
  bgcolor: 'rgb(13, 17, 23)', // GitHub dark background
  padding: 1,
  borderRadius: '6px',
  border: `1px solid ${grey[700]}`,
};

const chipStyles = {
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: '400',
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
  color: grey[300],
  bgcolor: 'rgb(36, 41, 46)',
  borderRadius: '8px',
  border: `1px solid ${grey[600]}`,
  '&:hover': {
    bgcolor: grey[800],
  },
};

const buttonStyles = {
  color: grey[300],
  bgcolor: 'rgb(36, 41, 46)',
  fontSize: '14px',
  lineHeight: '18px',
  fontWeight: '400',
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`,
  textTransform: 'none',
  borderRadius: '8px',
  border: `2px solid ${grey[600]}`,
  '&:hover': {
    bgcolor: grey[800],
  },
};

const iconStyles = {
  fill: grey[300],
  fontSize: '24px',
};

// Component definition
const ResponsiveMediaControlTags = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={stackStyles}>
      <Chip label="docs" sx={chipStyles} />
      <Chip label="package: joy-ui" sx={chipStyles} />
      <Button variant="contained" startIcon={<PlayArrowIcon sx={iconStyles} />} sx={buttonStyles}>
        Play
      </Button>
    </Stack>
  );
};

export default ResponsiveMediaControlTags;
