const titles = ['Programmer', 'Web Developer', 'UI/UX Designer']; 

function typeText(targetId, texts) {
    const targetElement = document.getElementById(targetId);
    let textIndex = 0;
    let charIndex = 0;
    let intervalId;

    function animationStep() {
        const currentText = texts[textIndex];
        const currentChar = currentText[charIndex];

        if (charIndex < currentText.length) {
            targetElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        } else {
            // Reset charIndex for the next text
            charIndex = 0;

            // Increment textIndex for the next text in a circular manner
            textIndex = (textIndex + 1) % texts.length;

            // Clear the interval to pause before starting the next typing animation
            clearInterval(intervalId);

            // Set a delay before starting the next typing animation (e.g., 2000 milliseconds)
            setTimeout(() => {
                // Start the typing animation again
                intervalId = setInterval(animationStep, 100);
            }, 2000); // Adjust the delay time (in milliseconds) before starting the next typing animation
        }
    }

    intervalId = setInterval(animationStep, 100); // Adjust the interval (in milliseconds) for the typing speed
}

// Call the typeText function with the array of texts
typeText('title', titles);


// Replace querySelector with querySelectorAll for the classes
const seeMoreButtons = document.querySelectorAll('.see-button');
const secondParts = document.querySelectorAll('.second-part');
const firstParts = document.querySelectorAll('.first-part');

// Add event listeners for each element with the class
seeMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the corresponding first_part and second_part based on the button's index
        const index = Array.from(seeMoreButtons).indexOf(button);
        firstParts[index].style.display = 'none';
        secondParts[index].style.display = 'flex';
    });
});

// Similarly, update the code for project_image
const projectImages = document.querySelectorAll('#project-image-show');
projectImages.forEach(image => {
    image.addEventListener('click', () => {
        const index = Array.from(projectImages).indexOf(image);
        secondParts[index].style.display = 'none';
        firstParts[index].style.display = 'flex';
        firstParts[index].classList.add('animate-opening-project-image');
    });
});
