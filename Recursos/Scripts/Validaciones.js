

$( document ).ready(function() {
    obtenerDatos()
});

function obtenerDatos() {
    $.ajax('https://62b3a4a4a36f3a973d24f1bb.mockapi.io/informacion', {
        type: 'GET',  
        success: function (data, status, xhr) {
            for (var indice = 0; indice < data.length; indice++) {
                var name = data[indice].name
                var number = data[indice].number
                var city = data[indice].city
                var filaTAbla = '<tr>'
                                + '<td class="prc-25">'+name+'</td>'
                                +  '<td class="prc-25">'+number+'</td>'
                                +   '<td class="prc-25">'+city+'</td>'
                                +  
                                '</tr>'
                console.log(filaTAbla)
                $("#api").append(filaTAbla)

            }
        },
        error: function (jqXhr, textStatus, errorMessage) {
            alert("No me pude conectar a la api: error"+errorMessage+" estado:"+textStatus  )
        }
    });
}




