document.querySelector("#hamicon").addEventListener("click", mostraritems);
 function mostraritems() {
   const todomenu = document.querySelector("#hamnav");
   if (todomenu.style.backgroundColor=='rgba(19, 19, 19, 0.863)') {
     todomenu.style.backgroundColor='transparent';
     todomenu.style.transition='background-color 0s ease';
     document.querySelector("#hamicon").innerHTML='&#9776;';
   } else {
     todomenu.style.backgroundColor='rgba(19, 19, 19, 0.863)';
     todomenu.style.transition='background-color 1s ease';
     document.querySelector("#hamicon").innerHTML='&#x2715;';
   }
 }
  /* document.querySelector("body").addEventListener("mousemove", typeWriter);  
  var i = 0;
  var txt = 'dianaledist';
  var speed = 40;
  
  function typeWriter() {
    if (i < txt.length) {
      document.querySelector("#type").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  } */
