$(document).ready(function(){
    $("#btn-request-invitation").click(function(){
        var fullName = $("#fullName").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var guestNumber = $("#guestNumber").val();
        var comments = $("#comments").val();

        if(fullName == "" || phone == "" || guestNumber == ""){
            $("#error-validation")
                .html("Complete los campos requeridos (*)")
                .fadeIn()
                .delay(2500)
                .fadeOut();
            return; 
        }

        $.ajax({
            url: $("#form-guest").attr("action"), 
            method: "post", 
            data: { fullName, phone, email, guestNumber, comments }, 
            success: function(data){
                console.log("OKS :D"); 
                console.log(data); 

                $("#fullName").val("");
                $("#phone").val("");
                $("#email").val("");
                $("#guestNumber").val("");
                $("#comments").val("");

                $("#btn-request-invitation")
                    .html("<i class='fa fa-check'></i> ¡Hecho!")
                    .css({ "background-color" : "rgb(59, 198, 55)" });
                $("#btn-request-invitation").off("click"); 
            }, 
            error: function(e){
                console.error("Falló D:"); 
                console.error(e); 
            }
        });
    });
});
