<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
@vite('resources/css/app.css')

<body>
    <div id="root"></div>

    @viteReactRefresh
    @vite('resources/js/app.ts')
</body>
<script>
    window.env = {
        API_BASE_URL: '{{ env("API_BASE_URL") }}'
    }
</script>

</html>