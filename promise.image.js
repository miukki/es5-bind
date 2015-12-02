<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">

    <title>Promise example</title>

    <link rel="stylesheet" href="">
    <!--[if lt IE 9]>
      <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>

  <body>
  </body>

  <script>
  function imgLoad(url) { //image uploader, blob image
    return new Promise(function(resolve, reject) {
      // Standard XHR to load an image
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.responseType = 'blob';
      request.onload = function() {
        if (request.status === 200) {
        // If successful,
          resolve(request.response);
        } else {
        // If it fails,
          reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
        }
      };
      request.onerror = function() {
          reject(Error('There was a network error.'));
      };
      // Send the request
      request.send();
    });
  }
  var body = document.querySelector('body');
  var myImage = new Image();
  imgLoad('/api/Images/1/download').then(function(response) {
    // specified within the resolve() method.
    var imageURL = window.URL.createObjectURL(response);
    myImage.src = imageURL;
    body.appendChild(myImage);
    // is rejected,
  }, function(Error) {
    console.log(Error);
  });
  </script>
</html>