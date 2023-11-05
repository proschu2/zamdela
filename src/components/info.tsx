import React, { FC } from 'react';
import { point } from '../data/point';
import Picture from './picture';
import Location from './location';
import ReactPlayer from 'react-player';
import '../styles/info.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Info: FC<{ pt: point }> = ({ pt }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
      {pt.img && (
        <div style={{ maxWidth: fullScreen ? '100%' : '50%', margin: '0 auto' }}>
          <Picture img={pt.img} />
        </div>
      )}
      {!pt.img && pt.youtube_id && (
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=' + pt.youtube_id}
          width="100%"
          maxHeight="50vh"
          controls={true}
          playing={true}
          volume={20}
          muted={false}
          loop={true}
        />
      )}
      <Location {...pt} />
    </div>
  );
};

export default Info;
