import { Map as PigMap, Overlay } from 'pigeon-maps';
import React, { useState } from 'react';
import data from '../data/points.json';
import Detail from './detail';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { point } from '../data/point';
import { Outlet, useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Title from './title';

import { maptiler, osm } from 'pigeon-maps/providers';

const provider =
  import.meta.env.VITE_MAPTILER_API_KEY && import.meta.env.VITE_GRAY === 'true'
    ? maptiler(import.meta.env.VITE_MAPTILER_API_KEY, 'basic-v2-light')
    : osm;
const initialCenter: [number, number] = [-26.823831, 27.840613];
const PitMap = () => {
  // use id (optional) parameters to select a specific day
  const { id } = useParams();

  // hook used to keep updated from the size of window
  const { height, width } = useWindowDimensions();

  // define initial zoom
  const initialZoom = useMediaQuery(useTheme().breakpoints.down('sm')) ? 13 : 14;

  // define initial center and zoom (and functions to change them)
  const [center, setCenter] = useState<[number, number]>(initialCenter);
  const [zoom, setZoom] = useState<number>(initialZoom);

  // reset the map to initial center and zoom (after leaving modals)
  const resetMap = () => {
    setCenter(initialCenter);
    setZoom(initialZoom);
    updatePinSize(initialZoom);
  };

  // variables and functions to update status and content of the modal
  const [open, setOpen] = useState<boolean>(false);
  const [point, setPoint] = useState<point>();

  // variable and function to update the size of the placeholders
  const [pinSize, setPinSize] = useState<string>('30');
  const updatePinSize = (zoom: number): void => {
    if (zoom >= 6) {
      setPinSize('40');
    } else if (zoom === 5) {
      setPinSize('30');
    } else {
      setPinSize('15');
    }
  };

  // function to close the modal and reset the map
  const closeModal = () => {
    resetMap();
    setOpen(false);
  };

  // function to define the location used by modal
  const defineLocation = (pt: point) => {
    setCenter([pt.lat, pt.lon]);
    //setZoom(8);
    setPoint(pt);
    setOpen(!open);
  };

  // effect that is used to check if an id is there, in case set the location
  /*   useEffect(() => {
    if (typeof id !== 'undefined') {
      const pt = getDay(id);
      defineLocation(pt);
    }
  }, [id]); */

  return (
    <>
      {!open && <Title />}
      <div className="map">
        <PigMap
          provider={provider}
          height={height}
          width={width}
          center={center}
          zoom={zoom}
          minZoom={8}
          onClick={resetMap}
          onBoundsChanged={({ center, zoom }) => {
            updatePinSize(zoom);
            setCenter(center);
            setZoom(zoom);
          }}
        >
          <Outlet />
          {data &&
            data.map((loc) => {
              return (
                <Overlay key={loc.id} anchor={[loc.lat, loc.lon]} offset={[0, 0]}>
                  <img
                    src="/sasolburg_round.webp"
                    alt="X"
                    height={pinSize}
                    width={pinSize}
                    onClick={() => {
                      defineLocation(loc);
                    }}
                    aria-hidden="true"
                  />
                </Overlay>
              );
            })}
        </PigMap>
      </div>
      {point && <Detail props={point} open={open} closeModal={closeModal} />}
    </>
  );
};

export default PitMap;
