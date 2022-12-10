
const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breateTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


const breathAnimation = () => {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Breathe Hold!';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime)
  }, breateTime)
};

breathAnimation();

setInterval(breathAnimation, totalTime);