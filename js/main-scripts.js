$(document).ready(function(){
    $('#accordion .card .collapse').each(function(){
        if($(this).hasClass('show')){
            $(this).closest('.card').addClass('active-card');
        }
    });
    $(".collapse").on('show.bs.collapse', function(){
        $(this).closest('.card').addClass('active-card');
        $('.progress-block').addClass($(this).closest('.card').find('.card-header').find('a').data('step'));
    });
    $(".collapse").on('hide.bs.collapse', function(){
        $(this).closest('.card').removeClass('active-card');
    });
});