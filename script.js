function toggleSection(sectionId) {
    var sectionContent = document.getElementById(sectionId);
    if (sectionContent.classList.contains('show')) {
        sectionContent.classList.remove('show');
    } else {
        sectionContent.classList.add('show');
    }
}
