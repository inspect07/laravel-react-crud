<?php

use App\Http\Controllers\Api\TaskApiController;
use Illuminate\Support\Facades\Route;

Route::get('/{path?}', function () {
    return view('app');
});

// api/
// Route::group(['prefix' => 'api'], function() {
//     Route::post('/task', [TaskApiController::class, 'saveTask']);
// });