import React from 'react';
import { lazy } from 'react';

const routes = [
  {
    path: '/:id/amenities',
    component: lazy(() => import('../components/AmenitiesList')),
    exact: true
  }
 
];

export default routes;