/*
const lightBoxBg = document.createElement('div');
lightBoxBg.id = "lightboxBg";
document.body.appendChild(lightBoxBg);

const images = document.querySelectorAll('.zoomImg');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightBoxBg.classList.add('active');
        const lightBoxImg = document.createElement('img');
        lightBoxImg.src = image.src;
        lightBoxImg.id = 'lightboxImg'
        while (lightBoxBg.firstChild){
            lightBoxBg.removeChild(lightBoxBg.firstChild)
        }
        lightBoxBg.appendChild(lightBoxImg)

    })
})

//removes lightbox when mouse is clicked
lightBoxBg.addEventListener('click', e => {
    lightBoxBg.classList.remove('active');
})

//removes lightbox image when any key is pressed
document.addEventListener('keydown', e=> {
    lightBoxBg.classList.remove('active');
})
*/

const lightBoxBg = $('<div>', { id: 'lightboxBg' }).appendTo('body');

$('.zoomImg').on('click', function() {
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
