<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="_token" content="{{csrf_token()}}" />
        <title>Login</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
        <script src="http://code.jquery.com/jquery-3.3.1.min.js"
                 integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                 crossorigin="anonymous">
        </script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="{{asset('js/ajax.js')}}"></script>
    </head>
    <body>
      <div class="container">
        <div class="page-header">
          <h1>EN SUS MANOS</h1>
          <p>Sistema de eventos orientado a la ética ciudadana.</p>
        </div>
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="row">
                  <div class="col-sm-6">
                    <p>Entrar</p>
                  </div>
                  <div class="col-sm-6">
                    <button type="button" class="btn btn-primary btn-block">Registrarse</button>
                  </div>
                </div>
                <br>
                <div class="form-group">
                  <label for="user">Usuario:</label>
                  <input type="text" class="form-control" id="user">
                </div>
                <div class="form-group">
                  <label for="password">Contraseña:</label>
                  <input type="password" class="form-control" id="password">
                </div>
                <button class="btn btn-primary" onclick="login()">Entrar</button>
                <br>
                <div class="checkbox">
                  <label><input type="checkbox"> Remember me</label>
                </div>
                <a href="#">Olvidaste tu contraseña?</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4" id="resultado"></div>
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
