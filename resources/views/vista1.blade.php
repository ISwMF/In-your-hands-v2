<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="_token" content="{{csrf_token()}}" />
    <title>Home</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="http://code.jquery.com/jquery-3.3.1.min.js"
             integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
             crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="{{asset('js/ajax.js')}}"></script>
  </head>
  <body onload="getTop10Users()">
    <div class="container" >
      <div class="page-header">
        <h1>EN SUS MANOS</h1>
        <p>Sistema de eventos orientado a la ética ciudadana.</p>
      </div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Menu Principal</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">INICIO</a></li>
            @if(Session::has('name'))
              <li><a href="#">PERFIL</a></li>
              <li><a href="#">REPORTES</a></li>
              <li><a href="#">SOBRE</a></li>
            @endif
            <li><a href="/busqueda">BUSQUEDA</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            @if(Session::has('name'))
            <li><a href="#"><span class="glyphicon glyphicon glyphicon-log-out"></span> Logout</a></li>
            @else
            <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            @endif
          </ul>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <h2>Bienvenid@ {{Session::get('name')}} !
            </h2>
            <h4></h4>
          </div>
        </div>
        <div class="row">
          @if(Session::has('name'))
          <script type="text/javascript">
            getLastEventsCreated({{Session::get('id')}});
            getLastEventsReceived({{Session::get('id')}});
          </script>
          <div class="col-sm-8">
            <div class="row">
              <div class="col-sm-12">
                <div class="panel panel-default">
                  <div class="panel-heading">Últimos reportes que realizaste</div>
                  <div class="panel-body" id="panel_body">
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="panel panel-default">
                  <div class="panel-heading">Últimos reportes que te realizaron</div>
                  <div class="panel-body" id="panel_body_2">
                  </div>
                </div>
              </div>
            </div>
          </div>
          @else
          <div class="col-sm-8">
            <h3>Inicia sesión para ver tus reportes y quién te reportó</h3>
          </div>
          @endif
          <div class="col-sm-4">
            <div class="" id="tabla" >
            </div>
            <br>
            <h3>Redes sociales</h3>
            <br>
            <div class="row">
              <div class="col-sm-4">
                <img src="imagenes/fb_icon_325x325.png" alt="Facebook Icon" width="80" height="80">
              </div>
              <div class="col-sm-4">
                <img src="imagenes/twitter-logo-blue.png" alt="Twitter Icon" width="80" height="80">
              </div>
              <div class="col-sm-4">
                <img src="imagenes/instagram-logo-color-512.png" alt="Instagram Icon" width="80" height="80">
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <footer>
        <br><br>
        <div class="row">
          <div class="col-sm-4">
            <p>Copyright</p>
            <p>En sus manos @ 2019</p>
            <p>Todos los derechos reservados</p>
          </div>
          <div class="col-sm-4">
            <p><b>Organización:</b> Corporación Universitaria Minuto de Dios</p>
            <p><b>Directora:</b> Nataly Melo</p>
            <p><b>Ejecutor:</b> Fabian Miranda</p>
          </div>
          <div class="col-sm-4">
            <p><b>Contactanos:</b></p>
            <p>Celular: 320 8166386</p>
            <p>Email: fmirandacor@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  </body>
</html>
