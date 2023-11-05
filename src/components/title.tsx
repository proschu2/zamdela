import React from 'react';
import '../styles/title.css';
import Typography from '@mui/material/Typography';

const Title = () => (
  <div className="title">
    <Typography gutterBottom variant="h4" component="div">
      SURVEY ON SASOLBURG, SOUTH AFRICA
    </Typography>
    <Typography gutterBottom variant="h6" component="div">
      <span>Nadina Dollie, Free Diploma with Studio NEWROPE</span>
      <br />
      <span>Chair of Architecture and Urban Transformation, ETH Zurich</span>
    </Typography>
  </div>
);

export default Title;
