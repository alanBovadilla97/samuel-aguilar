import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function  Map () {
  const defaultProps = {
      center: {
        lat: 20.652429470944288,
        lng: -103.30924668650786
      },
      zoom: 16
    };
  return(
    <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC8-HpSUbbxRw24KBfIzL8b48NwmByaHt8" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
  );
};
