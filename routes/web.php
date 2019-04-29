<?php


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('vista1');
});

Route::get('login', function(){
  return view('login');
});

Route::get('busqueda', function(){
  return view('busqueda');
});

Route::get('reportes', function(){
  return view('reportes');
});

Route::get('home', function(){
  return view('vista1');
});

Route::get('logout', 'HomeController@closeSession');

Route::get('postLoginRequestByAjax', 'HomeController@goLoginByAjax');
