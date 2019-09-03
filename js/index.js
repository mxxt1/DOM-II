// Your code goes here

//event 1: mouseover nav links turns color red
const navLinkHover = document.querySelectorAll('.nav-link');
navLinkHover.forEach(item =>{
    item.addEventListener("mouseover", e=>{
        console.log(`mouseover nav links`);
        item.style.color = "red";
    })
})


//event 2: mouseleave nav links turn back to @font-color

const navLinkMove = document.querySelectorAll('.nav-link');
navLinkMove.forEach(item =>{
    item.addEventListener("mouseleave", e=>{
        console.log(`mouse has left`);
        item.style.color = 'black';
    })
})


//event 3: change src on mouseover

const headerImg = document.querySelector('.intro img');
console.log(headerImg);
headerImg.addEventListener('mouseover', e=>{
    headerImg.setAttribute('src','/img/destination.jpg');
})

//event 4: change src back to original on mouseleave
headerImg.addEventListener('mouseleave', e=>{
    headerImg.setAttribute('src','img/fun-bus.jpg');
    headerImg.style.width = '100%';
})



//event 5: Scale up on single click of img-content

const contentImgLarge = document.querySelectorAll('.img-content');
contentImgLarge.forEach(item =>{
    item.addEventListener('click', e =>{
        item.style.transform = 'scale(2)';
        item.style.transition = 'transform 1.0s';
    })
})


//event 6: Scale back down on double click
const contentImgNormal = document.querySelectorAll('.img-content');
contentImgNormal.forEach(item =>{
    item.addEventListener('dblclick', e =>{
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 1.0s';
    })
})

//event 7: change text color on scroll
const scrollTextColorDown = document.querySelectorAll('h2, p, h4');
console.log(scrollTextColorDown);
scrollTextColorDown.forEach(item =>{
    item.addEventListener('mouseenter', e =>{
        item.style.color = 'red';
    })
})

//event 8:
const mouseOverColorReverse = document.querySelectorAll('h2,p,h4');
mouseOverColorReverse.forEach(item =>{
    item.addEventListener('mouseout', e =>{
        item.style.color = 'black';
    })
})


//event 9: 
const contentImgDown = document.querySelectorAll('.content-destination img');
console.log(contentImgDown);
contentImgDown.forEach(item =>{
    item.addEventListener('mouseenter', e =>{
        item.style.transform = 'scale(2)';
        item.style.transition = 'transform 1.0s';
    })
})

//event 10:
const contentImgLeave = document.querySelectorAll('.content-destination img');
contentImgLeave.forEach(item =>{
    item.addEventListener('mouseleave', e=>{
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 1.0s';
    })
})

//scroll --> TODO: fix scroll

const mouseColorScroll = document.querySelectorAll('h2,p,h4');
mouseColorScroll.forEach(item =>{
    item.addEventListener('scroll', e =>{
        item.style.backgroundColor = 'pink';
    })
})

const mouseColorWheel = document.querySelectorAll('h2,p,h4');
mouseColorWheel.forEach(item =>{
    item.addEventListener('wheel', e =>{
        item.style.color = 'green';
    })
})

//nest two events and use stopPropagation()
const destinationBackgroundToggle = document.querySelector('.content-pick');
console.log(destinationBackgroundToggle);
destinationBackgroundToggle.addEventListener('click', e=>{
    destinationBackgroundToggle.style.backgroundColor = 'pink';
})


//mousedown
const destinationMouseDown = document.querySelectorAll('.destination');
destinationMouseDown.forEach(item =>{
    item.addEventListener('mousedown', e=>{
        item.style.backgroundColor = 'yellow';
        e.stopPropagation();
    })
})

//mouseup
const destinationMouseUp = document.querySelectorAll('.destination');
destinationMouseUp.forEach(item =>{
    item.addEventListener('mouseup', e=>{
        item.style.backgroundColor = 'white';
        e.stopPropagation();
    })
})

//prevent nav from refreshing page using preventDefault();
const navStop = document.querySelectorAll('.nav-link');
navStop.forEach(item =>{
    item.addEventListener('click', e=>{
        console.log(`nav link clicked and normal behavior stopped`);
        e.preventDefault();
    })
    

})









