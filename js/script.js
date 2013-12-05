var serviceURL = 'http://184.107.213.34/~projects/demo_projects/mobile/macmobi/webservice.php?';
$( document ).ready(function() {
    $("#openstoremenu").click(function(){
        window.plugins.childBrowser.showWebPage('https://store.marantecamerica.com/index.php?main_page=index&amp;cPath=1',
                                        { showLocationBar: true });
    });
    
    $("#contactsubmit").click(function(){
        var cName = $('#textinput1').val();
        var cEmail = $('#textinput2').val();
        var cPhone = $('#textinput3').val();
        var cComment = $('#textarea1').val();
        
        if (cName != '' && cEmail != '' && cPhone != '' && cComment != '') {
                $.ajax({
                type: "POST",       
                url: serviceURL+'action=Support&name='+cName+'&email='+cEmail+'&phone='+cPhone+'&comment='+cComment,
                dataType: "jsonp",
                crossDomain: true,
                success: function(response, textStatus, jqXHR)
                {      
                    var result = JSON.stringify(response);
                    //alert(result);
                    if (response[0].msg == 'Success') {
                       // action="thankyou.html" method="get"
                       // window.location.replace("thankyou.html");
                        $.mobile.changePage('#thankyou');
                        var cName = $('#textinput1').val('');
                        var cEmail = $('#textinput2').val('');
                        var cPhone = $('#textinput3').val('');
                        var cComment = $('#textarea1').val('');
                       
                    }
                    else {
                        alert('Your mail has not Sent.')
                    }
                 
                },
                error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR+"  "+textStatus+"  "+errorThrown);
                    }
                });
        }
        else {
            alert('field vacant!');
            $.mobile.changePage('#support');
        }
    });
    
});
