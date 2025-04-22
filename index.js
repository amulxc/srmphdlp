$(document).ready(function() {
    // Toggle dropdown content when header is clicked
    $('.dropdown-header').on('click', function() {
        const panel = $(this).parent();
        
        // If this panel is already active, close it
        if (panel.hasClass('active')) {
            panel.removeClass('active');
        } else {
            // Close all other panels and open this one
            $('.dropdown-panel').removeClass('active');
            panel.addClass('active');
        }
    });
    
    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });

    // Ensure the first panel is active on page load
    // This runs before any user interaction
    if ($('.panel-collapse.in').length === 0) {
        $('#collapseProgram').addClass('in');
        $('#headingProgram').addClass('active');
    } else {
        // If a panel is already open, ensure its heading has the active class
        $('.panel-collapse.in').each(function() {
            const headingId = $(this).attr('id').replace('collapse', 'heading');
            $('#' + headingId).addClass('active');
        });
    }

    // Prerequisites Section Accordion Functionality
    $('.panel-heading').on('click', function() {
        const panelBody = $(this).next('.panel-collapse');
        const isOpen = panelBody.hasClass('in');
        
        // Only allow closing if there's another panel open
        if (isOpen && $('.panel-collapse.in').length > 1) {
            panelBody.removeClass('in');
            $(this).removeClass('active');
        } else if (!isOpen) {
            // Close all open panels
            $('.panel-collapse.in').removeClass('in');
            $('.panel-heading').removeClass('active');
            
            // Open this panel
            panelBody.addClass('in');
            $(this).addClass('active');
        }
    });

    // Handle eligibility link click
    $('#eligibilityLink').on('click', function(e) {
        e.preventDefault();
        
        // First scroll to the prerequisites section
        $('html, body').animate({
            scrollTop: $('#prerequisites').offset().top - 70
        }, 800, function() {
            // Close all panels
            $('.panel-collapse').removeClass('in');
            $('.panel-heading').removeClass('active');
            
            // Open the eligibility panel
            $('#collapseEligibility').addClass('in');
            $('#headingEligibility').addClass('active');
        });
    });

    // Handle apply link click
    $('#applyLink').on('click', function(e) {
        e.preventDefault();
        
        // First scroll to the prerequisites section
        $('html, body').animate({
            scrollTop: $('#prerequisites').offset().top - 70
        }, 800, function() {
            // Close all panels
            $('.panel-collapse').removeClass('in');
            $('.panel-heading').removeClass('active');
            
            // Open the apply panel
            $('#collapseApply').addClass('in');
            $('#headingApply').addClass('active');
        });
    });

    // Logo carousel initialization (for Global Academic Collaborations section)
    $(".logo-carousel-four").owlCarousel({
        loop: true,
        margin: 16,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        responsiveClass: true,
        nav: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        responsive: {
            0: {
                items: 2,
                margin: 16,
                autoplayTimeout: 2000
            },
            480: {
                items: 2,
                margin: 16,
                autoplayTimeout: 2000
            },
            768: {
                items: 3,
                margin: 20,
                autoplayTimeout: 2000
            },
            992: {
                items: 4,
                margin: 25,
                autoplayTimeout: 2000
            },
            1200: {
                items: 5,
                margin: 30,
                autoplayTimeout: 2000
            }
        }
    });

    // Mobile navigation toggler
    const toggler = document.querySelector(".navbar-toggler");
    const collapse = document.querySelector(".navbar-collapse");

    if (toggler && collapse) {
        toggler.addEventListener("click", function () {
            collapse.classList.toggle("show");
        });

        // Auto-close navbar on link click (for mobile)
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                collapse.classList.remove("show");
            });
        });
    }
});
