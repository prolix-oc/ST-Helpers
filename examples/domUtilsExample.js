/**
 * DOM Utilities Example
 * Demonstrates DOM manipulation without jQuery
 * 
 * Note: This module is designed for browser environments.
 * The examples below show the API usage - they would work in a browser context.
 */

import DOMUtils from '../domUtils.js';

console.log('=== DOM Utilities Examples ===\n');

// ============================================================================
// ELEMENT CREATION
// ============================================================================
console.log('--- Element Creation ---');

/*
// Create a button with multiple options
const button = DOMUtils.createElement('button', {
  attrs: { 
    id: 'submit-btn',
    class: 'btn btn-primary',
    type: 'submit'
  },
  text: 'Submit Form',
  style: { 
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px'
  },
  data: { 
    action: 'submit',
    formId: 'user-form'
  }
});

// Create a container with child elements
const container = DOMUtils.createElement('div', {
  attrs: { class: 'container' },
  style: { padding: '20px' },
  children: [
    DOMUtils.createElement('h2', { text: 'Title' }),
    DOMUtils.createElement('p', { text: 'Content goes here' }),
    button
  ]
});
*/

console.log('createElement: Creates elements with attributes, styles, data, and children\n');

// ============================================================================
// ELEMENT SELECTION
// ============================================================================
console.log('--- Element Selection ---');

/*
// Query single element
const header = DOMUtils.query('#main-header');
const firstButton = DOMUtils.query('.btn');

// Query multiple elements (returns array, not NodeList)
const allButtons = DOMUtils.queryAll('.btn');
const listItems = DOMUtils.queryAll('li');

// Query with context
const menuItems = DOMUtils.queryAll('.menu-item', navElement);

// Create a cache for frequently accessed elements
const cache = DOMUtils.createQueryCache();
const cachedElement = cache.get('.frequently-accessed');
*/

console.log('query: Select single element');
console.log('queryAll: Select multiple elements (returns array)');
console.log('createQueryCache: Cache query results for performance\n');

// ============================================================================
// EVENT HANDLING
// ============================================================================
console.log('--- Event Handling ---');

/*
// Direct event listener
const cleanup1 = DOMUtils.on(button, 'click', (e) => {
  console.log('Button clicked!');
});

// Event delegation - efficient for dynamic content
const cleanup2 = DOMUtils.on(document, 'click', '.dynamic-button', (e) => {
  console.log('Delegated click:', e.target);
});

// One-time event listener
DOMUtils.once(button, 'click', () => {
  console.log('This will only fire once');
});

// Clean up event listeners
cleanup1(); // Removes the listener
cleanup2();

// Debounced event (waits for pause in events)
const searchInput = DOMUtils.query('#search');
const debouncedSearch = DOMUtils.debounce((e) => {
  console.log('Searching for:', e.target.value);
  // API call here
}, 300);
DOMUtils.on(searchInput, 'input', debouncedSearch);

// Throttled event (limits event rate)
const throttledScroll = DOMUtils.throttle(() => {
  console.log('Scroll position:', window.scrollY);
  // Update scroll indicator
}, 100);
DOMUtils.on(window, 'scroll', throttledScroll);
*/

console.log('on: Add event listener with optional delegation');
console.log('once: Add one-time event listener');
console.log('debounce: Delay execution until events stop');
console.log('throttle: Limit execution rate\n');

// ============================================================================
// CLASS MANIPULATION
// ============================================================================
console.log('--- Class Manipulation ---');

/*
// Add classes
DOMUtils.addClass(element, 'active');
DOMUtils.addClass(element, 'highlight', 'featured'); // Multiple classes

// Remove classes
DOMUtils.removeClass(element, 'inactive');
DOMUtils.removeClass(element, 'old', 'deprecated');

// Toggle class
DOMUtils.toggleClass(element, 'expanded');
DOMUtils.toggleClass(element, 'visible', true); // Force add
DOMUtils.toggleClass(element, 'visible', false); // Force remove

// Check if has class
if (DOMUtils.hasClass(element, 'active')) {
  console.log('Element is active');
}
*/

console.log('addClass: Add one or more classes');
console.log('removeClass: Remove one or more classes');
console.log('toggleClass: Toggle class with optional force');
console.log('hasClass: Check if element has class\n');

// ============================================================================
// STYLE MANIPULATION
// ============================================================================
console.log('--- Style Manipulation ---');

/*
// Set multiple styles
DOMUtils.setStyle(element, {
  color: 'red',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: '#f0f0f0'
});

// Get computed style
const color = DOMUtils.getStyle(element, 'color');
const fontSize = DOMUtils.getStyle(element, 'fontSize');

// Show/hide elements
DOMUtils.show(element); // display: block
DOMUtils.show(element, 'flex'); // display: flex
DOMUtils.hide(element); // display: none

// Toggle visibility
const isVisible = DOMUtils.toggle(element); // Returns visibility state
DOMUtils.toggle(element, 'inline-block'); // Custom display value
*/

console.log('setStyle: Set inline styles');
console.log('getStyle: Get computed style value');
console.log('show/hide/toggle: Control element visibility\n');

// ============================================================================
// ATTRIBUTE MANIPULATION
// ============================================================================
console.log('--- Attribute Manipulation ---');

/*
// Get attribute
const id = DOMUtils.attr(element, 'id');
const dataValue = DOMUtils.attr(element, 'data-value');

// Set single attribute
DOMUtils.attr(element, 'data-id', '123');
DOMUtils.attr(element, 'aria-label', 'Close button');

// Set multiple attributes
DOMUtils.attr(element, {
  'data-user': 'john',
  'data-role': 'admin',
  'aria-expanded': 'true'
});

// Remove attribute
DOMUtils.removeAttr(element, 'disabled');
DOMUtils.removeAttr(input, 'readonly');
*/

console.log('attr: Get or set attributes');
console.log('removeAttr: Remove attribute\n');

// ============================================================================
// DOM MANIPULATION
// ============================================================================
console.log('--- DOM Manipulation ---');

/*
// Remove element from DOM
DOMUtils.remove(element);
DOMUtils.remove('.old-element'); // By selector

// Empty element (remove all children)
DOMUtils.empty(container);
DOMUtils.empty('#content');
*/

console.log('remove: Remove element from DOM');
console.log('empty: Remove all child elements\n');

// ============================================================================
// POSITION AND DIMENSIONS
// ============================================================================
console.log('--- Position and Dimensions ---');

/*
// Get bounding rectangle
const rect = DOMUtils.getRect(element);
console.log('Dimensions:', rect.width, rect.height);
console.log('Position:', rect.top, rect.left);

// Get offset relative to document
const offset = DOMUtils.getOffset(element);
console.log('Offset from document:', offset.top, offset.left);

// Get distance to viewport edges
const viewportDist = DOMUtils.getDistanceToViewport(element);
console.log('Distance to top edge:', viewportDist.top);
console.log('Distance to right edge:', viewportDist.right);
console.log('Distance to bottom edge:', viewportDist.bottom);
console.log('Distance to left edge:', viewportDist.left);

// Get distance between two elements
const distance = DOMUtils.getDistanceBetween(element1, element2);
console.log('Horizontal distance:', distance.horizontal);
console.log('Vertical distance:', distance.vertical);
console.log('Diagonal distance:', distance.diagonal);

// Log comprehensive element measurements
const measurements = DOMUtils.logElementMeasurements(element, 'My Element');
// Outputs detailed console.group with all measurements
// Returns object with all measurement data
*/

console.log('getRect: Get element bounding rectangle');
console.log('getOffset: Get offset relative to document');
console.log('getDistanceToViewport: Get distances to viewport edges');
console.log('getDistanceBetween: Get distance between two elements');
console.log('logElementMeasurements: Log detailed measurements to console\n');

// ============================================================================
// SCROLLING
// ============================================================================
console.log('--- Scrolling ---');

/*
// Smooth scroll to element
DOMUtils.scrollTo({ 
  target: '#section-2',
  behavior: 'smooth',
  offset: -50 // Account for fixed header
});

// Scroll to specific position
DOMUtils.scrollTo({ 
  top: 500,
  behavior: 'smooth'
});

// Scroll within container
const scrollContainer = DOMUtils.query('.scroll-container');
DOMUtils.scrollTo({ 
  target: '#nested-element',
  container: scrollContainer
});
*/

console.log('scrollTo: Smooth scroll to element or position\n');

// ============================================================================
// VISIBILITY DETECTION
// ============================================================================
console.log('--- Visibility Detection ---');

/*
// Check if element is visible (async)
const isVisible = await DOMUtils.isVisible(element);
if (isVisible) {
  console.log('Element is in viewport');
}

// Check with threshold (50% visible)
const halfVisible = await DOMUtils.isVisible(element, { threshold: 0.5 });

// Observe visibility changes
const observer = DOMUtils.observeVisibility(element, (isVisible) => {
  if (isVisible) {
    console.log('Element entered viewport');
    // Lazy load image, trigger animation, etc.
  } else {
    console.log('Element left viewport');
  }
}, {
  threshold: 0.1,
  rootMargin: '50px' // Trigger 50px before entering viewport
});

// Stop observing
observer.disconnect();
*/

console.log('isVisible: Check if element is in viewport (async)');
console.log('observeVisibility: Watch for visibility changes\n');

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================
console.log('--- Utility Functions ---');

/*
// Wait for DOM to be ready
DOMUtils.ready(() => {
  console.log('DOM is fully loaded');
  // Initialize app
});

// Create query cache for performance
const cache = DOMUtils.createQueryCache();
const btn1 = cache.get('.my-button'); // Queries DOM
const btn2 = cache.get('.my-button'); // Returns cached result
cache.clear(); // Clear cache when DOM changes
*/

console.log('ready: Execute callback when DOM is ready');
console.log('createQueryCache: Cache frequently accessed elements\n');

// ============================================================================
// PRACTICAL EXAMPLES
// ============================================================================
console.log('--- Practical Examples ---');

/*
// Example 1: Create and add a notification
function showNotification(message, type = 'info') {
  const notification = DOMUtils.createElement('div', {
    attrs: { class: `notification notification-${type}` },
    text: message,
    style: {
      padding: '15px',
      marginBottom: '10px',
      borderRadius: '4px',
      backgroundColor: type === 'error' ? '#f44336' : '#4caf50',
      color: 'white'
    }
  });
  
  const container = DOMUtils.query('#notifications');
  container.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => DOMUtils.remove(notification), 3000);
}

// Example 2: Infinite scroll with visibility observer
const lastItem = DOMUtils.query('.item:last-child');
DOMUtils.observeVisibility(lastItem, (isVisible) => {
  if (isVisible) {
    console.log('Load more items...');
    // loadMoreItems();
  }
}, { threshold: 0.1 });

// Example 3: Form validation with debounced input
const emailInput = DOMUtils.query('#email');
const validateEmail = DOMUtils.debounce(async (e) => {
  const email = e.target.value;
  // Simulate API validation
  const isValid = email.includes('@');
  
  if (isValid) {
    DOMUtils.removeClass(emailInput, 'invalid');
    DOMUtils.addClass(emailInput, 'valid');
  } else {
    DOMUtils.removeClass(emailInput, 'valid');
    DOMUtils.addClass(emailInput, 'invalid');
  }
}, 500);

DOMUtils.on(emailInput, 'input', validateEmail);

// Example 4: Measure element positions for tooltips
function positionTooltip(trigger, tooltip) {
  const triggerRect = DOMUtils.getRect(trigger);
  const tooltipRect = DOMUtils.getRect(tooltip);
  const viewportDist = DOMUtils.getDistanceToViewport(trigger);
  
  // Position above if space available, otherwise below
  if (viewportDist.top > tooltipRect.height) {
    DOMUtils.setStyle(tooltip, {
      top: `${triggerRect.top - tooltipRect.height - 5}px`,
      left: `${triggerRect.left}px`
    });
  } else {
    DOMUtils.setStyle(tooltip, {
      top: `${triggerRect.bottom + 5}px`,
      left: `${triggerRect.left}px`
    });
  }
}

// Example 5: Debug element layout issues
function debugElementLayout(selector) {
  const element = DOMUtils.query(selector);
  
  // Log comprehensive measurements
  const measurements = DOMUtils.logElementMeasurements(element, 'Debug Element');
  
  // Check distance to viewport edges
  const viewportDist = DOMUtils.getDistanceToViewport(element);
  
  // Check if element is actually visible
  DOMUtils.isVisible(element).then(isVisible => {
    console.log('Is visible:', isVisible);
  });
  
  return measurements;
}

// Example 6: Responsive navigation with throttled resize
const handleResize = DOMUtils.throttle(() => {
  const nav = DOMUtils.query('.main-nav');
  const width = window.innerWidth;
  
  if (width < 768) {
    DOMUtils.addClass(nav, 'mobile');
    DOMUtils.removeClass(nav, 'desktop');
  } else {
    DOMUtils.addClass(nav, 'desktop');
    DOMUtils.removeClass(nav, 'mobile');
  }
}, 150);

DOMUtils.on(window, 'resize', handleResize);

// Example 7: Lazy load images when visible
const lazyImages = DOMUtils.queryAll('img[data-src]');
lazyImages.forEach(img => {
  DOMUtils.observeVisibility(img, (isVisible) => {
    if (isVisible) {
      const src = DOMUtils.attr(img, 'data-src');
      DOMUtils.attr(img, 'src', src);
      DOMUtils.removeAttr(img, 'data-src');
    }
  }, { threshold: 0.1, rootMargin: '50px' });
});

// Example 8: Check spacing between elements for layout validation
function validateSpacing(element1Selector, element2Selector, minDistance) {
  const distance = DOMUtils.getDistanceBetween(element1Selector, element2Selector);
  
  if (distance.vertical < minDistance || distance.horizontal < minDistance) {
    console.warn(`Elements too close! Distance: ${distance.vertical}px vertical, ${distance.horizontal}px horizontal`);
    DOMUtils.logElementMeasurements(element1Selector, 'Element 1');
    DOMUtils.logElementMeasurements(element2Selector, 'Element 2');
    return false;
  }
  
  return true;
}
*/

console.log('Practical examples include:');
console.log('  - Notifications with auto-remove');
console.log('  - Infinite scroll with visibility observer');
console.log('  - Debounced form validation');
console.log('  - Tooltip positioning based on viewport');
console.log('  - Element layout debugging');
console.log('  - Responsive navigation with throttled resize');
console.log('  - Lazy loading images');
console.log('  - Layout spacing validation\n');

console.log('=== DOM Utilities Examples Complete ===');
console.log('\nNote: These examples demonstrate the API.');
console.log('In a browser environment, you would uncomment the code blocks to use them.');
