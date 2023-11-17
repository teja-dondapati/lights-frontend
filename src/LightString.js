// LightString.js

import React, { useState, useEffect } from 'react';
import Bulb from './Bulb';

const LightString = () => {
  const [bulbs, setBulbs] = useState([]);
  const colors = ['Green', 'Red', 'Blue'];
  const bulbCount = 100;

  useEffect(() => {
    // Initialize bulbs with default state (not lit up)
    const initialBulbs = Array.from({ length: bulbCount }, (_, index) => ({
      id: index + 1,
      color: colors[index % colors.length],
      litUp: false,
    }));
    setBulbs(initialBulbs);
  }, []);

  useEffect(() => {
    // Logic to light up bulbs in the desired pattern
    // Implement your specific pattern here

    // For example, lighting up all Greens first, then all Reds, then all Blues, and repeating
    const litUpBulbs = bulbs.map((bulb, index) => ({
      ...bulb,
      litUp: index % colors.length === 0, // lit up if it's a Green bulb
    }));

    setBulbs(litUpBulbs);
  }, [bulbs]);

  return (
    <div className="light-string">
      {bulbs.map((bulb) => (
        <Bulb key={bulb.id} color={bulb.color} litUp={bulb.litUp} />
      ))}
    </div>
  );
};

export default LightString;
