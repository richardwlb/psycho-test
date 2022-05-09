import { Box } from '@mui/material';

interface AlternativePros {
  text: string;
  isSelected?: boolean;
}

export default function Alternative({
  text,
  isSelected = false,
}: AlternativePros) {
  const commonStyles = {
    m: 1,
    border: 1,
    borderRadius: 1,
    borderColor: '#dadee6',
    padding: 2,
    minWidth: '600px',
    cursor: 'pointer',
    '&:hover': {
      bgcolor: '#dadee6',
    },
  };

  const bgColor = isSelected ? '#dadee6' : 'background.paper';

  return (
    <Box
      sx={commonStyles}
      bgcolor={bgColor}
      border={1}
      display="flex"
      justifyContent="left"
    >
      {text}
    </Box>
  );
}
