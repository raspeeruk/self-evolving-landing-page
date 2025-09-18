// Alvaro Lobato - Industrial Automation & Business Intelligence
// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ accordions
    initFAQAccordions();
    
    // Initialize pricing tabs
    initPricingTabs();
    
    // Initialize ROI calculator
    initROICalculator();
    
    // Initialize contact form
    initContactForm();
});

// FAQ Accordions
function initFAQAccordions() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Update the icon
            const icon = item.querySelector('.faq-toggle i');
            if (item.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
            
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.faq-toggle i');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });
        });
    });
}

// Pricing Tabs
function initPricingTabs() {
    const tabs = document.querySelectorAll('.pricing-tab');
    const contents = document.querySelectorAll('.pricing-content');
    
    if (!tabs.length || !contents.length) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all content sections
            contents.forEach(content => content.classList.remove('active'));
            
            // Show the corresponding content
            const tabId = tab.getAttribute('data-tab');
            const activeContent = document.getElementById(`${tabId}-pricing`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
}

// ROI Calculator
function initROICalculator() {
    const calculateBtn = document.getElementById('calculate-roi');
    
    if (!calculateBtn) return;
    
    calculateBtn.addEventListener('click', calculateROI);
}

function calculateROI() {
    // Get input values
    const downtimeHours = parseFloat(document.getElementById('downtime-hours').value) || 0;
    const downtimeCost = parseFloat(document.getElementById('downtime-cost').value) || 0;
    const efficiencyImprovement = parseFloat(document.getElementById('efficiency-improvement').value) || 0;
    const solutionCost = parseFloat(document.getElementById('solution-cost').value) || 0;
    
    // Calculate savings
    const monthlySavings = (downtimeHours * downtimeCost * (efficiencyImprovement / 100));
    const annualSavings = monthlySavings * 12;
    
    // Calculate payback period (in months)
    const paybackPeriod = solutionCost / monthlySavings;
    
    // Calculate first year ROI
    const firstYearROI = ((annualSavings - solutionCost) / solutionCost) * 100;
    
    // Update results
    document.getElementById('monthly-savings').textContent = `€${monthlySavings.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
    document.getElementById('annual-savings').textContent = `€${annualSavings.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
    document.getElementById('payback-period').textContent = `${paybackPeriod.toLocaleString(undefined, {maximumFractionDigits: 1})} months`;
    document.getElementById('first-year-roi').textContent = `${firstYearROI.toLocaleString(undefined, {maximumFractionDigits: 0})}%`;
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const company = document.getElementById('company').value;
        const message = document.getElementById('message').value;
        
        // Validate form (simple validation)
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // In a real implementation, you would send this data to a server
        // For this demo, we'll just show a success message
        alert(`Thank you for your message, ${name}! We will get back to you soon.`);
        
        // Reset the form
        contactForm.reset();
    });
}

// Testimonial Slider (if needed in the future)
function initTestimonialSlider() {
    // This would be implemented if a slider library is added
    // For now, we're using static testimonials
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (for responsive design)
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (!menuToggle || !nav) return;
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}