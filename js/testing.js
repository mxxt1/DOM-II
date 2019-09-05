
//parent container
const container = document.querySelector(".container");

//create elements
const vidContainer = document.createElement('div');
const vidTitle = document.createElement('h2');
const vidText = document.createElement('p');
const vidMedia = document.createElement('img');

//create the structure
function createVidContainer(){
vidContainer.appendChild(vidTitle);
vidContainer.appendChild(vidText);
vidContainer.appendChild(vidMedia);

//if you were assigning classes, you'd do classList here. 

//assign values to element
vidTitle.textContent = "Guns of Brixton";
vidText.textContent = "by The Clash";
vidMedia.setAttribute('src','https://images.unsplash.com/photo-1558981285-501cd9af9426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');

// look into CORB... this is why you couldn't embed a youtube link. It's a chrome feature --> // needs disable

return vidContainer;

}

container.appendChild(createVidContainer());
