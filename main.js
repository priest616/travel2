const navBtn = document.querySelector('.mobile-nav');
const nalst = document.querySelector('.mobilelst');
navBtn.addEventListener('click', () => {
    const visibility = nalst.getAttribute('data-visible');

    if (visibility == 'false') {
        nalst.setAttribute('data-visible', true);
        navBtn.setAttribute('aria-expanded', true);
    } else {
        nalst.setAttribute('data-visible', false);
        navBtn.setAttribute('aria-expanded', false);
    }
})

const secone = document.querySelector('.fstsec');
const seconemain = document.querySelector('.main-item');

option = {
    root: null,
    threshold: 0, //how much of it is visible
    rootMargin: "0px" //sets mergin
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            seconemain.classList.add('slideinclass');

        } else {
            seconemain.classList.remove('slideinclass');
        }
    })
}, option);

observer.observe(secone);


const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');

options = {
    root: null,
    threshold: 0.7,//how much of it is visible
    rootMargin: "0px" //sets mergin
};

const observer2 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            card1.classList.add('slideinsideclass');
            observer.unobserve(entry.target);
        }
    })
}, options);

observer2.observe(card1);

const observer3 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            card2.classList.add('slideinsideclass');
            observer.unobserve(entry.target);
        }
    })
}, options);

observer3.observe(card2);

const observer4 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            card3.classList.add('slideinsideclass');
            observer.unobserve(entry.target);
        }
    })
}, options);

observer4.observe(card3);

const observer5 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            card4.classList.add('slideinsideclass');
            observer.unobserve(entry.target);
        }
    })
}, options);

observer5.observe(card4);

const startdestinations = document.getElementById('destinations');

const observerdig = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            var finalValue = 58;
            var startValue = 0;
            var time;
            var x;
            var numString ='';
            var valueLength = finalValue.toString().length;
            
            //to increase speed, reduce the value of "i"
            for (var i = 10; i < valueLength; i++) { 
              numString += '1';
            }
            x = Number(numString);
            function upValue(){
              if(startValue <= finalValue){
                setTimeout(function(){
                  document.getElementById('destinations').innerText = startValue;
                  if(x > 0){
                    startValue = startValue + x;
                    time = 10;
                  }else{
                    startValue = startValue + 1;
                    time = 20.6;
                  }
                  upValue();
                },time);
              }else{
                setTimeout(function(){
                  document.getElementById('destinations').innerText = finalValue;
                },time);
              }
            }
            upValue();
            observer.unobserve(entry.target);
        }
    })
}, options);

observerdig.observe(startdestinations);

const startcompleted = document.getElementById('completed-trips');

const observerdig1 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            var finalValue = 6;
            var startValue = 0;
            var time;
            var x;
            var numString ='';
            var valueLength = finalValue.toString().length;
            
            //to increase speed, reduce the value of "i"
            for (var i = 10; i < valueLength; i++) { 
              numString += '1';
            }
            x = Number(numString);
            function upValue(){
              if(startValue <= finalValue){
                setTimeout(function(){
                  document.getElementById('completed-trips').innerText = startValue;
                  if(x > 0){
                    startValue = startValue + x;
                    time = 60;
                  }else{
                    startValue = startValue + 1;
                    time = 200;
                  }
                  upValue();
                },time);
              }else{
                setTimeout(function(){
                  document.getElementById('completed-trips').innerText = finalValue;
                },time);
              }
            }
            upValue();
            observer.unobserve(entry.target);
        }
    })
}, options);

observerdig1.observe(startcompleted);

const startcompletedorganised = document.getElementById('organised-events');

const observerdig2 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            var finalValue = 4;
            var startValue = 0;
            var time;
            var x;
            var numString ='';
            var valueLength = finalValue.toString().length;
            
            //to increase speed, reduce the value of "i"
            for (var i = 10; i < valueLength; i++) { 
              numString += '1';
            }
            x = Number(numString);
            function upValue(){
              if(startValue <= finalValue){
                setTimeout(function(){
                  document.getElementById('organised-events').innerText = startValue;
                  if(x > 0){
                    startValue = startValue + x;
                    time = 60;
                  }else{
                    startValue = startValue + 1;
                    time = 300;
                  }
                  upValue();
                },time);
              }else{
                setTimeout(function(){
                  document.getElementById('organised-events').innerText = finalValue;
                },time);
              }
            }
            upValue();
            observer.unobserve(entry.target);
        }
    })
}, options);

observerdig2.observe(startcompletedorganised);


const starthappy = document.getElementById('happy-clients');

const observerdig3 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            var finalValue = 48;
            var startValue = 0;
            var time;
            var x;
            var numString ='';
            var valueLength = finalValue.toString().length;
            
            //to increase speed, reduce the value of "i"
            for (var i = 10; i < valueLength; i++) { 
              numString += '1';
            }
            x = Number(numString);
            function upValue(){
              if(startValue <= finalValue){
                setTimeout(function(){
                  document.getElementById('happy-clients').innerText = startValue;
                  if(x > 0){
                    startValue = startValue + x;
                    time = 60;
                  }else{
                    startValue = startValue + 1;
                    time = 25;
                  }
                  upValue();
                },time);
              }else{
                setTimeout(function(){
                  document.getElementById('happy-clients').innerText = finalValue;
                },time);
              }
            }
            upValue();
            observer.unobserve(entry.target);
        }
    })
}, options);

observerdig3.observe(starthappy);

