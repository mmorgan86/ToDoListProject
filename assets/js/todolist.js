// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click On X To Delete ToDo
$("div").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  
  //Stop the click event from happing to the whole "li"
  event.stopPropagation();
});

$("input[type='text']").keypress(function(){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //creat a new li and add to ul
    //use apend() method
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-pencil-square-o").click(function(){
  $("input[type='text']").fadeToggle();
});

