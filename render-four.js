export const displayArray = (membersArr) => {
    const membersDiv = document.createElement('div');
    for (const member of membersArr) {

        const memberDisplay = document.createElement('p');
        memberDisplay.style.margin = '0';

        memberDisplay.textContent = member;

        membersDiv.append(memberDisplay);

    }
    return membersDiv;
};