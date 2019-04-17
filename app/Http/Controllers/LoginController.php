<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Login;
use App\User;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $login = new Login;
      $login->user_name = $request->user;
      $login->user_password = $request->password;
      $login->save();
      //----------------------------------------
      $user = User::where('user_login', $request->user)->first();
      if (empty($user)) {
        $arr = array ('message'=>'No se ha encontrado coincidencia');
        return json_encode($arr);
      }else{
        if ($request->password == $user->user_password) {
          $arr = array ('message'=>'Hecho', 'user' => $user->user_login);
          return json_encode($arr);
        }else{
          $arr = array ('message'=>'Contrasena incorrecta');
          return json_encode($arr);
        }
      }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
