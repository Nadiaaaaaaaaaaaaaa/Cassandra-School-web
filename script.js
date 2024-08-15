document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    const testDates = document.querySelectorAll('#testDatesTable td[data-date]');

    testDates.forEach(function (td) {
        const testDate = new Date(td.getAttribute('data-date'));
        if (testDate < currentDate) {
            td.textContent = 'Done';
            td.style.color = 'green';
        } else {
            td.textContent = 'Upcoming';
            td.style.color = 'orange';
        }
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
