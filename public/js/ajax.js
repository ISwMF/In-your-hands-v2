function login() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });
    $.ajax({
        url: "http://localhost:8000/api/login",
        type: 'post',
        data: {
            user: $('#user').val(),
            password: $('#password').val()
        },
        success: function(result) {
            result = JSON.parse(result);
            if (result.message == "Hecho") {
                resendDataLogin(result.user);
            } else {
                $('#resultado').show();
                $('#resultado').html(result.message);
            }
        }
    });
}

function getTop10Users() {
    $('#tabla').show();
    $.ajax({
        url: "http://localhost:8000/api/users/top10",
        type: 'get',
        success: function(result) {
            result = JSON.parse(result);
            $("#tabla").append('<h3 align = "center" style="color:white; background-color:rgba(0,0,255,0.5); text-align:center; border-radius:5px">Nuestro top 10.</h3>');
            $("#tabla").append('<br>');
            $("#tabla").append('<table class="table table-striped" id="tableR">');
            $("#tableR").append('<thead id="table_head">');
            $("#table_head").append('<tr id="table_titles">');
            $("#table_titles").append('<th>Nombre</th>');
            $("#table_titles").append('<th>Puntos</th>');
            $("#table_head").append('</tr>');
            $("#tableR").append('</thead>');
            $("#tableR").append('<tbody id="table_body">');
            for (var i = 0; i < result.length; i++) {
                $("#table_body").append('<tr id="table_row_' + i + '">');
                $("#table_row_" + i).append('<td>' + result[i].user_name + '</td>');
                $("#table_row_" + i).append('<td>' + result[i].user_points + '</td>');
                $("#table_body").append('</tr>');
            }
            $("#tableR").append('</tbody>');
            $("#tabla").append('</table>');
            $("#tableR").css('background-color', 'rgba(0,0,250,0.05)');
            $("#tableR").css('border-radius', '5px');
        }
    });
}

function resendDataLogin() {
    $.ajax({
        url: '/postLoginRequestByAjax',
        type: 'get',
        data: {
            user: arguments[0]
        },
        success: function(result) {
            if (result.success == "exitoso") {
                window.location = "/home";
            } else {
                $('#resultado').html(data.success);
            }
        }
    });
}

function getUser() {
    var id = arguments[0];
    var isnum = /^\d+$/.test(id);
    if (isnum) {
        $.ajax({
            url: "http://localhost:8000/api/user/" + id,
            type: 'get',
            success: function(result) {
                result = JSON.parse(result);
                if (result.length == 0) {
                    $('#SearchingResult').remove();
                    $('#bodysearch').append('<div id="SearchingResult"></div>');
                    $('#SearchingResult').append('<h4 style="text-align:center ">El usuario no existe</h4>');
                    $('#SearchingResult').css('border', '1px solid rgba(0,0,0,0.3)');
                    $('#SearchingResult').css('border-radius', '5px');
                    $('#SearchingResult').css('background-color', 'rgba(0,0,250,0.1)');
                } else {
                    $('#SearchingResult').remove();
                    $('#bodysearch').append('<div id="SearchingResult"></div>');
                    var user = result;
                    user = user[0];
                    $('#SearchingResult').append(
                        '<br>' +
                        '<div class="row">' +
                        '<div class="col-sm-6" id="UserResult">' +
                        '<div class="panel panel-default">' +
                        '<div class="panel-body">' +
                        '<div class="row" id="targetuser">' +
                        '<div class="col-sm-4">' +
                        '<img src="imagenes/default-user.png" alt="Default user" width="150" height="150">' +
                        '</div>' +
                        '<div class="col-sm-8">' +
                        '<table class="table table-striped">' +
                        '<tbody>' +
                        '<tr>' +
                        '<td><b>ID</b></td>' +
                        '<td>' + user.id + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td><b>Nombre</b></td>' +
                        '<td>' + user.user_name + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td><b>Usuario</b></td>' +
                        '<td>' + user.user_login + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td><b>Puntos</b></td>' +
                        '<td>' + user.user_points + '</td>' +
                        '</tr>' +
                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<p style="text-align:center"><b>Click sobre el recuadro para ver sus reportes</b></p>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div id="eventsbycitizen"></div>'
                    );
                    $('#targetuser').css('background-color', 'rgba(0,0,250,0.05)');
                    $('#UserResult').css('cursor', 'pointer');
                    $('#UserResult').click(function() {
                        $('#eventsbycitizen').remove();
                        $('#SearchingResult').append('<div id="eventsbycitizen"></div>');
                        getEventsById(user.id);
                    });
                }
            }
        });

    } else {
        $('#SearchingResult').remove();
        $('#bodysearch').append('<div id="SearchingResult"></div>');
        $('#SearchingResult').append('<h4 style="text-align:center ">El usuario no existe</h4>');
        $('#SearchingResult').css('border', '1px solid rgba(0,0,0,0.3)');
        $('#SearchingResult').css('border-radius', '5px');
    }
}

function getEventsById() {
    $.ajax({
        url: "http://localhost:8000/api/users/" + arguments[0] + "/eventscreated",
        type: 'get',
        success: function(result) {
            var events = JSON.parse(result);
            if (events.length == 0) {
                $('#eventsbycitizen').append('<h4 style="text-align:center">Este usuario no tiene registros asociados a su id, ¿quiere ser el primero en afectar su moral?</h4><br><br>');
                $("html, body").animate({
                    scrollTop: $(document).height()
                }, 1000);
            } else {
                for (var i = 0; i < events.length; i++) {
                    $('#eventsbycitizen').append('<div id="event_' + i + '"></div><br><br>');
                    $('#event_' + i).append(
                        '<div class="row">' +
                        '<div class="col-sm-1" id="event_number_' + i + '">' +
                        '<h3 style="text-align:center">#' + (i + 1) + '</h3>' +
                        '</div>' +
                        '<div class="col-sm-11">' +
                        '<table class="table table-striped">' +
                        '<tbody>' +
                        '<tr>' +
                        '<td style="width:200px"> <b>Fecha</b> </td>' +
                        '<td>' + events[i].event_date + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td style="width:200px"> <b>Lugar</b> </td>' +
                        '<td>' + events[i].event_place + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td style="width:200px"> <b>Situación</b> </td>' +
                        '<td>' + events[i].event_situation + '</td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td style="width:200px"> <b>Descripción</b> </td>' +
                        '<td>' + events[i].event_description + '</td>' +
                        '</tr>' +
                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>'
                    );
                    $('#event_' + i).css('border-bottom', '1px solid rgba(0,0,0,0.3)');
                    $('#event_' + i).css('background-color', 'rgba(0,0,250,0.05)');
                }
            }
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 1000);
        }
    });
}

function getLastEventsReceived() {
    $.ajax({
        url: "http://localhost:8000/api/users/" + arguments[0] + "/eventsreceived",
        type: 'get',
        success: function(result) {
            result = JSON.parse(result);
            if (result[0] == null) {
                $('#panel_body_2').append('<div class="panel panel-default" id="panel_default_event_received">');
                $('#panel_default_event_received').append('<div class="panel-body" id="panel_body_event_received">');
                $('#panel_body_event_received').append('<p>Aún no tienes eventos registrados.</p>');
                $('#panel_default_event_received').append('</div>');
                $('#panel_body_2').append('</div>');
                $('#panel_body_2').css('background-color', 'rgba(0,0,250,0.2)');
                $('#panel_default_event_received').css('background-color', 'rgba(0,250,0,0.1)');
            } else {
                if (result.length <= 3) {
                    for (var i = 0; i < result.length; i++) {
                        $('#panel_body_2').append('<div class="panel panel-default" id="panel_default_event_received_' + i + '">');
                        $('#panel_default_event_received_' + i).append('<div class="panel-body" id="panel_body_event_received_' + i + '">');
                        $('#panel_default_event_received_' + i).css('background-color', 'rgba(0,250,0,0.2)');
                        $('#panel_body_event_received_' + i).append('<div class="row" id="row_event_received_' + i + '">');
                        $('#row_event_received_' + i).append('<div class="col-sm-9" id="col_received_a_' + i + '">');
                        $('#col_received_a_' + i).append('<p>Situación: ' + result[0].event_situation + '</p>');
                        $('#col_received_a_' + i).append('<p>Fecha: ' + result[0].event_date + ' </p>');
                        $('#row_event_received_' + i).append('</div>');
                        $('#row_event_received_' + i).append('<div class="col-sm-3" id="col_received_b_' + i + '">');
                        $('#col_received_b_' + i).append('<button type="button" name="button" class="btn btn-primary btn-sm btn-block">Ver reporte</button>');
                        $('#row_event_received_' + i).append('</div>');
                        $('#panel_body_event_received_' + i).append('</div>');
                        $('#panel_default_event_received_' + i).append('</div>');
                        $('#panel_body_2').append('</div>');
                    }
                    $('#panel_body_2').append('<button type="button" name="button" class="btn btn-success btn-sm btn-block" onclick="window.location=\'/reportes\';">Ver todos</button>');
                    $('#panel_body_2').css('background-color', 'rgba(0,0,250,0.2)');

                } else {
                    for (var i = 0; i < 3; i++) {
                        $('#panel_body_2').append('<div class="panel panel-default" id="panel_default_event_received_' + i + '">');
                        $('#panel_default_event_received_' + i).append('<div class="panel-body" id="panel_body_event_received_' + i + '">');
                        $('#panel_default_event_received_' + i).css('background-color', 'rgba(0,250,0,0.2)');
                        $('#panel_body_event_received_' + i).append('<div class="row" id="row_event_received_' + i + '">');
                        $('#row_event_received_' + i).append('<div class="col-sm-9" id="col_received_a_' + i + '">');
                        $('#col_received_a_' + i).append('<p>Situación: ' + result[0].event_situation + '</p>');
                        $('#col_received_a_' + i).append('<p>Fecha: ' + result[0].event_date + ' </p>');
                        $('#row_event_received_' + i).append('</div>');
                        $('#row_event_received_' + i).append('<div class="col-sm-3" id="col_received_b_' + i + '">');
                        $('#col_received_b_' + i).append('<button type="button" name="button" class="btn btn-primary btn-sm btn-block">Ver reporte</button>');
                        $('#row_event_received_' + i).append('</div>');
                        $('#panel_body_event_received_' + i).append('</div>');
                        $('#panel_default_event_received_' + i).append('</div>');
                        $('#panel_body_2').append('</div>');
                    }
                    $('#panel_body_2').append('<button type="button" name="button" class="btn btn-success btn-sm btn-block" onclick="window.location=\'/reportes\';">Ver todos</button>');
                    $('#panel_body_2').css('background-color', 'rgba(0,0,250,0.2)');
                }
            }
        }
    });
}

function getLastEventsCreated() {
    $.ajax({
        url: "http://localhost:8000/api/users/" + arguments[0] + "/eventscreated",
        type: 'get',
        success: function(result) {
            result = JSON.parse(result);
            if (result[0] == null) {
                $('#panel_body').append('<div class="panel panel-default" id="panel_default_event_created">');
                $('#panel_default_event_created').append('<div class="panel-body" id="panel_body_event_created">');
                $('#panel_body_event_created').append('<p>Aún no tienes eventos registrados.</p>');
                $('#panel_default_event_created').append('</div>');
                $('#panel_body').append('</div>');
                $('#panel_body').css('background-color', 'rgba(0,0,250,0.2)');
                $('#panel_default_event_created').css('background', 'white');
                $('#panel_default_event_created').css('background-color', 'rgba(0,250,0,0.1)');
            } else {
                if (result.length <= 3) {
                    for (var i = 0; i < result.length; i++) {
                        $('#panel_body').append('<div class="panel panel-default" id="panel_default_event_created_' + i + '">');
                        $('#panel_default_event_created_' + i).append('<div class="panel-body" id="panel_body_event_created_' + i + '">');
                        $('#panel_default_event_created_' + i).css('background-color', 'rgba(0,250,0,0.2)');
                        $('#panel_body_event_created_' + i).append('<div class="row" id="row_event_created_' + i + '">');
                        $('#row_event_created_' + i).append('<div class="col-sm-9" id="col_created_a_' + i + '">');
                        $('#col_created_a_' + i).append('<p>Situación: ' + result[i].event_situation + '</p>');
                        $('#col_created_a_' + i).append('<p>Fecha: ' + result[i].event_date + ' </p>');
                        $('#row_event_created_' + i).append('</div>');
                        $('#row_event_created_' + i).append('<div class="col-sm-3" id="col_created_b_' + i + '">');
                        $('#col_created_b_' + i).append('<button type="button" name="button" class="btn btn-primary btn-sm btn-block">Ver reporte</button>');
                        $('#row_event_created_' + i).append('</div>');
                        $('#panel_body_event_created_' + i).append('</div>');
                        $('#panel_default_event_created_' + i).append('</div>');
                        $('#panel_body').append('</div>');

                    }
                    $('#panel_body').append('<button type="button" name="button" class="btn btn-success btn-sm btn-block" onclick="window.location=\'/reportes\';">Ver todos</button>');
                    $('#panel_body').css('background-color', 'rgba(0,0,250,0.2)');
                } else {
                    for (var i = 0; i < 3; i++) {
                        $('#panel_body').append('<div class="panel panel-default" id="panel_default_event_created_' + i + '">');
                        $('#panel_default_event_created_' + i).append('<div class="panel-body" id="panel_body_event_created_' + i + '">');
                        $('#panel_default_event_created_' + i).css('background-color', 'rgba(0,250,0,0.2)');
                        $('#panel_body_event_created_' + i).append('<div class="row" id="row_event_created_' + i + '">');
                        $('#row_event_created_' + i).append('<div class="col-sm-9" id="col_created_a_' + i + '">');
                        $('#col_created_a_' + i).append('<p>Situación: ' + result[i].event_situation + '</p>');
                        $('#col_created_a_' + i).append('<p>Fecha: ' + result[i].event_date + ' </p>');
                        $('#row_event_created_' + i).append('</div>');
                        $('#row_event_created_' + i).append('<div class="col-sm-3" id="col_created_b_' + i + '">');
                        $('#col_created_b_' + i).append('<button type="button" name="button" class="btn btn-primary btn-sm btn-block">Ver reporte</button>');
                        $('#row_event_created_' + i).append('</div>');
                        $('#panel_body_event_created_' + i).append('</div>');
                        $('#panel_default_event_created_' + i).append('</div>');
                        $('#panel_body').append('</div>');

                    }
                    $('#panel_body').append('<button type="button" name="button" class="btn btn-success btn-sm btn-block" onclick="window.location=\'/reportes\';">Ver todos</button>');
                    $('#panel_body').css('background-color', 'rgba(0,0,250,0.2)');
                }
            }
        }
    });
}

function getEventsCreated() {
    $.ajax({
        url: "http://localhost:8000/api/users/" + arguments[0] + "/eventscreated",
        type: 'get',
        success: function(result) {
            result = JSON.parse(result);
            if (result.length == 0) {
                $('#reportesHechos').append('<h4 style="text-align:center">Podrías poner aquí la persona que te cae mal, ¡comienza a reportar!</h4><br><br>')
            } else {
                $('#reportesHechos').append('<div class="panel-group" id="panel_reportes_hechos"></panel>');
                for (var i = 0; i < result.length; i++) {
                    $('#panel_reportes_hechos').append(
                        '<div class="panel panel-default">' +
                        '<div class="panel-heading">' +
                        '<h4 class="panel-title">' +
                        '<a data-toggle="collapse" href="#reporte_hecho_numero_' + i + '">Registro #' + result[i].id + '</a>' +
                        '</h4>' +
                        '</div>' +
                        '<div id="reporte_hecho_numero_' + i + '" class="panel-collapse collapse">' +
                        '<div class="panel-body">' +
                        '<p><b>Fecha:</b> ' + result[i].event_date + '</p>' +
                        '<p><b>Lugar:</b> ' + result[i].event_place + '</p>' +
                        '<p><b>Situación:</b> ' + result[i].event_situation + '</p>' +
                        '<p><b>Descripción:</b> ' + result[i].event_description + '</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    );
                    $('#reporte_hecho_numero_' + i).css('background-color', 'rgba(0, 0, 255, 0.15)');
                }

            }

        }
    });
}

function getEventsReceived() {
    $.ajax({
        url: "http://localhost:8000/api/users/" + arguments[0] + "/eventsreceived",
        type: 'get',
        success: function(result) {
            result = JSON.parse(result);
            if (result.length == 0) {
                $('#reportesRecibidos').append('<h4 style="text-align:center">No tienes eventos, ¡sal a la calle y consigue algunos!</h4><br><br>')
            } else {
                $('#reportesRecibidos').append('<div class="panel-group" id="panel_reportes_recibidos"></panel>');
                for (var i = 0; i < result.length; i++) {
                    $('#panel_reportes_recibidos').append(
                        '<div class="panel panel-default">' +
                        '<div class="panel-heading">' +
                        '<h4 class="panel-title">' +
                        '<a data-toggle="collapse" href="#reporte_recibido_numero_' + i + '">Registro #' + result[i].id + '</a>' +
                        '</h4>' +
                        '</div>' +
                        '<div id="reporte_recibido_numero_' + i + '" class="panel-collapse collapse">' +
                        '<div class="panel-body">' +
                        '<p><b>Fecha:</b> ' + result[i].event_date + '</p>' +
                        '<p><b>Lugar:</b> ' + result[i].event_place + '</p>' +
                        '<p><b>Situación:</b> ' + result[i].event_situation + '</p>' +
                        '<p><b>Descripción:</b> ' + result[i].event_description + '</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    );

                    $('#reporte_recibido_numero_' + i).css('background-color', 'rgba(0, 0, 255, 0.15)');
                }
            }
        }
    });
}
