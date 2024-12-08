/* THIS IS THE REAL CODE TO BE USED 
document.getElementById('db-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    const targetUrl = document.getElementById('weburl').value;
    const outputArea = document.getElementById('terminal');

    // Clear the output area before starting a new scan
    outputArea.value = "";

    // First, send the POST request to start the scan
    fetch('http://127.0.0.1:5000/bruteforce', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: targetUrl })
    }).then(response => {
        if (response.ok) {
            // If POST is successful, open EventSource for SSE
            const eventSource = new EventSource('http://127.0.0.1:5000/bruteforce');

            // Listen for incoming data from SSE
            eventSource.onmessage = function(event) {
                // Append each line of the output to the textarea
                outputArea.value += event.data + "\n";
            };

            // Handle SSE connection errors
            eventSource.onerror = function() {
                eventSource.close();
                outputArea.value += 'Error: SSE connection closed or failed.\n';
            };
        } else {
            outputArea.value = 'Error: Failed to initiate the scan.\n';
        }
    }).catch(error => {
        console.error('Error:', error);
        outputArea.value = 'Error occurred while starting the scan.\n';
    });
});


document.getElementById('db-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    const targetUrl = document.getElementById('weburl').value;

    // Clear the output area before starting a new scan
    const outputArea = document.getElementById('terminal');
    outputArea.value = "";

    

    // Send a POST request to initiate the brute force
    fetch('https://port-scan-1.onrender.com/bruteforce', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: targetUrl })
    }).then(response => {
        if (response.ok) {

            // Open a new EventSource connection for SSE
            const eventSource = new EventSource('https://port-scan-1.onrender.com/bruteforce');

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
        outputArea.value = 'Error occurred while starting the scannnnn.\n';
    });
});
*/

document.getElementById('db-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    const targetUrl = document.getElementById('weburl').value;

    // Clear the output area before starting a new scan
    const outputArea = document.getElementById('terminal');
    outputArea.value = "";

    // Send a POST request to initiate the brute force
    fetch('https://port-scan-1.onrender.com/bruteforce', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: targetUrl })
    }).then(response => {
        if (response.ok) {
            outputArea.value += 'Scan initiated. Listening for results...\n';

            // Open a new EventSource connection for SSE
            const eventSource = new EventSource('https://port-scan-1.onrender.com/bruteforce-stream');

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
