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
  <body>
    <div class="container" id="bodysearch">
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
            <li><a href="/home">INICIO</a></li>
            @if(Session::has('name'))
              <li><a href="#">PERFIL</a></li>
              <li><a href="#">REPORTES</a></li>
              <li><a href="#">SOBRE</a></li>
            @endif
            <li class="active"><a href="#">BUSQUEDA</a></li>
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
      <br>
      <h3>Busqueda por ID</h3>

        <div class="form-group">
          <input type="number" class="form-control" placeholder="Buscar" id="inputsearch">
        </div>
        <button type="submit" class="btn btn-default" onclick="getUser(inputsearch.value)">Buscar</button>

      <div id="SearchingResult">


      </div>
      <br><br>
    </div>
  </body>
</html>
