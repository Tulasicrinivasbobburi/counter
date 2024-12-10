const  count=document.getElementById("container");
const outpu=document.getElementById("container");

function Mymin(){
   if(count.innerHTML>0&&count.innerHTML<100){
    var ce=count.innerHTML;
    ce=ce-1;
    count.innerHTML=ce;
    }else{
alert(`you reach the lower boundary and it is not posible to decrement`)
    }
   }


    function Myadd(){
      if(count.innerHTML<100){
       var ce=count.innerHTML;
        ce=parseInt(ce)+1;
        count.innerHTML=ce;}
        else{
         alert(`you reach the upper boundary and it is not posible to increment`)

        }
     }
     function reset(){
        var ce=count.innerHTML;
        count.innerHTML="0";
        
        
     }
    