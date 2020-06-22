if (window.innerWidth <= 768){
    document.querySelector('#navToggleBtn').hidden = false;
    document.querySelector('#navLinks').style.flexDirection='column';
    document.querySelector('#navLinks').style.justifyContent='center';
    document.querySelector('#navLinks').style.marginLeft='auto';
}else{
    document.querySelector('#navLinks').style.flexDirection='row';
}
// adjust navbar according to scroll
window.onscroll = () => {
    if (window.scrollY >= (document.querySelector('#headImage').offsetHeight) * 0.8){
        // When scrolled down
        document.querySelector('#navBrand').hidden = false;
        document.querySelector('#navSignup').hidden = false;
        document.querySelector('#navToggleBtn').hidden = false;
        if(window.innerWidth > 768){
            document.querySelector('#navToggleBtn').hidden = true;
            // document.querySelector('#navLinks').style.flexDirection='row';
            document.querySelector('#navLinks').style.justifyContent='start';
        }else{
            document.querySelector('#navLinks').style.justifyContent='center';
        }
        
    } else {
        // When focusing on headImage
        document.querySelector('#navBrand').hidden = true;
        document.querySelector('#navSignup').hidden = true;
        // if not mobile device
        if(window.innerWidth > 768){
            document.querySelector('#navToggleBtn').hidden = true;
            // document.querySelector('#navLinks').style.flexDirection='row';
            document.querySelector('#navLinks').style.justifyContent='space-evenly';
            
        }
        
    }
}

