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
        $('.cancel-edit, .update-edited, .reset-edit, .update-org').toggleClass('d-none');
        $('form').removeClass('in-display-mode').addClass('in-edit-mode');
        fillForm('edit');
    });
    $('.cancel-edit, .update-edited').on('click', function(){
        $('.cancel-edit, .update-edited, .reset-edit, .update-org').toggleClass('d-none');
        $('.edit-info').toggleClass('d-none');
        $('form').removeClass('in-edit-mode').addClass('in-display-mode');
        fillForm('display');
    });
    $('input[name="workingNoworkingRadio"]').on('change', function(){
        $('.only-if-working').removeClass('working notworking').addClass($('input[name="workingNoworkingRadio"]:checked').val())
    });
    $('.reset-edit').on('click', function(){
        $('.professional-form input').val('');
    });
    $(document).on('click','.professional-history-block .chip .closebtn', function(e){
        e.stopPropagation();
        if($(this).parent().hasClass('active')){
            $('.addEdit-organization-block').removeClass('existing-chip');
        }
        $(this).parent().remove();
        if($('.organization-chips-block .chip').length < 1){
            $('.addEdit-organization-block').hide();
        }
    });
    $('.add-org-btn').on('click', function(){
        $('.addEdit-organization-block').toggle().removeClass('existing-chip');
        $('.addEdit-organization-block input').val('');
        $('.organization-chips-block .chip').removeClass('active');
    });
    $(document).on('click','.professional-history-block .chip', function(){
        $('.addEdit-organization-block').show();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.addEdit-organization-block input[id="Organisationname"]').val($(this).find('.org-name').text());
        $('.addEdit-organization-block').addClass('existing-chip');
    });
    $('.update-org').on('click', function(){
        if($(this).closest('.addEdit-organization-block').hasClass('existing-chip')){
            $('.organization-chips-block .chip.active .org-name').text($('.addEdit-organization-block input[id="Organisationname"]').val());
        }else{
            $('.add-org-chip').before('<div class="chip mb-2 mt-2 mr-3 active"><span class="org-name">'+ $('.addEdit-organization-block input[id="Organisationname"]').val() +'</span><i class="fa fa-times closebtn"></i></div>')
            $('.addEdit-organization-block').addClass('existing-chip');
        }
    });
    $('.progress-bar').on('click', function(){
        $('.card-header a[data-step="'+ $(this).data('step') +'-done"]').click();
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