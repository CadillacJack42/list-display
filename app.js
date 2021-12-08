// import functions and grab DOM elements
import { bands } from './band-array.js';
import { renderBand } from './render-band.js';

import { objRender } from './render-bandObject.js';

import { nestedArrayBandObjects } from './array-four.js';

const destination = document.getElementById('main');

const bandList = renderBand(bands);
destination.append(bandList);

const bandDescription = objRender(nestedArrayBandObjects);
destination.append(bandDescription);
