import React, { FC } from 'react';

import { point } from '../data/point';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Unstable_Grid2';
import '../styles/location.css';

const Location: FC<point> = (props) => (
  <CardContent>
    <Typography gutterBottom variant="h4" component="div">
      <span>{props.name}</span>
    </Typography>
    <Typography gutterBottom sx={{ verticalAlign: 'middle' }} component="div">
      {/* <Grid container columnSpacing={3} rowSpacing={1}>
        <Grid xs={12} sm="auto">
          <span className="Dotmatrx">{props.date} </span>
        </Grid>
        <Grid xs={12} sm="auto">
          <span className="Counterfeit">{props.name} </span>
        </Grid>
        <Grid xs={12} sm="auto">
          <span className="DeltaMachine">{props.city} </span>
          <span style={{ verticalAlign: 'middle' }}>
            <CircleFlag countryCode={props.country.toLowerCase()} loading="lazy" className="countryBall" />
          </span>
        </Grid>
      </Grid> */}
      <span dangerouslySetInnerHTML={{ __html: props.text }}></span>
    </Typography>
    {/* 
    <span className="DeltaMachine">{props.city}</span>

    <br />
    <p className={props.class}>{props.name}</p>
    <p className="Violatio">{props.city} Violatio</p>
    <p className="Dotmatrx">{props.city} Dotmatrx</p>

    <p className="DeltaMachine2">{props.city} DeltaMachine2</p>
    <p className="Counterfeit">{props.city} Counterfeit</p>
    <p className="Broken">{props.city} Broken</p>
    <p className="Cocogoose">{props.city} Cocogoose</p>
    <p className="DeltaMachine">{props.city} DeltaMachine</p>
    <p className="DeMo">
      abcdefghijklmnopqrstuvwxyzéü ABCDEFGHIJKLMNOPQRSTUVWXYZÉÜ / @1234567890
      Národny Futbalovy Stadión c'era una volta un bél pinin' DeMo
    </p>
    <p className="SufferWell">{props.city} SufferWell</p>
    <p className="Liquidn">{props.city} Liquidn</p> */}
    <p></p>
  </CardContent>
);

export default Location;
