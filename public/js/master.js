$(document).ready(function() {
    // $(".dropdown-button").dropdown();

    $('select').formSelect();
    $('.button-collapse').sidenav();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.modal').modal();
});

function deleteRegister(idForm) {
    $('#'+idForm).submit();
}