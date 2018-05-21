require('styl/index.styl');

var html = require('pug/index.pug');

if (module.hot) {
  module.hot.accept();
  document.body.innerHTML = html;
}
$( document ).ready(function(){
  $(".nav-btn").click(function(){
    $('.nav-list').slideToggle();
    $(this).toggleClass('nav-btn_on');
  });
  $(window).on('resize', function() {
    if (!window.matchMedia('(max-width: 768px)').matches && !$('.nav-list').is(':visible')) {
      $(".nav-btn").click();
    }
    if (window.matchMedia('(max-width: 768px)').matches && $('.main-view_table').is(':visible')) {
      $(".view-mnu__grid").click();
    }
  });
  $(".view-mnu__grid").click(function(){
    $('.main-view').removeClass('main-view_table').addClass('main-view_grid')
  });
  $('.view-mnu__table').click(function(){
    $('.main-view').removeClass('main-view_grid').addClass('main-view_table')
  });

    if (window.matchMedia('(max-width: 768px)').matches && $('.main-view_table').is(':visible')) {
      $('.main-view').removeClass('main-view_table').addClass('main-view_grid')
    }

});