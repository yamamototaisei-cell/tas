$(function(){

    $("#hn-btn").on("click",function(){
        $(this).toggleClass("-action");
    });
});

$(function(){

    $("#hn-btn").on("click",function(){
        $("#header-nav").toggleClass("-action");
    });
});

$(function(){
    $("#menyu-lists").slick({
        centerMode: true,
        dots:true,
        arrow:true,
        autoplay:true,
        autoplaySpeed:2000
    });
});

    $("#menyu-lists").slick({
        asNavFor:".slider",
        slidesTshow:3,
    });

    document.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
      });
