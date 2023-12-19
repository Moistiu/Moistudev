document.addEventListener('DOMContentLoaded', function () {
    const moistiuButton = document.getElementById('moistiuButton');
    const moistiuMessage = document.getElementById('moistiuMessage');

    const resumeButton = document.getElementById('resumeButton');
    resumeButton.addEventListener('click', function () {
        window.open('D:\\Rodney Files\\Document\\EMC-GAD_Monteclaro_Rodney.pdf', '_blank');
    });

    const composeEmailButton = document.getElementById('composeEmailButton');
    composeEmailButton.addEventListener('click', function () {
        // Specify the recipient email, subject, and body
        const email = 'info@moistiudev.com';
        const subject = 'Interested in your skills';
        const body = 'I would like to get in touch with you.';

        // Construct the mailto link
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the mailto link in a new window or tab
        window.open(mailtoLink);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add smooth page transition on navigation link click
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetPage = this.getAttribute('href');

            // Fade out current page
            document.body.classList.add('fade-out');

            // Navigate to the new page after the fade-out effect
            setTimeout(function () {
                window.location.href = targetPage;
            }, 500); // Adjust the delay to match the transition duration
        });
    });

    // Show loading spinner on page load
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'block';

    // Hide loading spinner when the page is fully loaded
    window.addEventListener('load', function () {
        loadingSpinner.style.display = 'none';
        document.body.classList.remove('fade-out'); // Remove fade-out class on load
    });
});
