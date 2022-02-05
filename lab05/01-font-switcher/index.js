//var times = 0;

const makeBigger = () => {
   //alert('make bigger!');
   //times ++;
   if (document.querySelector('h1').style.fontSize == "") {
      var x = document.querySelector('h1').style.fontSize = "32px";
    }
   var x = document.querySelector('h1').style.fontSize;
   document.querySelector('h1').style.fontSize = parseInt(x) * 1.1 + "px";

   if (document.querySelector('.content').style.fontSize == "") {
      var y = document.querySelector('.content').style.fontSize = "22.4px";
   }
   var y = document.querySelector('.content').style.fontSize;
   document.querySelector('.content').style.fontSize = parseFloat(y) * 1.1 + "px";
};

const makeSmaller = () => {
   //alert('make smaller!');
   if (document.querySelector('h1').style.fontSize == "") {
      var x = document.querySelector('h1').style.fontSize = "32px";
    }
   var x = document.querySelector('h1').style.fontSize;
   document.querySelector('h1').style.fontSize = (parseInt(x) - 3) + "px";

   if (document.querySelector('.content').style.fontSize == "") {
      var y = document.querySelector('.content').style.fontSize = "22.4px";
   }
   var y = document.querySelector('.content').style.fontSize;
   document.querySelector('.content').style.fontSize = (parseFloat(y)- 3) + "px";;
};


document.querySelector('#a1, #a2').addEventListener('click', makeBigger);
document.querySelector('#al, #a2').addEventListener('click', makeSmaller);

