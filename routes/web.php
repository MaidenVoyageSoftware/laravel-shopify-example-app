<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

//For vue.js routing
//Route::group(['middleware' => 'auth'], function(){ //Requires user to be signed in before accessing
Route::get('/{any}', function(){
    return view('app');
})->where('any', '.*');
//});
