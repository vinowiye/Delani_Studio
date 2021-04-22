$(function(){
    let design= $("#design");
    let development= $("#development");
    let productmng= $("#productmng");
    let designh= $("#designh");
    let developmenth= $("#developmenth");
    let productmngh= $("#productmngh");
    let delani=$(".delani");
    let name=$("#name");
    let email=$("#email");
    let message=$("#message");
    let port =$(".port");
  
    $(design).hide();
    $(development).hide();
    $(productmng).hide();
    $(delani).hide();
  // onclick shows
    $(".image1").on('click',function(){
        $(".image1").hide();
        $(design).show();
    });
    $(".image2").on('click',function(){
        $(".image2").slideUp('slow');
        $(development).show(500);
    });
    $(".image3").on('click',function(){
        $(".image3").slideUp('slow');
        $(productmng).show(500);
    });
  
  // onclick hiding
    $(".image1").on('click', function () {
        $(".image1").slideDown('slow');
        $(design).hide(10000);
    });
    $(".image2").on('click', function () {
        $(".image2").slideDown('slow');
        $(development).hide(10000);
    });
    $(".image3").on('click', function () {
        $(".image3").slideDown('slow');
        $(productmng).hide(10000);
    });    
  
        $('.port').on('click',function(){
        $('.port').hide('slow');
        $(delani).show(1000);
     });
  
    $('.delani').hover(function(){
        $('.delani').hide(10000);
        $(port).show(1000);
     });
  });
  