import React from 'react';
import { Stack, Chip, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { grey, blue } from '@mui/material/colors';

const ResponsiveMediaControlTags = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={(theme) => ({
        padding: theme.spacing(0.5),
        backgroundColor: grey[100], // light grey background, similar to GitHub's color theme
        '& .MuiChip-root': {
          fontSize: { xs: '0.525rem', sm: '0.775rem' },
          height: { xs: 14, sm: 22 },
          margin: theme.spacing(0.5),
          color: grey[800], // dark grey text for contrast
          borderColor: grey[300], // border color for outlined chips
          backgroundColor: grey[50], // very light grey for chip background
          '&.MuiChip-colorPrimary': {
            color: theme.palette.getContrastText(blue[500]),
            backgroundColor: blue[500], // GitHub's primary action color is a shade of blue
          },
          '&.MuiChip-colorSecondary': {
            color: theme.palette.getContrastText(blue[300]),
            backgroundColor: blue[300], // a lighter shade of blue for secondary actions
          },
        },
        '& .MuiButton-root': {
          fontSize: { xs: '0.525rem', sm: '0.775rem' },
          padding: { xs: theme.spacing(0.5), sm: theme.spacing(1) },
          color: theme.palette.getContrastText(blue[600]),
          backgroundColor: blue[600], // primary button color
          '&:hover': {
            backgroundColor: blue[700], // a slightly darker blue on hover
          },
        },
        '& .MuiSvgIcon-root': {
          fontSize: { xs: '12px', sm: '24px' },
          color: grey[700], // dark grey icons to match the text
        },
      })}
    >
      <Chip label="Antoni" variant="outlined" />
      <Chip label="american" color="primary" />
      <Chip label="well-rounded" color="secondary" />
      <Chip label="narration" variant="outlined" />
      <Button
        variant="contained"
        startIcon={<PlayArrowIcon />}
      >
        Play
      </Button>
    </Stack>
  );
};

export default ResponsiveMediaControlTags;
