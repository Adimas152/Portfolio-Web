$('.page-scroll').on('click', function(e){

    // Ambil isi href
    var tujuan = $(this).attr('href');
    // Tangkap elemn yang bersangkutan
    
    var elemenTujuan = $(tujuan);


    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 70
    }, 900);

    e.preventDefault();

});

