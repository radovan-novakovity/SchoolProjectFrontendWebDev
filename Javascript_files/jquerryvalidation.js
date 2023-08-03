$(document).ready(function(){
    $("#jqueryForm").validate({
        rules: {
            name: "required",
            mySubject: "required",
            email: {
                required: true,
                email: true
            },
            useraccept:{
                required: true
            },
            userMessage:{
                required: true
            },
            currentCustomer:{
                required: true
            },
        },
        messages: {
            name: " Please enter a valid name!",
            mySubject: " We need to know why do you want to contact us!",
            email: " Please enter a valid email adress!",
            useraccept: " Please accept the terms of use!",
            userMessage: " Please specify your request in detail!",
            currentCustomer: "Please select Yes / No!"
        },
    });
});