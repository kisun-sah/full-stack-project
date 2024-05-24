
  // Toggle icon navbar (assuming this part is handled elsewhere)
  document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('.navbar a');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        navLinks.forEach(link => {
            link.onclick = () => {
                  // remove toggle icon and navbar when click links (scroll)
         
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            };
        });
    } else {
        console.error('Menu icon or navbar element not found');
    }
});


  






        // Scroll section
        let sections = document.querySelectorAll('section');
        let nevLinks = document.querySelectorAll('header nav a');

       

        window.onscroll = () => {

           sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');


            if(top >=offset && top < offset + height ){
                // active navebar links
                nevLinks.forEach(links =>{
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*='+ id+']').classList.add('active');
                });

                    //    active section for animation on scroll
              sec.classList.add('show-animate');

            }

            // if we want to use animation that repeted an scroll use this
            else{
                sec.classList.remove('show-animate');
            }
           });

    
            // Sticky header
            let header = document.querySelector('header');
            if (header) {
                header.classList.toggle('std', window.scrollY > 100);
            } else {
                console.error('Header element not found');
            }

          //animation footer an scroll 
          let footer = document.querySelector('footer');
          footer.classList.toggle('show-animate' , this.innerHeight + this.screenY >=
           document.scrollingElement.scrollHeight)

        };