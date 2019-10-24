<?php

namespace App\Model;

use App\User;
use App\Model\Like;
use App\Model\Question;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $guarded = [];
    public function __construct()
    {
        $this->middleware('jwt', ['except' => ['index', 'show']]);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function question()
    {
        return $this->belongsTo(Question::class);
    }
    public function like()
    {
        return $this->hasMany(Like::class);
    }
}
