import React, { Component } from 'react';

import { Context } from './ImageGrid';

const HelloAlertGran = props => {
  

  return (
    <Context.Consumer>
      {context => {
        return (
          <button className="HelloAlertGran" onClick={()=>context.hadleShowTotal('oi')}>
            {context.total}
          </button>
        );
      }}
    </Context.Consumer>
  );
};

export default HelloAlertGran;
