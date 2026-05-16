# Simple Tabs Component

A responsive and interactive tabbed interface built with HTML, CSS, and JavaScript. This project demonstrates basic DOM manipulation and event handling.

**Project URL:** [roadmap.sh/projects/simple-tabs](https://roadmap.sh/projects/simple-tabs)

**GitHub Repository:** [Rudrayadav07/DOM-Projects](https://github.com/Rudrayadav07/DOM-Projects)

## Project Requirements

This project satisfies the following requirements from roadmap.sh:

- ✅ Create a simple tab functionality using HTML, CSS, and JavaScript
- ✅ Implement four tabs with the first tab active by default
- ✅ Hide current tab content and display selected tab content on click
- ✅ Practice DOM manipulation and event handling
- ✅ Implement click event listeners for tabs
- ✅ Manipulate DOM classes to show/hide content

## Features

- **4 Interactive Tabs**: First Tab, Second Tab, Third Tab, and Fourth Tab
- **Default Active State**: First tab is active by default
- **Smooth Animations**: Fade-in animation when switching between tabs
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Modern design with smooth transitions and hover effects
- **DOM Manipulation**: Efficient class toggling and element selection

## Files

- `index.html` - Main HTML structure with tab buttons and content sections
- `style.css` - Styling with responsive breakpoints and animations
- `script.js` - JavaScript functionality for tab switching
- `README.md` - Project documentation

## Installation & Running

### Option 1: Direct File Access
1. Clone or download this repository
2. Navigate to the `tabs` folder
3. Open `index.html` in your web browser

### Option 2: Using a Local Server
1. Clone the repository:
   ```bash
   git clone https://github.com/Rudrayadav07/DOM-Projects.git
   ```

2. Navigate to the tabs folder:
   ```bash
   cd DOM-Projects/tabs
   ```

3. Start a local server (using Python):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

4. Open your browser and visit `http://localhost:8000`

### Option 3: Using Node.js HTTP Server
```bash
npm install -g http-server
http-server
```

## How It Works

### HTML Structure
- Tab buttons are created using `<button>` elements with `data-tab` attributes
- Content sections are `<div>` elements with corresponding IDs (tab1, tab2, tab3, tab4)
- Each button references a tab using the `data-tab` attribute

### CSS Styling
- Active tabs show a bottom border and dark text color
- Inactive tabs appear grayed out (color: #999)
- Content sections use CSS to hide/show based on the `active` class
- Fade-in animation applied when tabs become active
- Fully responsive with media queries

### JavaScript Functionality
- Event listeners on tab buttons detect click events
- Removes `active` class from all tabs and contents
- Adds `active` class to clicked button and corresponding content div
- Smooth transitions between tab states

## Usage

1. Open `index.html` in your browser
2. Click on any tab header to switch content
3. The corresponding content will fade in
4. First tab is active by default

## Customization

You can easily customize:
- **Tab Labels**: Edit the button text in the HTML
- **Tab Content**: Modify the content inside each tab-content div
- **Colors & Styles**: Update the CSS variables and color values
- **Animation Speed**: Adjust the transition timing in CSS (`animation: fadeIn 0.3s ease`)

## Browser Compatibility

Works on all modern browsers:
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Responsive Breakpoints

- **Desktop**: Full layout (>768px)
- **Tablet**: Medium layout (481px - 768px)
- **Mobile**: Compact layout (<480px)

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Flexbox, gradients, animations, and media queries
- **JavaScript (Vanilla)**: DOM manipulation and event handling
- **No Dependencies**: Pure JavaScript, no frameworks or libraries required

## Learning Outcomes

This project helps you practice:
- Selecting DOM elements with `querySelectorAll` and `getElementById`
- Adding event listeners with `addEventListener`
- Manipulating CSS classes with `classList` methods
- DOM traversal and manipulation
- Responsive design principles
- CSS animations and transitions

## License

This project is open source and available for educational purposes.

## Author

Created by [Rudrayadav07](https://github.com/Rudrayadav07)