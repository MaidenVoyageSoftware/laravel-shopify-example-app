<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Starter App</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body class="antialiased">
<div id="app">
    {{--Here you'd setup a component (typically a nav bar) that contains a <router-view></router-view> element. Then, when you navigate to another route, the nav bar component stays fixed but the <router-view></router-view> contains whatever component is passed into the route --}}
    {{--Here we're just using the hello world component directly for illustration--}}
    <hello-world></hello-world>
</div>
<script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
