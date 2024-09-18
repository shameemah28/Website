const teamLink = document.getElementById('teamLink');
const teamDropdown = document.getElementById('teamDropdown');

teamLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link action
    teamDropdown.style.display = (teamDropdown.style.display === 'block') ? 'none' : 'block';
});

// Hide the dropdown if clicked outside
window.addEventListener('click', function (event) {
    if (!teamLink.contains(event.target) && !teamDropdown.contains(event.target)) {
        teamDropdown.style.display = 'none';
    }
});