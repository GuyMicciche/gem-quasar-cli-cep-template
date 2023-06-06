console.log('Host is online');

var PHXS = {
    alert: function(message)
    {
        alert("This message comes from " + app.name + ": " + message.toString());
    }    
}


function passData(passedData)
{
    alert(passedData);
    return passedData;
}