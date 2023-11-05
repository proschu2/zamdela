import CardMedia from '@mui/material/CardMedia';
import React, { FC } from 'react';
import '../styles/picture.css';

const Picture: FC<{ className?: string; img: string }> = ({ className, img }) => {
  return <>{img && <CardMedia className={className} component="img" image={`/images/${img}`} loading="lazy" />}</>;
};

export default Picture;
