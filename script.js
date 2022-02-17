
const sections = document.querySelectorAll('section');

sections.forEach(section => {

    const left_arrow = section.querySelector('.left');
    const right_arrow = section.querySelector('.right');

    const slider = section.querySelector('.slider');

    const indicatorContainer = section.querySelector('.indicators');
    const indicators = section.querySelectorAll('.indicators li');

    const totalSlides = slider.childElementCount;



    var index = 0;
    var numVisSlides = getComputedStyle(document.querySelector(':root')).getPropertyValue('--num-vis-slides');
    // number of times we can swipe left or right
    var swipes = totalSlides - numVisSlides;

    // add selected class to the lis on window load
    window.addEventListener('load', (event) => {
        indicators.forEach((ind, counter) =>
        {
            if(counter < numVisSlides)
                ind.classList.add('selected');
        });
    });

    function indicateGrayArrow() {
        if (index == 0)
            left_arrow.classList.add('arrow-grey');
        else
            left_arrow.classList.remove('arrow-grey');

        if (index == swipes)
            right_arrow.classList.add('arrow-grey');
        else
            right_arrow.classList.remove('arrow-grey');
    }

    function slideOperations() {
        slider.style.transform = 'translateX(' + (index) * (-(100 / totalSlides)) + "%)";

        indicators.forEach((ind, counter) =>
        {
            if(counter >= index && counter < (index + parseInt(numVisSlides)))
            {
                ind.classList.add('selected');
            }
            else
            {
                ind.classList.remove('selected');
            }    
        });

    }


    // indicators.forEach((indicator, ind) => {
    //     if(ind)
    //     indicator.addEventListener('click', () => {
    //         index = ind;
    //         slideOperations();
    //     });
    // });

    right_arrow.addEventListener('click', () => {
        if (index != swipes) {
            // changes the index to cureent slide
            index = (index + 1);
            indicateGrayArrow();
            slideOperations();
        }
    });

    left_arrow.addEventListener('click', () => {
        if (index != 0) {
            // changes the index to current slide
            index = (index - 1);
            indicateGrayArrow();
            slideOperations();
        }
    });


});

