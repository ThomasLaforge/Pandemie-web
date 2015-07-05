$(function(){

  $('body').on('click', '#deck', function(){
    if($(this).attr('active') == 'true'){
      $(this).attr('active','false');
    }
    else{
      
      alert('Vous ne pouvez pas piocher de cartes.');
    }
  });


});
