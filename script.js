function scrollToSection(sectionID){
    let section = document.getElementById(sectionID);
    section.scrollIntoView({behavior: 'smooth'});
}

function toggleNav(){
    let mainNav = document.getElementById('main-nav');
    if(mainNav.style.transform == 'translateY(0px)'){
        mainNav.style.transform = 'translateY(-110%)';
    }else{
        mainNav.style.transform = 'translateY(0px)'
    }
}