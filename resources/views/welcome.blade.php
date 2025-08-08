@extends('shopify-app::layouts.default')

@section('content')
    <p>Hello World!</p>
    {{ json_encode(Auth::user()->api()->rest('GET', '/admin/api/customers.json')) }}
    <ui-title-bar title="Testing">
        <ui-button @click="console.log('Button clicked!')">Click me</ui-button>
    </ui-title-bar>
    <ui-modal id="my-modal">
        <p>Message</p>
        <ui-title-bar title="Title">
            <button variant="primary">Label</button>
            <button onclick="document.getElementById('my-modal').hide()">Label</button>
        </ui-title-bar>
    </ui-modal>
    <button onclick="document.getElementById('my-modal').show()">Open Modal</button>
@endsection
