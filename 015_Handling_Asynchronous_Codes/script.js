let btn_callback = document.getElementById("btn_callback");
btn_callback.addEventListener('click', function(){
     alert("Events' Listeners are asynchronous functions using callbacks");
     window.setTimeout(function(){
          alert("setTimeout, setInterval,...are also asynchronous functions using callbacks");
     }, 1000);

}, false);