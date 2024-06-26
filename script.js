var links = document.querySelectorAll('nav a');

document.querySelector('#home').classList.remove('hidden');

links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        hideAllSections();
        var section = document.querySelector(this.getAttribute('href'));
        section.classList.remove('hidden');

        // Don't add a history entry if the clicked link is the home link
        if (this.getAttribute('href') !== '#home') {
            history.pushState(null, null, this.getAttribute('href'));
        } else {
            history.replaceState(null, null, ' ');
        }
    });
});

window.onload = function() {
    var parent = document.getElementById('images');
    var listItems = Array.prototype.slice.call(parent.getElementsByTagName('li'));

    // Shuffle array
    listItems.sort(function() { return 0.5 - Math.random() });

    // Remove all list items
    while (parent.firstChild) {
        parent.firstChild.remove();
    }

    // Append list items in random order
    for (var i = 0; i < listItems.length; i++) {
        parent.appendChild(listItems[i]);
    }
};

function changeSection(sectionId) {
    hideAllSections();
    if (sectionId && sectionId !== '#home' && sectionId !== '#') {
        var section = document.querySelector(sectionId);
        section.classList.remove('hidden');
    } else {
        document.querySelector('#home').classList.remove('hidden');
    }
}

window.addEventListener('load', function() {
    changeSection(location.hash || '#home');
});

window.addEventListener('popstate', function(event) {
    changeSection(location.hash);
});

function hideAllSections() {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });
}

window.addEventListener('scroll', function() {
    const title = document.getElementById('title');
    const images = document.getElementById('images');
    const arrow = document.getElementById('arrow');

    const titleOpacity = 1 - (window.scrollY / window.innerHeight) * 2;
    const imagesOpacity = (window.scrollY / window.innerHeight) * 2;

    title.style.opacity = Math.max(titleOpacity, 0);
    images.style.opacity = Math.min(imagesOpacity, 1);

    if (window.scrollY > 0) {
        images.style.transform = 'translateY(-50px)';
        images.style.display = 'grid';
        arrow.style.display = 'none';
    } else {
        images.style.display = 'none';
        arrow.style.display = 'flex';
    }
});

var images = document.querySelectorAll('#art2D-Lumophone img, #art2D-Golden img, #art3D-Tavern img, #art3D-Lyre img, #art2D-Environment img, #art3D-Barrels img');
var modal = document.getElementById('modal');
var modalImage = document.getElementById('modal-image');
var modalDescription = document.getElementById('modal-description');

images.forEach(function(image) {
    image.addEventListener('click', function() {
        if(this.classList.contains('mainImage')) {
            this.parentNode.appendChild(modal);
            modal.classList.remove('hidden');
            modalImage.src = this.src;
            modalDescription.textContent = this.alt;
        }
    });
});

modal.addEventListener('click', function() {
    modal.classList.add('hidden');
});



function emailButton() {
    var copyText = "kavitadigital.art@gmail.com";

    // Create a new textarea element
    var textarea = document.createElement('textarea');

    // Set the textarea value to the email
    textarea.value = copyText;

    // Add the textarea to the body (it won't be visible)
    document.body.appendChild(textarea);

    // Select the textarea content
    textarea.select();

    // Copy the textarea content to the clipboard
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        if(successful) {
            alert("Email copied to clipboard!");
        }
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.error('Could not copy text: ', err);
    }

    // Remove the textarea from the body
    document.body.removeChild(textarea);
}


function changeImage(sectionId, newImagePath) {
    var section = document.getElementById(sectionId);
    if (section) {
        var mainImage = section.querySelector('.mainImage');
        if (mainImage) {
            mainImage.src = newImagePath;
            console.log(mainImage)
        }
    }
}

var images = document.querySelectorAll('.image-container img');

images.forEach(function(image) {
    var text = image.nextElementSibling;
    text.textContent = image.alt;
});

/*
var CarouselSlider = new Swiper('.carousel-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  */