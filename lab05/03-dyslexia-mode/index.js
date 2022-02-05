/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexia = () => {

  if(document.querySelector('body').className == "dyslexia-mode"){
    document.querySelector('body').className = null;
  }
  else
    document.querySelector('body').className = "dyslexia-mode";
}

document.querySelector('#dyslexia-toggle').addEventListener('click', dyslexia);