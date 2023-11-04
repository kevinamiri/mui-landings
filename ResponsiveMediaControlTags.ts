import React from 'react';
import { Stack, Chip, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const StyledChip = (props) => (
  <Chip 
    {...props}
    sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      border: 0,
      '&:hover': {
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      },
      borderRadius: '16px',
      fontWeight: 'bold',
      // Add more styling as needed
    }}
  />
);

const PlayButton = () => (
  <Button
    variant="contained"
    startIcon={<PlayArrowIcon />}
    sx={{
      borderRadius: '20px',
      padding: '10px 24px',
      fontSize: '16px',
      // Add more styling as needed
    }}
  >
    Play
  </Button>
);

const MediaControlTags = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <StyledChip label="Antoni" variant="outlined" />
      <StyledChip label="american" color="primary" />
      <StyledChip label="well-rounded" color="secondary" />
      <StyledChip label="narration" />
      <PlayButton />
    </Stack>
  );
};

export default MediaControlTags;
