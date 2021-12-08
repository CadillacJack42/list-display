
export const nestedRender = (nestedObj) => {
    const nestedObjContainer = document.createElement('div');
    nestedObjContainer.classList.add('top-albums');

    const listWrapper = document.createElement('ol');
    listWrapper.classList.add('albums-list');

    const first = document.createElement('li');
    const second = document.createElement('li');
    const third = document.createElement('li');

    first.textContent = nestedObj.topAlbums.one;
    second.textContent = nestedObj.topAlbums.two;
    third.textContent = nestedObj.topAlbums.three;

    listWrapper.append(first, second, third);

    nestedObjContainer.append(listWrapper);

    return nestedObjContainer;
};