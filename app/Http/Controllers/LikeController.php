<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt');
    }
    public function likeit(Reply $reply)
    {
        $reply->like()->create([
            'user_id' => '5'
        ]);
        return response()->json('Liked', 200);
    }

    public function unlikeit(Reply $reply)
    {
        $reply->like()->where('user_id', '5')->first()->delete();
        return response()->json('Un-Liked', 200);
    }
}
