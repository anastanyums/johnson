<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    //

    public function answer()
    {
        return $this->belongsTo('App\Answer');
    }
}
