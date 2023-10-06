const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelectorAll("r-btn");
 
rightbtn.addEventListener('click', function(event) {
    console.log('do0ne'); 
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft + 1100; 
    event.preventDefault();
    });
    leftbtn.addEventListener('click', function(event) {
         console.log('do0ne');
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft -= 1100; 
    event.preventDefault();
    })   

    const leftbtrl = document.querySelector(".btn-1b"); 
    const rightbtn1 = document.querySelector(".btn-1a");

    rightbtn1.addEventListener('click', function(event) { 
        console.log("done");
    const conent = document.querySelector(" .product-slide");
    conent.scrollLeft += 1100; 
    event.preventDefault();
    });
leftbtn1.addEventListener('click', function(event) {
    console.log('done');
    const coment = document.querySelector(".product-slide");
    conent.scrollLeft = 1100;
    event.preventDefault();
    const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    })
})
const sidebar = document.querySelector(" .sidebar");
const cross = document.querySelector(" .fa-xmark");
const black = document.querySelector(" .black");
const sidebtn = document.querySelector(" .second-1");
 
sidebtn.addEventListener('click', () =>{
     sidebar.classList.add('active');
     cross.classList.add('active');
     black.classList.add('active');
})

cross.addEventListener('click', () =>{
    sidebar.classList.remove('active');
    cross.classList.remove('active');
    black.classList.remove('active');

})

function navigateToFeedback() {
    location.href = 'feedback_questions.html';
}

function validateAndNavigate() {
    const userInfoForm = document.getElementById('userInfoForm');
    if (userInfoForm.checkValidity()) {
        navigateToFeedback();
    } else {
        alert('Please fill out all fields correctly before proceeding.');
    }
}

// Add an event listener to the file input
document.getElementById("fileInput").addEventListener("change", function () {
    // Get the selected file
    const selectedFile = this.files[0];

    // Display the selected file's name in the nearby element
    const selectedFileNameElement = document.getElementById("selectedFileName");
    if (selectedFile) {
        selectedFileNameElement.textContent = "Selected file: " + selectedFile.name;
    } else {
        selectedFileNameElement.textContent = ""; // Clear the text if no file is selected
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (feedbackForm.checkValidity()) {
                alert('Feedback submitted successfully!');
            } else {
                alert('Please answer all questions before submitting.');
            }
        });
    }

    const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        const output = document.getElementById(input.id + 'Output');
        output.value = input.value;
        input.addEventListener('input', function() {
            output.value = input.value;
        });
    });
});
// JavaScript code to control scrolling
const scrollContent = document.getElementById('scroll-content');
const items = Array.from(scrollContent.children);
let currentItemIndex = 0;

function scrollItems() {
    items[currentItemIndex].classList.remove('visible');
    currentItemIndex = (currentItemIndex + 1) % items.length;
    items[currentItemIndex].classList.add('visible');
    
    // Check if we have reached the last item, and loop back to the first item
    if (currentItemIndex === items.length - 1) {
        items[0].classList.add('visible');
    }
}

