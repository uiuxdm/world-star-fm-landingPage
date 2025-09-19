// Navbar scroll effects
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const desktopNavbar = document.getElementById('desktopNavbar');
    const mobileNavbar = document.getElementById('mobileNavbar');
    const bottomButtons = document.getElementById('bottomButtons');
    const logoImage = document.getElementById('company_logo');


    // Desktop navbar scroll effect
    if (window.innerWidth > 1024) {
        if (scrollTop > 100) {
            desktopNavbar.classList.add('scrolled');
            logoImage.src = './website-assets/images/landing-page/company-logo.svg'
        } else {
            desktopNavbar.classList.remove('scrolled');
            logoImage.src = './website-assets/images/landing-page/WorldStarFMwhiteLogo.png'

        }
    } else {
        // Mobile navbar scroll effect
        if (scrollTop > 50) {
            mobileNavbar.classList.add('scrolled');
        } else {
            mobileNavbar.classList.remove('scrolled');
        }

        // Show/hide bottom buttons based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down
            bottomButtons.style.transform = 'translateY(0)';
            bottomButtons.style.opacity = '1';
        } else if (scrollTop < 100) {
            // Near top of page
            bottomButtons.style.transform = 'translateY(100%)';
            bottomButtons.style.opacity = '0';
        }
    }

    lastScrollTop = scrollTop;
});

// Handle window resize
window.addEventListener('resize', function () {
    const bottomButtons = document.getElementById('bottomButtons');

    if (window.innerWidth > 1024) {
        bottomButtons.style.transform = 'translateY(100%)';
        bottomButtons.style.opacity = '0';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize bottom buttons state
document.addEventListener('DOMContentLoaded', function () {
    const bottomButtons = document.getElementById('bottomButtons');
    bottomButtons.style.transform = 'translateY(100%)';
    bottomButtons.style.opacity = '0';
    bottomButtons.style.transition = 'all 0.3s ease';
});




// Initialize Swiper
var swiper = new Swiper('.servicesSwiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 3.3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3.3,
            spaceBetween: 30,
        }
    }
});

// Add smooth hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Button click effects
document.querySelectorAll('.primary-button button mb-4').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.height, rect.width);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);

        // Simulate action
        console.log('Contact button clicked!');
    });
});




function openUniqueContactModal() {
    document.getElementById('uniqueContactModalOverlay').classList.remove('unique-contact-hidden');

}

function closeUniqueContactModal() {
    document.getElementById('uniqueContactModalOverlay').classList.add('unique-contact-hidden');
    document.body.style.overflow = 'auto';
}


function send(event) {
    event.preventDefault();

    // Clear previous errors
    clearErrors('uniqueContactForm');

    // Collect and trim field values
    const name = $('#txt-name').val().trim();
    const phone = $('#txt-phone').val().trim();
    const currentCompany = $('#txt-companyName').val().trim();
    const message = $('#txt-message').val().trim();
    const location = $('#txt-location').val().trim();

    let isValid = true;

    // Validate Name
    if (!name) {
        showFieldError('txt-name', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showFieldError('txt-name', 'Name must be at least 2 characters long');
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        showFieldError('txt-name', 'Name should only contain letters and spaces');
        isValid = false;
    }

    // Validate Phone
    if (!phone) {
        showFieldError('txt-phone', 'Mobile number is required');
        isValid = false;
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(phone)) {
        showFieldError('txt-phone', 'Please enter a valid mobile number');
        isValid = false;
    } else if (phone.replace(/\D/g, '').length < 7) {
        showFieldError('txt-phone', 'Mobile number must be at least 7 digits');
        isValid = false;
    }

    // Validate Company Name
    if (!currentCompany) {
        showFieldError('txt-companyName', 'Company name is required');
        isValid = false;
    } else if (currentCompany.length < 2) {
        showFieldError('txt-companyName', 'Company name must be at least 2 characters long');
        isValid = false;
    }

    // Validate Location
    if (!location) {
        showFieldError('txt-location', 'Location is required');
        isValid = false;
    } else if (location.length < 2) {
        showFieldError('txt-location', 'Location must be at least 2 characters long');
        isValid = false;
    }

    // Stop if validation fails
    if (!isValid) {
        return;
    }

    // Build your payload
    var data = {
        Name: name,
        CurrentCompany: currentCompany,
        Location: location,
        Phone: phone,
        Message: message,
        MailSettingsID: 18,
        CompanyURL: 'worldstarfm.com',
        CompanyName: 'worldstarfmlandingppage',
        BgColor: '#001E61',
        MiddleName: ''
    };

    // Post data to the server
    Post("https://panelcontrol.progbiz.io/api/ContactUs/send-client-mail-custom", JSON.stringify(data), 'Success');
}

function sendSubmit(event, formType) {
    event.preventDefault();

    // Clear previous errors
    clearErrors('contactForm');

    // Collect and trim field values
    const name = $('#userName').val().trim();
    const phone = $('#userPhone').val().trim();
    const currentCompany = $('#companyName').val().trim();
    const message = $('#userMessage').val().trim();
    const location = $('#userLocation').val().trim();

    let isValid = true;

    console.log(9999, name, phone, currentCompany, message, location);

    if (formType == 'topForm') {
        // Validate Name
        if (!name) {
            showFieldError('userName', 'Name is required');
            isValid = false;
        } else if (name.length < 2) {
            showFieldError('userName', 'Name must be at least 2 characters long');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            showFieldError('userName', 'Name should only contain letters and spaces');
            isValid = false;
        }

        // Validate Phone
        if (!phone) {
            showFieldError('userPhone', 'Mobile number is required');
            isValid = false;
        } else if (!/^\+?[\d\s\-\(\)]+$/.test(phone)) {
            showFieldError('userPhone', 'Please enter a valid mobile number');
            isValid = false;
        } else if (phone.replace(/\D/g, '').length < 10) {
            showFieldError('userPhone', 'Mobile number must be at least 10 digits');
            isValid = false;
        }

        // ✅ Validate Company Name
        if (!currentCompany) {
            showFieldError('companyName', 'Company name is required');
            isValid = false;
        } else if (currentCompany.length < 2) {
            showFieldError('companyName', 'Company name must be at least 2 characters long');
            isValid = false;
        }

        // ✅ Validate Location
        if (!location) {
            showFieldError('userLocation', 'Location is required');
            isValid = false;
        } else if (location.length < 2) {
            showFieldError('userLocation', 'Location must be at least 2 characters long');
            isValid = false;
        }
    } else {
        if (!name) {
            showFieldError('Bottom-userName', 'Name is required');
            isValid = false;
        } else if (name.length < 2) {
            showFieldError('Bottom-userName', 'Name must be at least 2 characters long');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            showFieldError('Bottom-userName', 'Name should only contain letters and spaces');
            isValid = false;
        }

        // Validate Phone
        if (!phone) {
            showFieldError('Bottom-userPhone', 'Mobile number is required');
            isValid = false;
        } else if (!/^\+?[\d\s\-\(\)]+$/.test(phone)) {
            showFieldError('Bottom-userPhone', 'Please enter a valid mobile number');
            isValid = false;
        } else if (phone.replace(/\D/g, '').length < 10) {
            showFieldError('Bottom-userPhone', 'Mobile number must be at least 10 digits');
            isValid = false;
        }

        // ✅ Validate Company Name
        if (!currentCompany) {
            showFieldError('Bottom-companyName', 'Company name is required');
            isValid = false;
        } else if (currentCompany.length < 2) {
            showFieldError('Bottom-companyName', 'Company name must be at least 2 characters long');
            isValid = false;
        }

        // ✅ Validate Location
        if (!location) {
            showFieldError('Bottom-userLocation', 'Location is required');
            isValid = false;
        } else if (location.length < 2) {
            showFieldError('Bottom-userLocation', 'Location must be at least 2 characters long');
            isValid = false;
        }
    }

    // Stop if validation fails
    if (!isValid) {
        return;
    }

    // Build your payload
    var data = {
        Name: name,
        CurrentCompany: currentCompany,
        Location: location,
        Phone: phone,
        Message: message,
        MailSettingsID: 18,
        CompanyURL: 'worldstarfm.com',
        CompanyName: 'worldstarfmlandingppage',
        BgColor: '#001E61',
        MiddleName: ''
    };

    // Post data to the server
    Post("https://panelcontrol.progbiz.io/api/ContactUs/send-client-mail-custom", JSON.stringify(data), 'Success');
}

// Helper function to show field-specific errors
function showFieldError(fieldId, errorMessage) {
    const field = $('#' + fieldId);

    // Remove any existing error message for this field first
    removeFieldError(fieldId);

    // Add error class to field
    field.addClass('error');

    // Create and append error message right after the field
    const errorDiv = $('<div id="' + fieldId + '_error" class="error-message" style="color: #dc3545; font-size: 12px; margin-top: 4px;">' + errorMessage + '</div>');
    field.after(errorDiv);
}

// Helper function to remove error for a specific field
function removeFieldError(fieldId) {
    const field = $('#' + fieldId);

    // Remove error message
    $('#' + fieldId + '_error').remove();

    // Remove error class
    field.removeClass('error');
}

// Improved function to clear all errors properly
function clearErrors(formId) {
    // Method 1: Clear all error messages across the entire document
    $('.error-message').remove();
    $('[id$="_error"]').remove();

    // Method 2: Remove error classes from all form controls
    $('.form-control, .unique-contact-form-control, input, select, textarea').removeClass('error');

    // Method 3: If formId is provided, clear errors within that specific form
    if (formId) {
        $('#' + formId + ' .error').removeClass('error');
        $('#' + formId + ' .error-message').remove();
        $('#' + formId + ' [id$="_error"]').remove();
    }

    // Method 4: Clear any remaining error elements by common patterns
    $('[class*="error"]').filter(function () {
        return this.className.includes('error-message') || this.id.includes('_error');
    }).remove();
}

// Enhanced function to clear all errors on page (alternative method)
function clearAllErrors() {
    // Remove all error messages
    $('.error-message, [id$="_error"], [class*="error-message"]').remove();

    // Remove error classes from all inputs
    $('input, select, textarea').removeClass('error');

    // Remove error styling classes
    $('.form-control, .unique-contact-form-control').removeClass('error');
}

// Optional: Add CSS for error styling
const errorStyles = `
.form-control.error,
.unique-contact-form-control.error {
    border-color: #dc3545 !important;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
}

.error-message {
    color: #dc3545;
    font-size: 12px;
    margin-top: 4px;
    display: block;
}

input.error,
select.error,
textarea.error {
    border-color: #dc3545 !important;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
}
`;

// Inject error styles if they don't exist
if (!$('#error-styles').length) {
    $('head').append('<style id="error-styles">' + errorStyles + '</style>');
}

// Optional: Real-time error clearing on input
$(document).ready(function () {
    // Clear individual field errors when user starts typing
    $(document).on('input keyup change', 'input, select, textarea', function () {
        const fieldId = $(this).attr('id');
        if (fieldId && $(this).hasClass('error')) {
            removeFieldError(fieldId);
        }
    });
});
function Post(url, data, successFun) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        },
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            window[successFun](result); // Call success function
        },
        error: function (result) {
            showMessage("Error in submission. Please try again.", 'error');
        }
    });
}

function Success(result) {
    showMessage("Form submitted successfully.", 'success');
    closeUniqueContactModal();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'gadformsubmitting'
    });
    ClearFields();

}



function ClearFields() {
    $('#userName').val('');
    $('#userPhone').val('');
    $('#companyName').val('');
    $('#userMessage').val('');
    $('#userLocation').val('');
    $('#txt-name').val('');
    $('#txt-phone').val('');
    $('#txt-companyName').val('');
    $('#txt-message').val('');
    $('#txt-location').val('');
}

// Show message function
function showMessage(message, type = 'info') {
    $('.form-message').remove();

    const messageClass = type === 'success' ? 'alert-success' :
        type === 'error' ? 'alert-danger' : 'alert-info';

    const messageHtml = `
      <div class="form-message alert ${messageClass}" style="
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        min-width: 90%;
        max-width: 400px;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        font-size: 16px;
        text-align: center;
        background-color: ${type === 'success' ? '#d4edda' : '#f8d7da'};
        color: ${type === 'success' ? '#155724' : '#721c24'};
      ">
        ${message}
        <button type="button" class="close" style="
          position: absolute;
          top: 10px;
          right: 15px;
          border: none;
          background: none;
          font-size: 20px;
          cursor: pointer;
        " onclick="$(this).parent().remove()">×</button>
      </div>
    `;

    $('body').append(messageHtml);

    setTimeout(() => {
        $('.form-message').fadeOut(() => {
            $('.form-message').remove();
        });
    }, 10000);
}
