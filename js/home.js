var OPEN_IMAGE = 'open-image';

$('.psuedo-btn').click(function(e) {
    e.preventDefault();
    var type = $(this).data('type');
    
    // for team images
    if (type === 'team') {
        var target = $(this).data('target');
        $('#black-overlay').fadeIn();
        $('#' + target + '-img').fadeIn();
        sessionStorage.setItem(OPEN_IMAGE, target);
    }

    // for events
    if (type === 'event') {
        var target = $(this).data('target');
        window.open(target);
    }
})

$('#black-overlay').click(function(e) {
    e.preventDefault();
    var target = sessionStorage.getItem(OPEN_IMAGE);
    $('#black-overlay').fadeOut();
    $('#' + target + '-img').fadeOut();
    sessionStorage.removeItem(OPEN_IMAGE);
})