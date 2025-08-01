/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
$(document).ready(function(){
    $('#button-newsletter').click(function(){
        let email = $('input[type="text"]').val();
        if(email){
            alert("Thank you for subscribing, " + email + "!");
        } else {
            alert("Please enter your email address.");
        }
    });
});

