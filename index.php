<html>
    <head>
        <title>The Custom Autocomplete Plugin</title>
        <link href="css/bootstrap.min.css" rel='stylesheet' type='text/css' />
        <link href="css/easy_autocomplete.css" rel="stylesheet" type="text/css"/>
    </head>
    <body class="">
        <div class="container">
            <div class="row" style="margin-top: 15%; margin-left: 25%;">
                <div class="col-md-7">
                    <div class="">
                        <div class="form-group">
                            <label for="input">Enter Country:</label>
                            <input type="text" class="form-control" id="input" placeholder="Enter Country Name">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/jquery-1.10.2.min.js" type="text/javascript"></script>
        <script src="js/jquery.autocomplete.js" type="text/javascript"></script>
        <script src="js/custom.js" type="text/javascript"></script>
        <script type="text/javascript">
            var base_path = 'http://<?php echo $_SERVER['HTTP_HOST']; ?>/jquery_autocomplete/';
        </script>
    </body>
</html>