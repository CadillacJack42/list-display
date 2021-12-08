
export const renderBand = (bandsList) => {
    const listOfBands = document.createElement('div');
    const headline = document.createElement('h3');
    headline.textContent = 'My current Top 5 Bands';
    listOfBands.append(headline);
    for (const band of bandsList) {
        // console.log(band);
        const bandName = document.createElement('p');
        bandName.textContent = band;
        bandName.classList.add('bands');
        listOfBands.append(bandName);
    }
    return listOfBands;
};

