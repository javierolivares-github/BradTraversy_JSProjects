const header = document.querySelector('#header');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profile_img = document.querySelector('#profile_img');
const profile_name = document.querySelector('#name');
const profile_date = document.querySelector('#date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="./concert.jpg" alt="A great concert.">';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor quis provident.';
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/47.jpg" alt="A picture of a men.">';
  profile_name.innerHTML = 'John Doe';
  profile_date.innerHTML = 'Oct 08, 2020';

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}