$(document).ready(function(){
    fillForm('display');

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
    $('.edit-info').on('click', function(){
        $(this).toggleClass('d-none');
        $('.cancel-edit, .update-edited, .reset-edit').toggleClass('d-none');
        $('form').removeClass('in-display-mode').addClass('in-edit-mode');
        fillForm('edit');
    });
    $('.cancel-edit, .update-edited').on('click', function(){
        $('.cancel-edit, .update-edited, .reset-edit').toggleClass('d-none');
        $('.edit-info').toggleClass('d-none');
        $('form').removeClass('in-edit-mode').addClass('in-display-mode');
        fillForm('display');
    });
    $('input[name="workingNoworkingRadio"]').on('change', function(){
        $('.only-if-working').removeClass('working notworking').addClass($('input[name="workingNoworkingRadio"]:checked').val())
    });
    function fillForm(mode){
        $('form input').each(function(){
            if(mode === 'edit'){
                if($(this).val().length < 1 || $(this).val() === "-" || $(this).val() === " " || $(this).val() === ""){
                    $(this).val('');
                }
            }else{
                if($(this).val().length < 1){
                    $(this).val('-');
                }
            }
        });
    }
});