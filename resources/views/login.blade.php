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
    <body style="background-color:rgba(0,0,250,0.08)">
      <div class="container">
        <div class="page-header" style="background: -moz-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,0.1) 86%, rgba(0,0,0,0) 100%); border-radius: 10px;">
          <br>
          <h1 style="margin-left: 70px;">EN SUS MANOS</h1>
          <p style="margin-left: 70px;">Sistema de eventos orientado a la ética ciudadana.</p>
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
      </div>
    </body>
</html>
