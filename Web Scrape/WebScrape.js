document.getElementById('webs-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent traditional form submission

    const url = document.getElementById('weburl').value;
    const keyword = document.getElementById('weburlkey').value;

    // Clear the output area before starting a new scan
    const outputArea = document.getElementById('terminal');
    outputArea.value = "";

    // Send a POST request to initiate the web scraping process
    fetch('https://port-scan-1.onrender.com/webscrape', { //http://127.0.0.1:5000/webscrape
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url, keyword: keyword })
    })
    .then(response => response.text())  // Expect plain text response
    .then(data => {
        outputArea.value = data;  // Directly set plain text output in the textarea
    })
    .catch(error => {
        console.error('Error:', error);
        outputArea.value = 'Error occurred while scraping the website.\n';
    });
});
