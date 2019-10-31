<?php

namespace App\Model;

use App\User;
use App\Model\Reply;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    //protected $guarded = [];
    protected $fillable  = ['title', 'slug', 'body', 'user_id', 'category_id'];
    protected $with = ['replies'];
    public function getRouteKeyName()
    {
        return 'slug';
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function replies()
    {
        return $this->hasMany(Reply::class)->latest();
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function getPathAttribute()
    {
        return "/question/$this->slug";
    }
}
