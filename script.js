// Get references to the dropdown elements
const teamLink = document.getElementById('teamLink');
const teamDropdown = document.getElementById('teamDropdown');

const contactLink = document.getElementById('contactLink');
const contactDropdown = document.getElementById('contactDropdown');

// Toggle the Team dropdown
teamLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link action
    teamDropdown.style.display = (teamDropdown.style.display === 'block') ? 'none' : 'block';
    contactDropdown.style.display = 'none'; // Close Contact dropdown if open
});

// Toggle the Contact dropdown
contactLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link action
    contactDropdown.style.display = (contactDropdown.style.display === 'block') ? 'none' : 'block';
    teamDropdown.style.display = 'none'; // Close Team dropdown if open
});

// Hide the dropdowns if clicked outside
window.addEventListener('click', function (event) {
    if (!teamLink.contains(event.target) && !teamDropdown.contains(event.target)) {
        teamDropdown.style.display = 'none';
    }
    if (!contactLink.contains(event.target) && !contactDropdown.contains(event.target)) {
        contactDropdown.style.display = 'none';
    }
});
