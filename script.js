$(function(){
    $('.burger').click(function(){
        $('.burger').toggleClass('is-active');
        $('.menu').toggleClass('is-active');
        $('.bg-red').toggleClass('is-active');
        $('body').toggleClass('no-scroll');
    });

});

document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll(
    '.sec01-inner .left, .sec01-inner .right, .sec02 .chat-wrapper > div'
  );

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
        entry.target.classList.add('is-active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: [0, 0.3, 1.0]
  });

  targets.forEach(target => {
    observer.observe(target);
  });
});

