@extends('template')

@section('content')
    <div class="container">
        <div class="row">
            <a href="/answers/create" class="btn btn-primary">Add new</a>
        </div>
        <div class="row">
            <table class="table">
                <thead>
                <tr>
                    <th> id</th>
                    <th> Name </th>
                    <th> Picture </th>
                </tr>
                </thead>
                <tbody>
                @foreach($answers as $answer)
                    <tr>
                        <td> {{$answer->id}} </td>
                        <td> {{$answer->name}} </td>
                        <td> {{$answer->pic}} </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection