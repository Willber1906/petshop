$(document).ready(function(){
    const banner = $('#banner');
    let b1=1;
    setInterval(function(){
        if(b1 >= 3) b1 = 0;
        banner.fadeOut(1000, function(){
            banner
            .attr('src','assets/img/banner'+b1+'.png') 
            .fadeIn(1000);
        });               
        b1++;
    }, 5000);
 

})

//script contato

document.querySelector('a[href="#contact-form"]').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('#contact-form').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

//carrinho


