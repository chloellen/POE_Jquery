
const lightBoxBg = $('<div>', { id: 'lightboxBg' }).appendTo('body');

$('.zoomImg1, .zoomImg2, .zoomImg3, .zoomImg4').on('click', function() {
    lightBoxBg.addClass('active');
    const lightBoxImg = $('<img>', { src: $(this).attr('src'), id: 'lightboxImg' });
    lightBoxBg.empty().append(lightBoxImg);
});

// Removes lightbox when mouse is clicked
lightBoxBg.on('click', function() {
    lightBoxBg.removeClass('active');
});

// Removes lightbox image when any key is pressed
$(document).on('keydown', function() {
    lightBoxBg.removeClass('active');
});
