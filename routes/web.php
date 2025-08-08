<?php

use Illuminate\Support\Facades\Route;

Route::get('/api', function () {
    return \App\Models\User::first()->api()->rest('GET', '/admin/api/2021-07/shop.json');
});

Route::get('/', function () {
    return view('welcome');
})->middleware('verify.shopify')->name('home');

//For vue.js routing
//Route::group(['middleware' => 'auth'], function(){ //Requires user to be signed in before accessing
Route::get('/{any}', function(){
    return view('app');
})->where('any', '.*');
//});
