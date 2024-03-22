// Function to load external content into the header
function loadHeader() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('dynamic-header').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Call the function to load header content when the page loads
window.addEventListener('load', loadHeader);