@extends('template')

@section('content')
    <div class="container">
        <form method="post" action="/questions">
            {{ csrf_field() }}
            <div class="form-group">
                <label for="name">Name :</label>
                <input type="text" class="form-control" id="name"  name="name">
            </div>
            <div class="form-group">
                <label for="pic">Picture name :</label>
                <input type="text" class="form-control" id="pic"  name="pic">
            </div>
            <div class="form-group">
                <label for="answer">Answer :</label>
                <select name="answer" id="answer">
                    @foreach($answers as $answer)
                        <option value="{{$answer->id}}">{{$answer->name}}</option>
                    @endforeach

                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
@endsection