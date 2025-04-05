document.addEventListener("DOMContentLoaded", function () {
    const orderNowBtn = document.getElementById("orderNowBtn");
    const modal = document.getElementById("orderModal");
    const closeModal = document.getElementById("closeModal");
    const submitOrderBtn = document.getElementById("submitOrder");
    const spiceSelect = document.getElementById("spiceSelect");
    const quantityInput = document.getElementById("quantityInput");
    const increaseQty = document.getElementById("increaseQty");
    const decreaseQty = document.getElementById("decreaseQty");

    if (orderNowBtn && modal && closeModal) {
        orderNowBtn.addEventListener("click", function () {
            modal.classList.remove("hidden");
        });

        closeModal.addEventListener("click", function () {
            modal.classList.add("hidden");
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.classList.add("hidden");
            }
        });

        // Handle quantity increase
        increaseQty.addEventListener("click", function () {
            let qty = parseInt(quantityInput.value);
            if (qty < 100) {
                quantityInput.value = qty + 1;
            }
        });

        // Handle quantity decrease
        decreaseQty.addEventListener("click", function () {
            let qty = parseInt(quantityInput.value);
            if (qty > 1) {
                quantityInput.value = qty - 1;
            }
        });

        // Handle order submission
        submitOrderBtn.addEventListener("click", function () {
            const selectedSpice = spiceSelect.value;
            const selectedQuantity = quantityInput.value;

            if (!selectedSpice) {
                alert("Please select a spice before submitting your order.");
            } else {
                alert(`Order placed for: ${selectedQuantity} unit(s) of ${selectedSpice}`);
                modal.classList.add("hidden"); // Hide modal after submission
            }
        });
    } else {
        console.error("Modal elements not found! Check your HTML structure.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const submitOrderBtn = document.getElementById("submitOrder");
    const spiceSelect = document.getElementById("spiceSelect");
    const quantityInput = document.getElementById("quantityInput");
    const messageInput = document.getElementById("message");

    submitOrderBtn.addEventListener("click", function () {
        const selectedSpice = spiceSelect.value;
        const selectedQuantity = quantityInput.value;
        const userMessage = messageInput.value.trim();

        if (!selectedSpice) {
            alert("Please select a spice.");
            return;
        }

        if (!selectedQuantity || selectedQuantity < 1) {
            alert("Please enter a valid quantity.");
            return;
        }

        const message = `Hello! I would like to order:\n- Spice: ${selectedSpice}\n- Quantity: ${selectedQuantity} kg\n- Message: ${userMessage || "No additional message."}`;

        // URL encode the message
        const encodedMessage = encodeURIComponent(message);

        // Facebook Messenger URL with pre-filled message
        const facebookPage = "61571030908344"; // Replace with your actual Facebook page ID or username

        const messengerUrl = `https://m.me/${facebookPage}?ref=${encodedMessage}`;

        // Redirect to Messenger with the message
        window.location.href = messengerUrl;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll("#testimonialContainer div");
    const testimonialContainer = document.getElementById("testimonialContainer");

    function updateTestimonial() {
        testimonialContainer.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }

    document.getElementById("prevTestimonial").addEventListener("click", () => {
        currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
        updateTestimonial();
    });

    document.getElementById("nextTestimonial").addEventListener("click", () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    });

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }, 5000);
});


function toggleFAQ(faqId) {
    const faqContent = document.getElementById(faqId);
    const icon = document.getElementById(`icon${faqId.slice(-1)}`); // Grab icon based on the FAQ ID number

    // Toggle the visibility of the FAQ content
    faqContent.classList.toggle('hidden');
    
    // Rotate the icon (from down to up and vice versa)
    icon.classList.toggle('rotate-180');
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            document.getElementById("success-message").style.display = "block";
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    }).catch(error => alert("Error: " + error));
});



