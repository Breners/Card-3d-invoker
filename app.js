// Moving animation to happen 

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title');
const invoker = document.querySelector('.invoker img');
const seeHero = document.querySelector('.seeHero button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//Moving animation Event 

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}); 

//Animate in 
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none"  

  //Popout
  title.style.transform = 'translateZ(150px)';
  invoker.style.transform = 'translateZ(10ch)';
  description.style.transform = 'translateZ(125px)';
  seeHero.style.transform = 'translateZ(75px)';
});

// Animate out

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease"
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  title.style.transform = 'translateZ(0px)';
  invoker.style.transform = 'translateZ(0px) rotateZ(0deg)';
  description.style.transform = 'translateZ(0px)';
  seeHero.style.transform = 'translateZ(0px)';
});