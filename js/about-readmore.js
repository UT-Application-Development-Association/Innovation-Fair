var more_or_less_1 = 0;
var more_or_less_2 = 0;
var more_or_less_3 = 0;
//var read_more_button_1 = document.getElementById("more-1");
//read_more_button_1.addEventListener("click", expandText);
function expandText(e){


        if (e == "more-1"){
            if (more_or_less_1 != 1){
            document.getElementById("more-1").style.display = "inline";
        document.getElementById("read-more-1").setAttribute("value", "Read Less");
        more_or_less_1 = 1;
            } else{
                document.getElementById("more-1").style.display = "none";
                document.getElementById("read-more-1").setAttribute("value", "Read More");
                more_or_less_1 = 0;
            }
    }else if (e=="more-2"){
        if (more_or_less_2 != 1){
        document.getElementById("more-2").style.display = "inline";
        document.getElementById("read-more-2").setAttribute("value", "Read Less");
        more_or_less_2 = 1;
        }else {
            document.getElementById("more-2").style.display = "none";
            document.getElementById("read-more-2").setAttribute("value", "Read More");    
            more_or_less_2 = 0;
        }
    } else if (e=="more-3"){
        if (more_or_less_3 != 1){
        document.getElementById("more-3").style.display = "inline";
        document.getElementById("read-more-3").setAttribute("value", "Read Less");
        more_or_less_3 = 1;
        }else{
            document.getElementById("more-3").style.display = "none";
            document.getElementById("read-more-3").setAttribute("value", "Read More");
            more_or_less = 0;
        }
    }

}

