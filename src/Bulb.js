// Bulb.js

import React, { useState } from 'react';

const Bulb = ({ color, litUp }) => {
  return (
    <div className={`bulb ${litUp ? 'lit-up' : ''}`} style={{ backgroundColor: color }}>
      {/* You can add more styling or effects for the lit-up state */}
    </div>
  );
};

export default Bulb;
