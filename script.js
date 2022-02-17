const left_arrow = document.querySelector('.left');
const right_arrow = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorContainer = document.querySelector('.indicators'); 
const indicators = document.querySelectorAll('.indicators li');

const totalSlides = slider.childElementCount;



var index = 0;
var numVisSlides =  getComputedStyle(document.querySelector(':root')).getPropertyValue('--num-vis-slides');
// number of times we can swipe left or right
var swipes = totalSlides - numVisSlides;


function grayen()
{
    if(index == 0)
        left_arrow.classList.add('arrow-grey');
    else
        left_arrow.classList.remove('arrow-grey');

    if(index == totalSlides -1)
        right_arrow.classList.add('arrow-grey');
    else
        right_arrow.classList.remove('arrow-grey');        
}

function slideOperations()
{
    slider.style.transform = 'translateX(' + (index)* (-(100/totalSlides)) +"%)";

    document.querySelector('.control .selected').classList.remove('selected');

    indicatorContainer.children[index].classList.add('selected');  
}


indicators.forEach((indicator, ind) => {
    indicator.addEventListener('click', () => {
        index = ind;
        slideOperations();
    });
  });

right_arrow.addEventListener('click', () =>{
    if(index != totalSlides-1)
    {
        // changes the index to cureent slide
        index= (index+1);
        console.log(index);
        grayen();
        slideOperations(); 
    }
});

left_arrow.addEventListener('click', () =>{
    if(index != 0)
    {
        // changes the index to current slide
        index = (index-1);   
        console.log(index);
        grayen();
        slideOperations();  
    }
});




