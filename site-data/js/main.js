"use strict";$(document).ready(function(){function t(){$(".section").each(function(){var t=$('#dot-nav a[href="#'+$(this).attr("id")+'"]').data("number"),e=$(this).offset().top,n=$(window).height()/2,o=$(window).scrollTop(),i=e-n<o,r=e+$(this).height()-n>o;i&&r?$("#dot-nav a").eq(t).addClass("is-selected"):$("#dot-nav a").eq(t).removeClass("is-selected")})}function e(t){$("body, html").animate({scrollTop:t.offset().top+50},500)}function n(){var t=window.innerWidth>768,e=s.offsetTop-s.offsetTop/4,n=window.scrollY>e,i=d.classList.contains("open");t&&n?a.classList.add("active"):t&&i?o():a.classList.remove("active")}function o(){l.classList.toggle("active"),d.classList.toggle("open"),document.body.classList.toggle("noScroll")}function i(){this.parentElement.classList.add("is-active","is-completed")}function r(){this.parentElement.classList.remove("is-active","is-completed")}function c(){f.style.height="",f.style.height=Math.min(f.scrollHeight,v)+"px"}t(),window.addEventListener("scroll",t),$(".scroll-down").on("click",function(t){t.preventDefault(),e($(this.hash))}),$("#dot-nav a").on("click",function(t){t.preventDefault(),e($(this.hash))}),$("#overlay a").on("click",function(t){t.preventDefault(),e($(this.hash)),$("#toggle").click()});var a=document.querySelector("#dot-nav"),s=document.querySelector("#about-section"),l=document.querySelector("#toggle"),d=document.querySelector("#overlay");window.addEventListener("scroll",n),window.addEventListener("resize",n),l.addEventListener("click",o);var u={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return u.Android()||u.BlackBerry()||u.iOS()||u.Opera()||u.Windows()}};u.any()||skrollr.init({render:function(t){},smoothScrolling:!1,forceHeight:!1});var h=document.querySelectorAll(".contact-input");h.forEach(function(t){return t.addEventListener("focus",i)}),h.forEach(function(t){return t.addEventListener("blur",r)});var f=document.querySelector("#message"),v=300;f.addEventListener("input",c)});

particlesJS("bgintro", {
  "particles": {
    "number": {
      "value": 88,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8","#b71c1c"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#33b1f8",
      "opacity": 0.25,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
