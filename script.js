var links = document.querySelectorAll('nav a');

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

images.forEach(function(image) {
    image.addEventListener('click', function() {
        modal.classList.remove('hidden');
        modalImage.src = this.src;
        modalDescription.textContent = this.alt;
    });
});

modal.addEventListener('click', function() {
    modal.classList.add('hidden');
});

document.querySelector('#home').classList.remove('hidden');