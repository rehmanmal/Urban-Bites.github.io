// Get the required elements
var navLinks = document.getElementById("navLinks");
var menuIcon = document.getElementById("menuIcon");
var closeIcon = document.getElementById("closeIcon");

// Define the functions
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Add event listeners
menuIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hideMenu);


document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;

        // Close other open FAQ items
        document.querySelectorAll('.faq-item').forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // Toggle current FAQ item
        faqItem.classList.toggle('active');
    });
});
