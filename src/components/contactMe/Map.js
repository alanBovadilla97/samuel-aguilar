import { Box, styled } from '@mui/material';
import GoogleMapReact from 'google-map-react';

// -------------------------------------------------------------------------

const MapContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%'
}));

// -------------------------------------------------------------------------

export default function  Map () {
  const defaultProps = {
    center: {
      lat: 20.652429470944288,
      lng: -103.30924668650786
    },
    zoom: 16
  };
  
  return(
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC8-HpSUbbxRw24KBfIzL8b48NwmByaHt8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </MapContainer>
  );
};
