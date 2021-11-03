var navTrigger = document.getElementsByClassName('nav-trigger')[0],
  body = document.getElementsByTagName('body')[0];

navTrigger.addEventListener('click', toggleNavigation);

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle('nav-open');
}

$('.skill__per').each(function () {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width", per + '%');
  $({ animatedValue: 0 }).animate({ animatedValue: per }, {
    duration: 2000,
    stop: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  })
});

$('.portfolio__slider').slick({
  infinite: true,
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  pauseOnHover: true,
  arrows: true,
  nextArrow: '.portfolio-arrows__left',
  prevArrow: '.portfolio-arrows__right',
  dots: false,
  responsive: [{
    breakpoint: 900,
    settings: {
      slidesToShow: 1
    }
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      dots: true,
    }
  },
  ]
});