import React from 'react';
import ProgramOverview from './Program';       
import ProgramBMC from './programBMC';   
import ProgramBCL from './programBCL'; 

export default [
  {
    index: true,
    element: <ProgramOverview />,
  },
  {
    path: 'bmc',
    element: <ProgramBMC />,
  },
{
    path: 'BCL',
    element: <ProgramBCL />,
  },
];
