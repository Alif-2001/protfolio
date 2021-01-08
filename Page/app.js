function splitScroll(duration, part){
    const controller = new ScrollMagic.Controller();
    
    new ScrollMagic.Scene({
        duration: duration,
        triggerElement: part,
        triggerHook: 0
    })
    .setPin(part)
    .addTo(controller);
}

function animateProgress(container, percentage){
    var bar = new ProgressBar.Circle(container, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#000000',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null,
      });
      
      bar.animate(percentage);  // Number from 0.0 to 1.0
}

function buildProgress(){
    animateProgress(container1, 0.75)
    animateProgress(container2, 0.75)
    animateProgress(container3, 0.75)
    animateProgress(container4, 0.60)
    animateProgress(container5, 0.5)
    animateProgress(container6, 0.5)
}

buildProgress();
if(screen.width > 1020 && window.innerWidth > 1020){
    splitScroll(1250,'.leftP');
    splitScroll(500,'.leftE');
    console.log(window.innerWidth);
}
