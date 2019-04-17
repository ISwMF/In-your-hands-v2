<?php
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::resource('event', 'EventController');
Route::resource('login', 'LoginController');
Route::resource('user', 'UserControlles');
Route::get('users/{user}/eventscreated', 'EventController@getEventsCreatedByCitizen');
Route::get('users/{user}/eventsreceived', 'EventController@getEventsReceivedByCitizen');
Route::get('users/top10', 'UserControlles@getTopUsers');
