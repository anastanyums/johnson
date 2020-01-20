@extends('template')

@section('content')
    <div class="container">
        <div class="row">
            <a href="/questions/create" class="btn btn-primary">Add new</a>
        </div>
        <div class="row">
            <table class="table">
                <thead>
                <tr>
                    <th> id</th>
                    <th> Question </th>
                    <th> Answer </th>
                </tr>
                </thead>
                <tbody>
                @foreach($questions as $question)
                    <tr>
                        <td> {{$question->id}} </td>
                        <td> {{$question->name}} </td>
                        <td> {{$question->answer->name}} </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection