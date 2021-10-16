
        
function myFunction() {
    document.getElementById("Easy").disabled = true;
    document.getElementById("Medium").disabled = true;
    document.getElementById("Hard").disabled = true;
   
  }
  function myFunction2() {
   $('input:radio').click(function(){
      var $inputs = $('input:radio')
      if($(this).is(':radio')){
         $inputs.not(this).prop('disabled',true); 
      }else{
         $inputs.prop('disabled',false); 
      }
      })
    document.getElementById("Easy").disabled = false;
    document.getElementById("Medium").disabled = false;
    document.getElementById("Hard").disabled = false;
 
 
        
  }

  
  