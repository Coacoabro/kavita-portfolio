var links = document.querySelectorAll('nav a');

links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        hideAllSections();
        var section = document.querySelector(this.getAttribute('href'));
        section.classList.remove('hidden');

        history.pushState(null, null, this.getAttribute('href'));
    });
});

window.addEventListener('popstate', function(event) {
    changeSection(location.hash);
});

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
        images.style.transform = 'translateY(0)';
        images.style.display = 'none';
        arrow.style.display = 'block';
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