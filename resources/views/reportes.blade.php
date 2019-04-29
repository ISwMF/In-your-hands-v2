<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="_token" content="{{csrf_token()}}" />
    <title>Reportes</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="http://code.jquery.com/jquery-3.3.1.min.js"
             integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
             crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="{{asset('js/ajax.js')}}"></script>
  </head>
  <body onload="getEventsCreated({{Session::get('id')}}), getEventsReceived({{Session::get('id')}})" style="background-color:rgba(0,0,250,0.08)">
    <div class="container">
      <div class="page-header" style=" border-radius: 10px; background: -moz-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,0.1) 86%, rgba(0,0,0,0) 100%);">
        <br>
        <h1 style="margin-left: 70px;">EN SUS MANOS</h1>
        <p style="margin-left: 70px;">Sistema de eventos orientado a la ética ciudadana.</p>
      </div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Menu Principal</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a href="/home">INICIO</a></li>
            @if(Session::has('name'))
              <li><a href="#">PERFIL</a></li>
              <li class="active"><a href="/reportes">REPORTES</a></li>
              <li><a href="#">SOBRE</a></li>
            @endif
            <li><a href="/busqueda">BUSQUEDA</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            @if(Session::has('name'))
            <li><a href="/logout"><span class="glyphicon glyphicon glyphicon-log-out"></span> Logout</a></li>
            @else
            <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            @endif
          </ul>
        </div>
      </nav>
      <div class="">
        <br>
        <h2 style="margin-left:20px; background: -moz-linear-gradient(bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 86%, rgba(0,0,0,0) 100%); border-radius:5px">A continuación se listan todos los reportes relacionados a ti.</h2>
        <br>
      </div>
      <h4 >Reportes hechos por ti.</h4>
      <div class="" id="reportesHechos">

      </div>
      <h4>Reportes que te han realizado.</h4>
      <div class="" id="reportesRecibidos">

      </div>
      <footer>
        <br><br>
        <div class="row" style=" border-radius: 10px;">
          <div class="col-sm-4" style="background: -moz-linear-gradient(bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.1) 86%, rgba(0,0,0,0) 100%); border-top:2px solid rgba(255,255,255,0.1); border-radius:10px">
            <p>Copyright</p>
            <p>En sus manos @ 2019</p>
            <p>Todos los derechos reservados</p>
          </div>
          <div class="col-sm-4" style="background: -moz-linear-gradient(bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.1) 86%, rgba(0,0,0,0) 100%); border-top:2px solid rgba(255,255,255,0.3); border-radius:10px">
            <p><b>Organización:</b> Corporación Universitaria Minuto de Dios</p>
            <p><b>Directora:</b> Nataly Melo</p>
            <p><b>Ejecutor:</b> Fabian Miranda</p>
          </div>
          <div class="col-sm-4" style="background: -moz-linear-gradient(bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.1) 86%, rgba(0,0,0,0) 100%); border-top:2px solid rgba(255,255,255,0.3); border-radius:10px">
            <p><b>Contactanos:</b></p>
            <p>Celular: 320 8166386</p>
            <p>Email: fmirandacor@gmail.com</p>
          </div>
        </div>
      </footer>
  </body>
</html>
