# Tabs Interface

A responsive and interactive tabbed interface built with HTML, CSS, and JavaScript.

## Features

- **4 Interactive Tabs**: First Tab, Second Tab, Third Tab, and Fourth Tab
- **Default Active State**: First tab is active by default
- **Smooth Animations**: Fade-in animation when switching between tabs
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Modern design with smooth transitions and hover effects
- **Easy to Use**: Click any tab to view its content

## Files

- `index.html` - Main HTML structure with tab buttons and content sections
- `style.css` - Styling with responsive breakpoints and animations
- `script.js` - JavaScript functionality for tab switching

## How It Works

1. **HTML Structure**: 
   - Tab buttons are created using `<button>` elements with `data-tab` attributes
   - Content sections are `<div>` elements with corresponding IDs

2. **CSS Styling**:
   - Active tabs show a bottom border and dark text color
   - Inactive tabs appear grayed out
   - Content sections fade in when activated
   - Fully responsive with media queries

3. **JavaScript Functionality**:
   - Event listeners on tab buttons detect clicks
   - Removes active class from all tabs and contents
   - Adds active class to clicked tab and corresponding content

## Usage

Simply open `index.html` in your web browser. Click on any tab header to switch between content sections.

## Customization

You can easily customize:
- **Tab Labels**: Edit the button text in the HTML
- **Tab Content**: Modify the content inside each tab-content div
- **Colors**: Update the CSS variables and color values
- **Animation Speed**: Adjust the transition timing in CSS

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Responsive Breakpoints

- **Desktop**: Full layout (>768px)
- **Tablet**: Medium layout (481px - 768px)
- **Mobile**: Compact layout (<480px)
