import React, { FC } from 'react';
import { location } from '../data/location';
import { point } from '../data/point';
import Picture from './picture';
import Concert from './concert';
import Location from './location';
import Casina from './casina';
import ReactPlayer from 'react-player';

const Info: FC<{ pt: point }> = ({ pt }) => {
  return (
    <div>
      {/* <Picture type={loc ? loc.type : 'HOME'} concert={loc.id} /> */}
      {/* {loc.type === 'CONCERT' ? <Concert {...loc} /> : <Casina />} */}
      <ReactPlayer
        url={'https://www.youtube.com/watch?v=' + pt.youtube_id}
        width="100%"
        maxHeight="50vh"
        controls={true}
        playing={true}
        volume={0}
        muted={true}
        loop={true}
      />
      <Location {...pt} />
    </div>
  );
};

export default Info;
