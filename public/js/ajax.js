function login(){
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
     success: function(result){
       result = JSON.parse(result);
       if (result.message == "Hecho") {
         resendDataLogin(result.user);
       }else{
         $('#resultado').show();
         $('#resultado').html(result.message);
       }
     }});
}

function getTop10Users(){
  $('#tabla').show();
  $.ajax({
    url:"http://localhost:8000/api/users/top10",
    type: 'get',
    success: function(result){
      result = JSON.parse(result);
      $("#tabla").append('<h3 align = "center">Nuestro top 10.</h3>');
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
        $("#table_body").append('<tr id="table_row_'+i+'">');
        $("#table_row_"+ i).append('<td>' + result[i].user_name + '</td>');
        $("#table_row_"+ i).append('<td>' + result[i].user_points + '</td>');
        $("#table_body").append('</tr>');
      }
      $("#tableR").append('</tbody>');
      $("#tabla").append('</table>');
    }
  });
}

function resendDataLogin(){
  $.ajax({
    url:'/postLoginRequestByAjax',
    type: 'get',
    data: {
      user: arguments[0]
    },
    success: function(result){
      if (result.success == "exitoso") {
         window.location = "/home";
       }else{
         $('#resultado').html(data.success);
       }
    }
  });
}

function getUser(){
  $.ajax({
    url:"http://localhost:8000/api/user/" + arguments[0],
    type: 'get',
    success: function(result){
      result = JSON.parse(result);
      alert(result);
    }
  });
}

function getLastEventsReceived(){
  $.ajax({
    url:"http://localhost:8000/api/users/"+arguments[0]+"/eventsreceived",
    type: 'get',
    success: function(result){
      result = JSON.parse(result);
      if (result[0] == null) {
        $('#panel_body_2').append('<div class="panel panel-default" id="panel_default_event_received">');
        $('#panel_default_event_received').append('<div class="panel-body" id="panel_body_event_received">');
        $('#panel_body_event_received').append('<p>Aún no tienes eventos registrados.</p>');
        $('#panel_default_event_received').append('</div>');
        $('#panel_body_2').append('</div>');
      }else{
        if (result.length <=3) {
          for (var i = 0; i < result.length; i++) {
            $('#panel_body_2').append('<div class="panel panel-default" id="panel_default_event_received_'+i+'">');
            $('#panel_default_event_received_'+i).append('<div class="panel-body" id="panel_body_event_received_'+i+'">');
            $('#panel_body_event_received_'+i).append('<div class="row" id="row_event_received_'+i+'">');
            $('#row_event_received_'+i).append('<div class="col-sm-9" id="col_received_a_'+ i +'">');
            $('#col_received_a_'+i).append('<p>Situación: ' + result[0].event_situation + '</p>');
            $('#col_received_a_'+i).append('<p>Fecha: '+ result[0].event_date +' </p>');
            $('#row_event_received_'+i).append('</div>');
            $('#row_event_received_'+i).append('<div class="col-sm-3" id="col_received_b_'+ i +'">');
            $('#col_received_b_'+ i).append('<button type="button" name="button" class="btn btn-primary btn-sm btn-block">Ver reporte</button>');
            $('#row_event_received_'+i).append('</div>');
            $('#panel_body_event_received_'+i).append('</div>');
            $('#panel_default_event_received_'+i).append('</div>');
            $('#panel_body_2').append('</div>');
            $('#panel_body_2').append('<button type="button" name="button" class="btn btn-success btn-sm btn-block">Ver todos</button>');
          }
        }else{
          for (var i = 0; i < 3; i++) {
            $('#panel_body_2').append('<div class="panel panel-default" id="panel_default_received_'+i+'">');
            $('#panel_default_received_'+i).append('<div class="panel-body" id="panel_body_event_received_'+i+'">');
            $('#panel_body_event_received_'+i).append('<div class="row" id="row_event_received_'+i+'">');
            $('#row_event_received_'+i).append('<div class="col-sm-9" id="col_received_a_'+ i +'">');
            $('#col_received_a_'+i).append('<p>Situación: ' + result[0].event_situation + '. Fecha: '+ result[0].event_date +' </p>');
            $('#row_event_received_'+i).append('</div>');
            $('#row_event_received_'+i).append('<div class="col-sm-3" id="col_received_b_'+ i +'">');
            $('#col_received_b_'+ i).append('<button type="button" name="button" class="btn btn-primary btn-sm btn-block">Ver reporte</button>');
            $('#row_event_received_'+i).append('</div>');
            $('#panel_body_event_received_'+i).append('</div>');
            $('#panel_default_event_received_'+i).append('</div>');
            $('#panel_body_2').append('</div>');
          }
        }
      }
    }
  });
}

function getLastEventsCreated(){
  $.ajax({
    url:"http://localhost:8000/api/users/"+arguments[0]+"/eventscreated",
    type: 'get',
    success: function(result){
      result = JSON.parse(result);
      if (result[0] == null) {
        $('#panel_body').append('<div class="panel panel-default" id="panel_default_event_created">');
        $('#panel_default_event_created').append('<div class="panel-body" id="panel_body_event_created">');
        $('#panel_body_event_created').append('<p>Aún no tienes eventos registrados.</p>');
        $('#panel_default_event_created').append('</div>');
        $('#panel_body').append('</div>');
      }else{
        if (result.length <=3) {
          for (var i = 0; i < result.length; i++) {
            $('#panel_body').append('<div class="panel panel-default" id="panel_default_event_created_'+i+'">');
            $('#panel_default_event_created_'+i).append('<div class="panel-body" id="panel_body_event_created_'+i+'">');
            $('#panel_body_event_created_'+i).append('<div class="row" id="row_event_created_'+i+'">');
            $('#row_event_created_'+i).append('<div class="col-sm-9" id="col_created_a_'+ i +'">');
            $('#col_created_a_'+i).append('<p>Situación: ' + result[0].event_situation + '</p>');
            $('#col_created_a_'+i).append('<p>Fecha: '+ result[0].event_date +' </p>');
            $('#row_event_created_'+i).append('</div>');
            $('#row_event_created_'+i).append('<div class="col-sm-3" id="col_created_b_'+ i +'">');
            $('#col_created_b_'+ i).append('<button type="button" name="button" class="btn btn-primary btn-sm btn-block">Ver reporte</button>');
            $('#row_event_created_'+i).append('</div>');
            $('#panel_body_event_created_'+i).append('</div>');
            $('#panel_default_event_created_'+i).append('</div>');
            $('#panel_body').append('</div>');
            $('#panel_body').append('<button type="button" name="button" class="btn btn-success btn-sm btn-block">Ver todos</button>');
          }
        }else{
          for (var i = 0; i < 3; i++) {
            $('#panel_body').append('<div class="panel panel-default" id="panel_default_event_'+i+'">');
            $('#panel_default_event'+i).append('<div class="panel-body" id="panel_body_event_'+i+'">');
            $('#panel_body_event_'+i).append('<div class="row" id="row_event_'+i+'">');
            $('#row_event_'+i).append('<div class="col-sm-9" id="col_a_'+ i +'">');
            $('#col_a_'+i).append('<p>Situación: ' + result[0].event_situation + '. Fecha: '+ result[0].event_date +' </p>');
            $('#row_event_'+i).append('</div>');
            $('#row_event_'+i).append('<div class="col-sm-3" id="col_b_'+ i +'">');
            $('#col_b_'+ i).append('<button type="button" name="button" class="btn btn-primary btn-sm btn-block">Ver reporte</button>');
            $('#row_event_'+i).append('</div>');
            $('#panel_body_event_'+i).append('</div>');
            $('#panel_default_event'+i).append('</div>');
            $('#panel_body').append('</div>');
          }
        }
      }
    }
  });
}
