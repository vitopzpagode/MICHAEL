// script.js

/* PRELOADER */

window.addEventListener('load', () => {

  const preloader =
    document.querySelector('.preloader');

  setTimeout(() => {

    preloader.classList.add('hide');

  }, 2500);
});

/* COUNTERS */

const counters =
document.querySelectorAll('.counter');

counters.forEach(counter => {

  const updateCounter = () => {

    const target =
      +counter.dataset.target;

    const current =
      +counter.innerText;

    const increment =
      target / 120;

    if(current < target){

      counter.innerText =
        Math.ceil(current + increment);

      requestAnimationFrame(updateCounter);

    }else{

      counter.innerText = target;
    }
  }

  updateCounter();
});

/* REVEAL ANIMATION */

const reveals =
document.querySelectorAll('.reveal');

function revealElements(){

  reveals.forEach(element => {

    const windowHeight =
      window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.classList.add('active');
    }
  });
}

window.addEventListener(
  'scroll',
  revealElements
);

revealElements();

/* CURSOR GLOW */

const glow =
document.querySelector('.cursor-glow');

document.addEventListener(
  'mousemove',
  e => {

    glow.style.left =
      e.clientX + 'px';

    glow.style.top =
      e.clientY + 'px';
  }
);

/* HERO 3D */

const heroImage =
document.querySelector('.hero-image');

window.addEventListener(
  'mousemove',
  e => {

    const x =
      (window.innerWidth / 2 - e.pageX) / 40;

    const y =
      (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
      `
      rotateY(${x}deg)
      rotateX(${y}deg)
      `;
  }
);

/* ALBUM CARDS 3D */

const albumCards =
document.querySelectorAll('.album-card');

albumCards.forEach(card => {

  card.addEventListener(
    'mousemove',
    e => {

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        (y - centerY) / 20;

      const rotateY =
        (centerX - x) / 20;

      card.style.transform =
        `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
        `;
    }
  );

  card.addEventListener(
    'mouseleave',
    () => {

      card.style.transform =
        `
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
        `;
    }
  );
});

/* VIDEO 3D EFFECT */

const video =
document.querySelector('.video-container');

if(video){

  video.addEventListener(
    'mousemove',
    e => {

      const rect =
        video.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        (y - centerY) / 40;

      const rotateY =
        (centerX - x) / 40;

      video.style.transform =
      `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.01)
      `;
    }
  );

  video.addEventListener(
    'mouseleave',
    () => {

      video.style.transform =
      `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
      `;
    }
  );
}

/* PARALLAX ORBS */

const orbs =
document.querySelectorAll('.orb');

window.addEventListener(
  'mousemove',
  e => {

    const x =
      e.clientX / window.innerWidth;

    const y =
      e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {

      const speed =
        (index + 1) * 25;

      orb.style.transform =
      `
      translate(
        ${x * speed}px,
        ${y * speed}px
      )
      `;
    });
  }
);

/* HERO BACKGROUND LIGHT */

const hero =
document.querySelector('.hero');

window.addEventListener(
  'mousemove',
  e => {

    const x =
      e.clientX / window.innerWidth;

    const y =
      e.clientY / window.innerHeight;

    hero.style.background =
    `
    radial-gradient(
      circle at ${x * 100}% ${y * 100}%,
      rgba(255,215,0,0.08),
      transparent 40%
    )
    `;
  }
);

/* LOGO ROTATION */

const logo =
document.querySelector('.logo');

window.addEventListener(
  'scroll',
  () => {

    const value =
      window.scrollY;

    logo.style.transform =
      `rotate(${value / 5}deg)`;
  }
);

/* BUTTON GLOW */

const buttons =
document.querySelectorAll('button');

buttons.forEach(button => {

  button.addEventListener(
    'mouseenter',
    () => {

      button.style.boxShadow =
      `
      0 0 40px rgba(255,215,0,0.5),
      0 0 80px rgba(255,215,0,0.2)
      `;
    }
  );

  button.addEventListener(
    'mouseleave',
    () => {

      button.style.boxShadow =
        'none';
    }
  );
});

/* LETTER ANIMATION */

const title =
document.querySelector('.hero-title');

if(title){

  const originalText =
    title.innerHTML;

  title.innerHTML =
    '';

  originalText.split('').forEach((letter, index) => {

    const span =
      document.createElement('span');

    span.innerHTML =
      letter === ' '
      ? '&nbsp;'
      : letter;

    span.classList.add('letter');

    span.style.animationDelay =
      `${index * 0.05}s`;

    title.appendChild(span);
  });
}

/* PARTICLES */

const particleCount = 30;

for(let i = 0; i < particleCount; i++){

  const particle =
    document.createElement('div');

  particle.classList.add('particle');

  document.body.appendChild(particle);

  const size =
    Math.random() * 5 + 2;

  particle.style.width =
    `${size}px`;

  particle.style.height =
    `${size}px`;

  particle.style.left =
    `${Math.random() * 100}%`;

  particle.style.top =
    `${Math.random() * 100}%`;

  particle.style.animationDuration =
    `${Math.random() * 10 + 10}s`;

  particle.style.animationDelay =
    `${Math.random() * 5}s`;
}

/* SCROLL PARALLAX */

window.addEventListener(
  'scroll',
  () => {

    const scrollY =
      window.scrollY;

    const heroImage =
      document.querySelector('.hero-image');

    if(heroImage){

      heroImage.style.transform +=
      `
      translateY(${scrollY * 0.05}px)
      `;
    }
  }
);

/* CONSOLE MESSAGE */

console.log(
`
███╗   ███╗     ██╗
████╗ ████║     ██║
██╔████╔██║     ██║
██║╚██╔╝██║██   ██║
██║ ╚═╝ ██║╚█████╔╝
╚═╝     ╚═╝ ╚════╝

MICHAEL JACKSON IMMORTAL EXPERIENCE LOADED
`
);