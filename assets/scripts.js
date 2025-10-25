/* ========================================
   WAKE UP COFFEE SHOP - CONSOLIDATED SCRIPTS
   ========================================
   This file contains all JavaScript for all pages of the Wake Up coffee shop website.
   Each section is clearly marked with comments for easy navigation.
*/

/* ========================================
   UTILITY FUNCTIONS (All Pages)
   ======================================== */

/**
 * Add load event handler
 * @param {Function} func - Function to execute on load
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    const menuContainer = document.querySelector('.wp-block-navigation__responsive-container');
    
    if (menuContainer) {
        const isOpen = menuContainer.style.display === 'block';
        
        if (isOpen) {
            menuContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else {
            menuContainer.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    const menuContainer = document.querySelector('.wp-block-navigation__responsive-container');
    if (menuContainer) {
        menuContainer.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/**
 * Fade in element on scroll
 * @param {HTMLElement} element - Element to fade in
 */
function fadeInOnScroll(element) {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('fade-in');
    }
}

/* ========================================
   WORDPRESS EMOJI SETTINGS (All Pages)
   ======================================== */

window._wpemojiSettings = {
    "baseUrl": "https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/72x72/",
    "ext": ".png",
    "svgUrl": "https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "/wp-includes/js/wp-emoji-release.min.js?m=1751981882i&ver=6.8.2-alpha-60439"
    }
};

/* ========================================
   EMOJI SUPPORT DETECTION (All Pages)
   ======================================== */

/*! This file is auto-generated */
!function(s,n){
    var o,i,e;
    
    function c(e){
        try{
            var t={supportTests:e,timestamp:(new Date).valueOf()};
            sessionStorage.setItem(o,JSON.stringify(t))
        }catch(e){}
    }
    
    function p(e,t,n){
        e.clearRect(0,0,e.canvas.width,e.canvas.height),
        e.fillText(t,0,0);
        var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),
        a=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));
        return t.every(function(e,t){return e===a[t]})
    }
    
    function u(e,t){
        e.clearRect(0,0,e.canvas.width,e.canvas.height),
        e.fillText(t,0,0);
        for(var n=e.getImageData(16,16,1,1),a=0;a<n.data.length;a++)
            if(0!==n.data[a])return!1;
        return!0
    }
    
    function f(e,t,n,a){
        switch(t){
            case"flag":
                return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
            case"emoji":
                return!a(e,"\ud83e\udedf")
        }
        return!1
    }
    
    function g(e,t,n,a){
        var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):s.createElement("canvas"),
        o=r.getContext("2d",{willReadFrequently:!0}),
        i=(o.textBaseline="top",o.font="600 32px Arial",{});
        return e.forEach(function(e){i[e]=t(o,e,n,a)}),i
    }
    
    function t(e){
        var t=s.createElement("script");
        t.src=e,t.defer=!0,s.head.appendChild(t)
    }
    
    "undefined"!=typeof Promise&&(
        o="wpEmojiSettingsSupports",
        i=["flag","emoji"],
        n.supports={everything:!0,everythingExceptFlag:!0},
        e=new Promise(function(e){s.addEventListener("DOMContentLoaded",e,{once:!0})}),
        new Promise(function(t){
            var n=function(){
                try{
                    var e=JSON.parse(sessionStorage.getItem(o));
                    if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)
                        return e.supportTests
                }catch(e){}
                return null
            }();
            if(!n){
                if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)
                    try{
                        var e="postMessage("+g.toString()+"("+[JSON.stringify(i),f.toString(),p.toString(),u.toString()].join(",")+"));",
                        a=new Blob([e],{type:"text/javascript"}),
                        r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});
                        return void(r.onmessage=function(e){c(n=e.data),r.terminate(),t(n)})
                    }catch(e){}
                c(n=g(i,f,p,u))
            }
            t(n)
        }).then(function(e){
            for(var t in e)
                n.supports[t]=e[t],
                n.supports.everything=n.supports.everything&&n.supports[t],
                "flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);
            n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,
            n.DOMReady=!1,
            n.readyCallback=function(){n.DOMReady=!0}
        }).then(function(){return e}).then(function(){
            var e;
            n.supports.everything||(
                n.readyCallback(),
                (e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji))
            )
        })
    )
}((window,document),window._wpemojiSettings);

/* ========================================
   DEBUG BAR FUNCTIONALITY (All Pages)
   ======================================== */

(function() {
    function init() {
        // debug bar extra
        window.clickDebugLink = function( parentId, obj ) {
            if ( ! window.jQuery ) {
                return;
            }
            var $ = window.jQuery;

            $( '#' + parentId ).children( 'div' ).hide();

            document.getElementById( obj.href.substr( obj.href.indexOf( '#' ) + 1 ) ).style.display = 'block';
            $( obj.href.substr( obj.href.indexOf( '#' ) ) ).show()

            $( obj ).parent().addClass( 'current' ).siblings( 'li' ).removeClass( 'current' );

            return false;
        };
    }

    if ( document.readyState !== 'loading' ) {
        init();
    } else {
        document.addEventListener( 'DOMContentLoaded', init );
    }
})();

/* ========================================
   GRAVATAR HOVERCARDS (All Pages)
   ======================================== */

(function() {
    function init() {
        if ( typeof Gravatar === 'undefined' ) {
            return;
        }

        if ( typeof Gravatar.init !== 'function' ) {
            return;
        }

        Gravatar.profile_cb = function ( hash, id ) {
            WPGroHo.syncProfileData( hash, id );
        };

        Gravatar.my_hash = WPGroHo.my_hash;
        Gravatar.init(
            'body',
            '#wp-admin-bar-my-account',
            {
                i18n: {
                    'Edit your profile →': 'Edit your profile →',
                    'View profile →': 'View profile →',
                    'Contact': 'Contact',
                    'Send money': 'Send money',
                    'Sorry, we are unable to load this Gravatar profile.': 'Sorry, we are unable to load this Gravatar profile.',
                    'Gravatar not found.': 'Gravatar not found.',
                    'Too Many Requests.': 'Too Many Requests.',
                    'Internal Server Error.': 'Internal Server Error.',
                    'Is this you?': 'Is this you?',
                    'Claim your free profile.': 'Claim your free profile.',
                    'Email': 'Email',
                    'Home Phone': 'Home Phone',
                    'Work Phone': 'Work Phone',
                    'Cell Phone': 'Cell Phone',
                    'Contact Form': 'Contact Form',
                    'Calendar': 'Calendar',
                },
            }
        );
    }

    if ( document.readyState !== 'loading' ) {
        init();
    } else {
        document.addEventListener( 'DOMContentLoaded', init );
    }
})();

/* ========================================
   ACTION BAR FUNCTIONALITY (All Pages)
   ======================================== */

window.addEventListener( "DOMContentLoaded", function( event ) {
    var link = document.createElement( "link" );
    link.href = "/wp-content/mu-plugins/actionbar/actionbar.css?v=20250116";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.head.appendChild( link );

    var script = document.createElement( "script" );
    script.src = "/wp-content/mu-plugins/actionbar/actionbar.js?v=20250204";
    document.body.appendChild( script );
});

/* ========================================
   WORDPRESS REBLOG FUNCTIONALITY (All Pages)
   ======================================== */

(function () {
    var wpcom_reblog = {
        source: 'toolbar',

        toggle_reblog_box_flair: function (obj_id, post_id) {

            // Go to site selector. This will redirect to their blog if they only have one.
            const postEndpoint = `https://wordpress.com/post`;

            // Ideally we would use the permalink here, but fortunately this will be replaced with the 
            // post permalink in the editor.
            const originalURL = `${ document.location.href }?page_id=${ post_id }`; 
            
            const url =
                postEndpoint +
                '?url=' +
                encodeURIComponent( originalURL ) +
                '&is_post_share=true' +
                '&v=5';

            const redirect = function () {
                if (
                    ! window.open( url, '_blank' )
                ) {
                    location.href = url;
                }
            };

            if ( /Firefox/.test( navigator.userAgent ) ) {
                setTimeout( redirect, 0 );
            } else {
                redirect();
            }
        },
    };

    window.wpcom_reblog = wpcom_reblog;
})();

/* ========================================
   SKIP LINK FUNCTIONALITY (All Pages)
   ======================================== */

(function() {
    var skipLinkTarget = document.querySelector( 'main' ),
        sibling,
        skipLinkTargetID,
        skipLink;

    // Early exit if a skip-link target can't be located.
    if ( ! skipLinkTarget ) {
        return;
    }

    /*
     * Get the site wrapper.
     * The skip-link will be injected in the beginning of it.
     */
    sibling = document.querySelector( '.wp-site-blocks' );

    // Early exit if the root element was not found.
    if ( ! sibling ) {
        return;
    }

    // Get the skip-link target's ID, and generate one if it doesn't exist.
    skipLinkTargetID = skipLinkTarget.id;
    if ( ! skipLinkTargetID ) {
        skipLinkTargetID = 'wp--skip-link--target';
        skipLinkTarget.id = skipLinkTargetID;
    }

    // Create the skip link.
    skipLink = document.createElement( 'a' );
    skipLink.classList.add( 'skip-link', 'screen-reader-text' );
    skipLink.id = 'wp-skip-link';
    skipLink.href = '#' + skipLinkTargetID;
    skipLink.innerText = 'Skip to content';

    // Inject the skip link.
    sibling.parentElement.insertBefore( skipLink, sibling );
}());

/* ========================================
   HOME PAGE SPECIFIC FUNCTIONALITY
   ======================================== */

/**
 * Initialize home page specific functionality
 */
function initHomePage() {
    console.log('Home page initialized');
    
    // Initialize hero section animations
    initHeroAnimations();
    
    // Initialize scroll effects
    initScrollEffects();
}

/**
 * Initialize hero section animations
 */
function initHeroAnimations() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        // Add fade-in animation to hero elements
        const heroElements = heroSection.querySelectorAll('h1, p, .wp-block-button');
        heroElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }
}

/**
 * Initialize scroll effects
 */
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all elements that should fade in on scroll
    const fadeElements = document.querySelectorAll('.feature-item, .wp-block-image, .wp-block-group');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

/* ========================================
   MENU PAGE SPECIFIC FUNCTIONALITY
   ======================================== */

/**
 * Initialize menu page specific functionality
 */
function initMenuPage() {
    console.log('Menu page initialized');
    
    // Initialize menu interactions
    initMenuInteractions();
}

/**
 * Initialize menu interactions
 */
function initMenuInteractions() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.transform = '';
        });
    });
}

/* ========================================
   GALLERY PAGE SPECIFIC FUNCTIONALITY
   ======================================== */

/**
 * Initialize gallery page specific functionality
 */
function initGalleryPage() {
    console.log('Gallery page initialized');
    
    // Initialize gallery lightbox
    initGalleryLightbox();
    
    // Initialize lazy loading
    initLazyLoading();
}

/**
 * Initialize gallery lightbox functionality
 */
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });
}

/**
 * Open lightbox with image
 * @param {string} src - Image source
 * @param {string} alt - Image alt text
 */
function openLightbox(src, alt) {
    // Create lightbox overlay
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `;
    
    // Create image
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        background: none;
        border: none;
        color: white;
        font-size: 40px;
        cursor: pointer;
        z-index: 10001;
    `;
    
    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    
    // Close lightbox
    function closeLightbox() {
        document.body.removeChild(overlay);
    }
    
    overlay.addEventListener('click', closeLightbox);
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/* ========================================
   EVENTS PAGE SPECIFIC FUNCTIONALITY
   ======================================== */

/**
 * Initialize events page specific functionality
 */
function initEventsPage() {
    console.log('Events page initialized');
    
    // Initialize event interactions
    initEventInteractions();
    
    // Initialize event filtering
    initEventFiltering();
}

/**
 * Initialize event interactions
 */
function initEventInteractions() {
    const eventItems = document.querySelectorAll('.event-item');
    
    eventItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

/**
 * Initialize event filtering functionality
 */
function initEventFiltering() {
    // This would be implemented if filtering controls are added
    console.log('Event filtering initialized');
}

/* ========================================
   CONTACT PAGE SPECIFIC FUNCTIONALITY
   ======================================== */

/**
 * Initialize contact page specific functionality
 */
function initContactPage() {
    console.log('Contact page initialized');
    
    // Initialize contact form enhancements
    initContactFormEnhancements();
    
    // Initialize form validation
    initFormValidation();
}

/**
 * Initialize contact form enhancements
 */
function initContactFormEnhancements() {
    const contactForm = document.querySelector('.wp-block-jetpack-contact-form');
    
    if (contactForm) {
        // Add form validation feedback
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

/**
 * Initialize form validation
 */
function initFormValidation() {
    const form = document.querySelector('.wp-block-jetpack-contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
}

/**
 * Validate individual form field
 * @param {HTMLElement} field - Form field to validate
 */
function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    
    if (isRequired && !value) {
        showFieldError(field, 'This field is required.');
        return false;
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address.');
        return false;
    } else {
        clearFieldError(field);
        return true;
    }
}

/**
 * Show field error message
 * @param {HTMLElement} field - Form field
 * @param {string} message - Error message
 */
function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#d63638';
    errorDiv.style.fontSize = '14px';
    errorDiv.style.marginTop = '5px';
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#d63638';
}

/**
 * Clear field error message
 * @param {HTMLElement} field - Form field
 */
function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '';
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Handle contact form submission
 * @param {Event} event - Form submit event
 */
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

/* ========================================
   PAGE INITIALIZATION (All Pages)
   ======================================== */

/**
 * Initialize page based on current page
 */
function initializePage() {
    const body = document.body;
    
    if (body.classList.contains('home-page') || window.location.pathname === '/' || window.location.pathname.includes('index')) {
        initHomePage();
    } else if (body.classList.contains('menu-page') || window.location.pathname.includes('menu')) {
        initMenuPage();
    } else if (body.classList.contains('gallery-page') || window.location.pathname.includes('gallery')) {
        initGalleryPage();
    } else if (body.classList.contains('events-page') || window.location.pathname.includes('events')) {
        initEventsPage();
    } else if (body.classList.contains('contact-page') || window.location.pathname.includes('contact')) {
        initContactPage();
    }
}

/* ========================================
   EVENT LISTENERS (All Pages)
   ======================================== */

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    
    // Initialize mobile menu
    const menuButton = document.querySelector('.wp-block-navigation__responsive-container-open');
    const closeButton = document.querySelector('.wp-block-navigation__responsive-container-close');
    const menuContainer = document.querySelector('.wp-block-navigation__responsive-container');
    
    if (menuButton) {
        menuButton.addEventListener('click', toggleMobileMenu);
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu when clicking outside
    if (menuContainer) {
        menuContainer.addEventListener('click', function(event) {
            if (event.target === menuContainer) {
                closeMobileMenu();
            }
        });
    }
    
    // Initialize scroll effects for all pages
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.wp-block-image, .wp-block-group');
        elements.forEach(element => {
            fadeInOnScroll(element);
        });
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        const menuContainer = document.querySelector('.wp-block-navigation__responsive-container');
        if (menuContainer) {
            menuContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

// Handle escape key for mobile menu
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const menuContainer = document.querySelector('.wp-block-navigation__responsive-container');
        if (menuContainer && menuContainer.style.display === 'block') {
            closeMobileMenu();
        }
    }
});
