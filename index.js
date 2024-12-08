// JS script: Hover effect on '/../..' to add '/etc/' and Spider icon move - Home.css file 
function changeTextOnHover() {
    const etcElement = document.querySelector('.etc');
    
    etcElement.addEventListener('mouseover', () => {
        let originalText = ' /../..';
        let newText = ' /../../etc/';
        etcElement.textContent = ' /../..'; // Reset to original text
        let delay = 100; // Delay between characters (in milliseconds)

        for (let i = 7; i < newText.length; i++) {
            setTimeout(() => {
                etcElement.textContent = originalText + newText.substring(7, i + 1);
            }, delay * (i - 6)); // Start adding characters after the original text
        }
    });

    etcElement.addEventListener('mouseout', () => {
        etcElement.textContent = ' /../..'; // Reset to original text on mouse out
    });
}



function addHoverEffect() {
    const spiderIcon = document.querySelector('.spider-icon');
    const webIcon = document.querySelector('.web-icon');
    const container = document.querySelector('.icon');

    spiderIcon.addEventListener('mouseover', () => {
        spiderIcon.classList.add('move-down'); // Add class for moving down
        
        
    });

    
    spiderIcon.addEventListener('mouseout', () => {
        // Reset images when mouse is out
        spiderIcon.classList.remove('move-down');
        setTimeout(() => {
            spiderIcon.style.display = 'block';
            webIcon.style.display = 'block';
            
        }, 500);
    });
}

window.onload = function() {
    changeTextOnHover();
    addHoverEffect();
};
