document.getElementById('spider-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent traditional form submission

    const url = document.getElementById('weburl').value;
    const keyword = document.getElementById('weburlkey').value;

    // Clear the output area
    const outputArea = document.getElementById('terminal');
    outputArea.value = "";

    // Use the correct endpoint (assuming deployed on render)
    fetch('https://port-scan-1.onrender.com/spider', {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url, keyword: keyword })
    })
    .then(response => response.text())  // Expect plain text response
    .then(data => {
        outputArea.value = data;
    })
    .catch(error => {
        console.error('Error:', error);
        outputArea.value = 'Errorr occurred while starting the spider and probe.\n';
    });
});
