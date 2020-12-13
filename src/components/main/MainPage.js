import React from 'react';
import AutoPlay from './AutoPlay';
import GeoLocation from './GeoLocation';
import Revisions from './Revisions';
import TextContent from './TextContent';

export default function MainPage() {
  return (
    <div className="container dokiFont">
      <AutoPlay />
      <TextContent />
      <GeoLocation />
      <Revisions />
    </div>
  );
}
