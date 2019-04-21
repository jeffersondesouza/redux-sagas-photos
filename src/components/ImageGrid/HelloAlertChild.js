import React, { Component, useEffect } from 'react';
import HelloAlertGran from './HelloAlertGran';

const HelloAlertChild = props => {

  return (
  <div className="HelloAlertChild">
    Total de fotos <HelloAlertGran />{' '} 
  </div>
);}

export default HelloAlertChild;
