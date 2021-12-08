import { nestedRender } from './render-nestedBandObj.js';
import { displayArray } from './render-four.js';

export const objRender = (bandObj) => {
    const bandObjContainer = document.createElement('div');
    
    for (const bandData of bandObj) {
        const bandName = document.createElement('h3');
        const bandSize = document.createElement('span');
        const albumCount = document.createElement('span');
        const bandGenre = document.createElement('span');

        bandSize.textContent = bandData.memberCount;
        albumCount.textContent = bandData.studioAlbums;
        bandGenre.textContent = bandData.genre;
        bandName.append(bandData.name, ' is a ', bandGenre, ' band comprised of ', bandSize, ' members. They have released ', albumCount, ' studio albums.');
        bandObjContainer.append(bandName);

        let albumDescriptionEl = document.createElement('h4');
        albumDescriptionEl.textContent = 'Their top 3 albums are: ';
        bandObjContainer.append(albumDescriptionEl);
        let albums = nestedRender(bandData);
        bandObjContainer.append(albums);

        let memberDescriptionEl = document.createElement('h4');
        memberDescriptionEl.textContent = 'Band Members are:';
        bandObjContainer.append(memberDescriptionEl);
        
        let members = displayArray(bandData.members);
        bandObjContainer.append(members);

    }
    return bandObjContainer;
};