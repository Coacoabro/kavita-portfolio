var links = document.querySelectorAll('nav a');

links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        hideAllSections();
        var section = document.querySelector(this.getAttribute('href'));
        section.classList.remove('hidden');
    });
});

function hideAllSections() {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });
}

// Show the gallery section by default
document.querySelector('#gallery').classList.remove('hidden');