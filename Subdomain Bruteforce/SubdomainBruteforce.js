document.getElementById('sb-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    const targetUrl = document.getElementById('weburl').value;

    // Clear the output area before starting a new scan
    const outputArea = document.getElementById('terminal');
    outputArea.value = "";

    

    // Send a POST request to initiate the brute force
    fetch('https://port-scan-1.onrender.com/subd', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: targetUrl })
    }).then(response => {
        if (response.ok) {
            // Open a new EventSource connection for SSE
            const eventSource = new EventSource('https://port-scan-1.onrender.com/subd-stream');
            
            // Listen for incoming data from SSE
            eventSource.onmessage = function(event) {
                // Append each line of the output to the textarea
                outputArea.value += event.data + "\n";
            };

            // Handle errors
            eventSource.onerror = function() {
                eventSource.close();
                outputArea.value += 'End.\n';
            };
        } else {
            outputArea.value = 'Error: Failed to initiate the scan.\n';
        }
    }).catch(error => {
        console.error('Error:', error);
        outputArea.value = 'Error occurred while starting the scan.\n';
    });
});