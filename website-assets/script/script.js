$('li.nav-item.dropdown .dropdown-menu a').on('click',function() {
  $(this).addClass('active');
  $(this).siblings().removeClass("active");
});
