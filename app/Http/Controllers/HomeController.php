<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Login;
use App\Event;
use Session;

class HomeController extends Controller
{
  public function goLoginByAjax(Request $request){
    $input = $request->all();
    $user = User::where('user_login', $input['user'])->first();
    session(['id' => $user->id]);
    session(['name' => $user->user_name]);
    session(['login' => $user->user_login]);
    session(['points' => $user->user_points]);
    session(['created_at' => $user->created_at]);
    session(['updated_at' => $user->updated_at]);
    return response()->json(['success'=>'exitoso']);
  }

  public function goLogin(Request $request){
    $data = $request->all();
    $login = new Login;
    $login->user_name = $data["user"];
    $login->user_password = $data["password"];
    $login->save();
    //----------------------------------------
    $user = User::where('user_login', $request->user)->first();
    if (empty($user)) {
      echo "No se ha encontrado coincidencia";
    }else{
      if ($request->password == $user->user_password) {
        session(['id' => $user->id]);
        session(['name' => $user->user_name]);
        session(['login' => $user->user_login]);
        session(['points' => $user->user_points]);
        session(['created_at' => $user->created_at]);
        session(['updated_at' => $user->updated_at]);

        //--------------------
        $EventsCreated = Event::where('id_citizen_creator', $user->id)->take(3)->get();
        foreach ($EventsCreated as $EventCreated) {
          $d = $d = date_parse_from_format("Y-m-d", $EventCreated->event_date);
          switch ($d["month"]) {
            case 1:
            $EventCreated->event_date = $d["day"]. " de enero del ". $d["year"];
            break;
            case 2:
            $EventCreated->event_date = $d["day"]. " de febrero del ". $d["year"];
            break;
            case 3:
            $EventCreated->event_date = $d["day"]. " de marzo del ". $d["year"];
            break;
            case 4:
            $EventCreated->event_date = $d["day"]. " de abril del ". $d["year"];
            break;
            case 5:
            $EventCreated->event_date = $d["day"]. " de mayo del ". $d["year"];
            break;
            case 6:
            $EventCreated->event_date = $d["day"]. " de junio del ". $d["year"];
            break;
            case 7:
            $EventCreated->event_date = $d["day"]. " de julio del ". $d["year"];
            break;
            case 8:
            $EventCreated->event_date = $d["day"]. " de agosto del ". $d["year"];
            break;
            case 9:
            $EventCreated->event_date = $d["day"]. " de septiembre del ". $d["year"];
            break;
            case 10:
            $EventCreated->event_date = $d["day"]. " de octubre del ". $d["year"];
            break;
            case 11:
            $EventCreated->event_date = $d["day"]. " de noviembre del ". $d["year"];
            break;
            case 12:
            $EventCreated->event_date = $d["day"]. " de diciembre del ". $d["year"];
            break;
          }
        }

        $EventsReceived = Event::where('id_citizen_receive', $user->id)->take(3)->get();
        foreach ($EventsReceived as $EventReceived) {
          $d = $d = date_parse_from_format("Y-m-d", $EventReceived->event_date);
          switch ($d["month"]) {
            case 1:
            $EventReceived->event_date = $d["day"]. " de enero del ". $d["year"];
            break;
            case 2:
            $EventReceived->event_date = $d["day"]. " de febrero del ". $d["year"];
            break;
            case 3:
            $EventReceived->event_date = $d["day"]. " de marzo del ". $d["year"];
            break;
            case 4:
            $EventReceived->event_date = $d["day"]. " de abril del ". $d["year"];
            break;
            case 5:
            $EventReceived->event_date = $d["day"]. " de mayo del ". $d["year"];
            break;
            case 6:
            $EventReceived->event_date = $d["day"]. " de junio del ". $d["year"];
            break;
            case 7:
            $EventReceived->event_date = $d["day"]. " de julio del ". $d["year"];
            break;
            case 8:
            $EventReceived->event_date = $d["day"]. " de agosto del ". $d["year"];
            break;
            case 9:
            $EventReceived->event_date = $d["day"]. " de septiembre del ". $d["year"];
            break;
            case 10:
            $EventReceived->event_date = $d["day"]. " de octubre del ". $d["year"];
            break;
            case 11:
            $EventReceived->event_date = $d["day"]. " de noviembre del ". $d["year"];
            break;
            case 12:
            $EventReceived->event_date = $d["day"]. " de diciembre del ". $d["year"];
            break;
          }
        }
        session(['EventsCreated' => $EventsCreated]);
        session(['EventsReceived' => $EventsReceived]);
        //echo(Session::get('EventsReceived'));
        //dd(session());
        return redirect('/home');
      }else{
        echo "Contraseña incorrecta";
      }
    }
  }

}
