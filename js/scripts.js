$('#logo').mouseleave(function(){
  $('.popUpBox').show();
  });
  $('.popUpBox').click(function(){
      $('.popUpBox').hide();
  });
  $('.popupClose').click(function(){
      $('.popUpBox').hide();
  });

  document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
  
  $('#formulario').submit(function (event) {
    
    var name = $('#NAME').val();
    var email = $('#EMAIL').val();
    var linkedin = $('#LINKEDIN').val();
    
    event.preventDefault();
    
    $.ajax({
      url: 'https://agenciareboot.us18.list-manage.com/subscribe/post',
      method: 'POST',
      data: { u: '8639194a63a0eeeb95aa17c8f', id: 'b4c1b7f0d5', NAME: name, EMAIL: email, LINKEDIN: linkedin },
      dataType: 'jsonp'
    });
});

$('#formulario').submit(function () {
  window.location = "https://www.agenciareboot.com/thankyou.html";
});