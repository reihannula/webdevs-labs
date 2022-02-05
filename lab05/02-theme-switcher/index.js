/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const setDefault = () => {
   document.querySelector('body').className = null;
}

const setOcean = () => {
   document.querySelector('body').className = "ocean";
}

const setDesert = () => {
   document.querySelector('body').className = "desert";
}

const setContrast = () => {
   document.querySelector('body').className = "high-contrast";
}

document.querySelector('#default').addEventListener('click', setDefault);
document.querySelector('#ocean').addEventListener('click', setOcean);
document.querySelector('#desert').addEventListener('click', setDesert);
document.querySelector('#high-contrast').addEventListener('click', setContrast);