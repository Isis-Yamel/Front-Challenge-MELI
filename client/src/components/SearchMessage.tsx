import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import messageStyle from '@/styles/SearchMessage.module.scss';

const SearchMessage = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          MeLi Search Products
        </Typography>
        <Typography variant="h5" component="div">
        {bull}nav{bull}bar{bull}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          please search fro your
          <br />
          {'"favorite products"'}
        </Typography>
      </CardContent>
    </>
  )
  
  return (
    <>
      <Card className={messageStyle.message} variant="outlined">{card}</Card>
    </>
  );
};

export default SearchMessage;
