$('.cart-container').on('click', function (e) {
  
    $('.modal').toggleClass('active');
    
  });
  
  $('.Amazon').on('click', function (e) {
    
    $('.shop-card').hide(300);
    $('*[data-cat="Amazon"]').show(300);
    
  });
  
  $('.Lenovo').on('click', function (e) {
    
    $('.shop-card').hide(300);
    $('*[data-cat="Lenovo"]').show(300);
    
  });