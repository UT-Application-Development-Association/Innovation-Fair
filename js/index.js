// for mobile device
if (window.innerWidth <= 768){
    document.querySelector('#navBrand').hidden = false;
    document.querySelector('#navToggleBtn').hidden = false;
    document.querySelector('#navSignupMobile').hidden = false;
    document.querySelector('#navSignup').hidden = false;
    document.querySelector('#navList').style.flexDirection = 'column';
    document.querySelector('#navList').style.justifyContent = 'center';
    document.querySelector('#navList').style.marginLeft = 'auto';
    document.querySelector('#navList').style.width = '20%';
    document.querySelector('#langSwitch').style.marginLeft = '40%';
    document.querySelector('#sponsorLogoContainer').classList.remove('row');
    document.querySelector('#sponsorLogoContainer').classList.add('col');
}else{
    document.querySelector('#navSignupMobile').hidden = true;
    document.querySelector('#navList').style.flexDirection='row';
    document.querySelector('#sponsorLogoContainer').classList.add('row');
    document.querySelector('#sponsorLogoContainer').classList.remove('col');
}
// adjust navbar according to scroll
window.onscroll = () => {
    if (window.scrollY >= (document.querySelector('#headImageCarousel').offsetHeight) * 0.9){
        // When scrolled down
        document.querySelector('#navBrand').hidden = false;
        document.querySelector('#navToggleBtn').hidden = false;
        // if not mobile device
        if(window.innerWidth > 768){
            document.querySelector('#navToggleBtn').hidden = true;
            document.querySelector('#navList').style.justifyContent='start';
        }else{
            document.querySelector('#navList').style.justifyContent='center';
        }
        
    } else {
        // When focusing on headImage
        document.querySelector('#navBrand').hidden = false;
        // if not mobile device
        if(window.innerWidth > 768){
            document.querySelector('#navToggleBtn').hidden = true;
            // document.querySelector('#navList').style.justifyContent='space-evenly';
        }
    }

    // header box shadow
    if (window.scrollY >= (document.querySelector('#headImageCarousel').offsetHeight) * 1.1){
        document.querySelector('#header').style.boxShadow = "0 5px 2px -2px rgba(216,220,219,0.4)";
    } else {
        document.querySelector('#header').style.boxShadow = "none";
    }
}

