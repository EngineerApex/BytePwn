document.getElementById('packet-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    const targetIp = document.getElementById('weburl').value;

    fetch('https://port-scan-1.onrender.com/', {  //http://127.0.0.1:5000/PortScanAPI.py'  https://port-scan-1.onrender.com/scan
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ip: targetIp })  // Send the entered IP address in JSON format
    })
    .then(response => response.json())
    .then(data => {
        const outputArea = document.getElementById('terminal');
        outputArea.value = data.output;  // Set the output in the textarea
    })
    .catch(error => {
        console.error('Error:', error);
        const outputArea = document.getElementById('terminal');
        outputArea.value = 'Error occurred while scanning';  // Show error message in textarea
    });
});
