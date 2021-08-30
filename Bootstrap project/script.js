//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Validação simples
$("#formComentario").validate(); 

$( "#formularioValidation" ).validate({
    debug: true,
    rules: {
      campo1: {
        required: true,
            email: true,
      },
          campo2:{
            required: true,
                minlength: 8,
               maxlength: 12,
          },
          campo3:{
            required: true,
               range: [8] 
          },
          campo4:{
            required: true   
          },
          campo5:{
            required: true   
          },
          campo6:{
            required: true   
          },
          campo7:{
            required: true,
            range: [11,12]   
          },

      }
    })


    $('#theme li').click(function () {
        //alert('item: ' + $(this).text());
        switch_style($(this).text());
    });