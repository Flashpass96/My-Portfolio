const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ===== SHOW MENU ===== */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* ===== HIDE MENU ===== */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* ===== REMOVE MENU ON LINK CLICK (MOBILE) ===== */
const navLinks = document.querySelectorAll('.nav_link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
};

navLinks.forEach(n => n.addEventListener('click', linkAction));

/* ===== typed js ===== */
const typedHome = new Typed('#home-typed', {
  strings: ['Web Developer','Designer'],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  cursorChar: '_',
});

/*========== shadow header ==========*/
const shadowHeader = () =>{
      const header = document.getElementById('header');
      this.scrollY >= 50 ? header.classList.add('shadow-header')
                         : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

/*========== CONTACT EMAIL JS ==========*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
      
 const sendEmail = (e) => {
     e.preventDefault()

     emailjs.sendForm('service_xfs7zgv','template_zkl8fvg','#contact-form','NbKnKndg0ueAOnBZN')
     .then(() => {
      contactMessage.textContent = 'Message sent successfully ✅'

      setTimeout(() => {
        contactMessage.textContent = ''
      }, 5000)

      contactForm.reset()
    }, () => {

      // contactMessage.textContent = 'Message not sent (service error) ❌'
    })
 }
 contactForm.addEventListener('submit', sendEmail)

 /*================= SCROLL UP ================*/
 const scrollUp = () =>{
   const scrollUp = document.getElementById('scroll-up')
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
 }
 window.addEventListener('scroll', scrollUp)

  /*================= SCROLL SECTIONS ACTIVE LINK ================*/
  const sections = document.querySelectorAll('section[id]')

  const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
      }else{
        sectionClass.classList.remove('active-link')
      }
    })
  }
  window.addEventListener('scroll', scrollActive)

    /*================= SCROLL REVEAL ANIMATION ================*/
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      // reset: true,
    })

    sr.reveal(`.home_content, .resume_content:nth-child(1), .footer_container`)
    sr.reveal(`.home_data, .resume_content:nth-child(2)`,  {delay: 300, origin: 'bottom'})

    sr.reveal(`.about_content, .contact_content`, {origin: 'bottom'})
    sr.reveal(`.about_image, .contact_form`, {delay: 300})

    sr.reveal(`.projects_card`, {interval: 100})