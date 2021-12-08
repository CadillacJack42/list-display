// import functions and grab DOM elements
import { bands } from './band-array.js';
import { renderBand } from './render-band.js';

import { bandObjects } from './bandObject-array.js';
import { objRender } from './render-bandObject.js';

import { nestedBandObjects } from './nestedBand-array.js';
import { nestedRender } from './render-nestedBandObj.js';

import { nestedArrayBandObjects } from './array-four.js';


const destination = document.getElementById('main');

// initialize global state
const bandList = renderBand(bands);
destination.append(bandList);

const bandDescription = objRender(nestedArrayBandObjects);
destination.append(bandDescription);

// for (const band of nestedBandObjects) {
//     const bandDescription = objRender(band);
//     destination.append(bandDescription);
//     const bandInfo = nestedRender(band);
//     destination.append(bandInfo);
// }