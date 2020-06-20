// Image Modal
var modal = document.getElementsByClassName('images-modal')[0];
var modal_2 = document.getElementsByClassName('images-modal')[1];
var modal_3 = document.getElementsByClassName('images-modal')[2];
var modal_button = document.getElementsByClassName('about-img')[0];
var modal_button_2 = document.getElementsByClassName('about-img')[1];
var modal_button_3 = document.getElementsByClassName('about-img')[2];
modal_button.addEventListener('click', openModal);
modal_button_2.addEventListener('click', openModal);
modal_button_3.addEventListener('click', openModal);

window.addEventListener('click', outsideClose);


function openModal(e){
    console.log(e.target)
    if(e.target == modal_button){
    modal.style.display = 'block';
    } else if(e.target == modal_button_2){
        modal_2.style.display = 'block';
    } else if(e.target == modal_button_3){
        modal_3.style.display = "block";
    }
}

function outsideClose(e){
    if(e.target == modal || e.target == modal_2 || e.target == modal_3){
        e.target.style.display = 'none';
        console.log("goodgoodgood")
    }
}
// Read-More
var more_or_less = 0;
//var read_more_button_1 = document.getElementById("more-1");
//read_more_button_1.addEventListener("click", expandText);
function expandText(){
    if (more_or_less != 1){
        console.log("works");
        document.getElementById("more-1").style.display = "block";
        document.getElementById("read-more-1").setAttribute("value", "Read Less");
        more_or_less = 1;
    }
    else{
        document.getElementById("more-1").style.display = "none";
        document.getElementById("read-more-1").setAttribute("value", "Read More");
        more_or_less = 0;
    }
}

