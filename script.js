function scrollToSection(sectionID) {
    toggleNav();
    let section = document.getElementById(sectionID);
    section.scrollIntoView({ behavior: 'smooth' });
}

function toggleNav() {
    if (window.innerWidth <= 576) {
        let mainNav = document.getElementById('main-nav');
        if (mainNav.style.transform == 'translateY(0px)') {
            mainNav.style.transform = 'translateY(-110%)';
        } else {
            mainNav.style.transform = 'translateY(0px)'
        }
    }
}

function processContactForm(form){
    //Extract form data
    let formElements = form.elements;
    let formData = {
        name: formElements['name'].value,
        email: formElements['email'].value,
        message: formElements['message'].value,
    }

    // Send contact form
    let formStatusMessage = document.getElementById('formStatusMessage');
    formStatusMessage.innerHTML = "Sending ...";

    axios.post('https://liammcateer-profile-site.herokuapp.com/api/contact', formData)
        .then((response) => {
            formStatusMessage.innerHTML = "Your message has been sent.";
            formStatusMessage.classList.remove('error')
            formStatusMessage.classList.add('success')
        })
        .catch((error) => {
            formStatusMessage.innerHTML = "There was an error sending your message. In the meantime you can contact me via email:" + 
                "<br><a href='mailto:liam@liammcateer.nz'>liam@liammcateer.nz</a>";
            formStatusMessage.classList.remove('success')
            formStatusMessage.classList.add('error')

        });

    return false;

}