$(document).ready(function(){

$('#senioridade').on('change', function () {
        var url = $(this).val(); 
        if (url) { 
            window.open(url, "_self");
        }
        return false;
    });
    });
