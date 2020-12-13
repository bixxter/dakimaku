import React from 'react';

export default function GeoLocation() {
  return (
    <>
      <div class="mapouter dokiBlock z-depth-1">
        <h1>Our geolocation</h1>
        <div class="gmap_canvas">
          <iframe
            width="100%"
            height="400px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Almaty%20managment&t=&z=11&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          />
        </div>
      </div>
    </>
  );
}
