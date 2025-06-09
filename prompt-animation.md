# Product Animation Guidelines with GSAP

## 🎯 **Animation Philosophy**

### **The Golden Rules of Professional UI Animation**

1. **Subtle Over Spectacular**: Animations should enhance, never distract
2. **Purposeful Motion**: Every animation must serve a user experience goal
3. **Respect Performance**: Never sacrifice functionality for flashiness
4. **Viewport Awareness**: Only animate when users can actually see it
5. **Progressive Enhancement**: Core functionality works without animations

### **Animation Personality**

- **Gentle & Smooth**: Think premium software, not flashy games
- **Quick Response**: Interactive elements respond instantly (0.1-0.3s)
- **Graceful Transitions**: Theme/color changes feel seamless (0.15-0.4s)
- **Entrance Impact**: Initial animations can be more noticeable (0.8-1.2s)

---

## 🔧 **Technical Setup for deco.cx Projects**

### **GSAP Installation**

**❌ Don't do this (causes build errors):**

```tsx
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
```

**✅ Do this instead:**

```tsx
{/* GSAP CDN Scripts */}
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

{/* Your animation script */}
<script dangerouslySetInnerHTML={{
  __html: `
    // Wait for GSAP to be available
    function initializeGSAP() {
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        // Your animation code here
      } else {
        setTimeout(initializeGSAP, 100);
      }
    }
    
    document.addEventListener("DOMContentLoaded", initializeGSAP);
  `
}}></script>
```

### **deno.json Integration**

```json
{
  "imports": {
    "gsap": "npm:gsap@^3.13.0"
  }
}
```

---

## 👁️ **Viewport Detection Pattern (Essential)**

### **Why Viewport Detection?**

- Prevents wasted animations happening off-screen
- Improves performance and battery life
- Creates better user experience timing
- Matches existing FadeUp.tsx component behavior

### **Implementation Pattern**

```tsx
// 1. Add unique ID to your section
const sectionId = `section-${Math.random().toString(36).substr(2, 9)}`;

return (
  <div id={sectionId} class="your-section-classes">
    {/* Your content */}
  </div>
);
```

```javascript
// 2. Inside your GSAP script
let animationsStarted = false;

// 3. Setup intersection observer (like FadeUp.tsx)
const section = document.getElementById("${sectionId}");
if (section) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationsStarted) {
          animationsStarted = true;

          // Start your animations here
          initializeAnimations();

          // Unobserve after first trigger
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% visible
      rootMargin: "0px 0px -50px 0px", // Start 50px before viewport
    },
  );

  observer.observe(section);
}
```

---

## 🎬 **Core Animation Patterns**

### **1. Entrance Animations (Section Load)**

**Staggered Element Entry:**

```javascript
function initializeAnimations() {
  // Main container entrance
  gsap.from("#main-container", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3,
  });

  // Stagger child elements
  gsap.from(".child-elements", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.1, // 0.1s between each element
    ease: "power2.out",
    delay: 0.8,
  });

  // Sidebar/navigation items
  gsap.from(".nav-items", {
    duration: 0.6,
    x: -20,
    opacity: 0,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.6,
  });
}
```

**Floating/Pulse Animations (Continuous):**

```javascript
// Gentle floating effect
gsap.to(".floating-panel", {
  duration: 3,
  y: -8,
  ease: "power2.inOut",
  yoyo: true,
  repeat: -1,
});

// Subtle pulse for active elements
gsap.to(".active-indicator", {
  duration: 2,
  scale: 1.1,
  ease: "power2.inOut",
  yoyo: true,
  repeat: -1,
  stagger: 0.2,
});
```

### **2. Interactive Hover Effects**

**Card/Element Hover:**

```javascript
elements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      duration: 0.3,
      y: -5,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      duration: 0.3,
      y: 0,
      boxShadow:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      ease: "power2.out",
    });
  });
});
```

**Button Scale Effect:**

```javascript
button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    duration: 0.2,
    scale: 1.05,
    ease: "power2.out",
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    duration: 0.2,
    scale: 1,
    ease: "power2.out",
  });
});
```

**Click Feedback:**

```javascript
option.addEventListener("click", () => {
  gsap.fromTo(option, {
    scale: 1,
  }, {
    duration: 0.1,
    scale: 0.9,
    ease: "power2.inOut",
    yoyo: true,
    repeat: 1,
  });
});
```

### **3. Smooth Theme/Color Transitions**

**The Professional Approach (Subtle):**

```javascript
function updateTheme() {
  if (animationsStarted) {
    // Very subtle scale during transition
    const themeTimeline = gsap.timeline();

    themeTimeline.to("#main-interface", {
      duration: 0.15, // Quick!
      scale: 0.98, // Barely noticeable
      ease: "power1.inOut",
    })
      .call(() => {
        // Apply all theme changes here
        applyThemeChanges();
      })
      .to("#main-interface", {
        duration: 0.15,
        scale: 1,
        ease: "power1.inOut",
      })
      .call(() => {
        // Gentle bounce for updated elements
        gsap.from("[data-theme-element]", {
          duration: 0.3,
          scale: 0.95, // Very subtle
          ease: "power1.out",
          stagger: 0.02,
        });
      });
  } else {
    // Just apply changes instantly if animations haven't started
    applyThemeChanges();
  }
}
```

**Click Effect for Color Options:**

```javascript
function createColorPulse(clickedElement) {
  gsap.fromTo(clickedElement, {
    boxShadow: "0 0 0 0 rgba(208, 236, 26, 0.4)",
  }, {
    duration: 0.4,
    boxShadow: "0 0 0 20px rgba(208, 236, 26, 0)",
    ease: "power2.out",
  });
}
```

---

## 🎨 **Color Theming Integration**

### **SVG Color Updates**

```javascript
function setElementClass(element, className) {
  try {
    if (element.setAttribute) {
      element.setAttribute("class", className);
    } else {
      element.className = className;
    }
  } catch (e) {
    console.error("Error setting class on element:", element, e);
  }
}

// Update SVG logos/icons
const logo = document.getElementById("app-logo");
if (logo) {
  setElementClass(logo, `h-4 text-${currentColor}-500`);
}
```

### **Dynamic Class Updates**

```javascript
function applyThemeChanges() {
  // Update main containers
  const containers = {
    "main-container": {
      light: `bg-white border border-${currentNeutral}-200`,
      dark: `bg-${currentNeutral}-800 border border-${currentNeutral}-700`,
    },
  };

  Object.keys(containers).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      setElementClass(element, containers[id][currentAppearance]);
    }
  });

  // Update text elements throughout
  const textElements = document.querySelectorAll(".themed-text");
  textElements.forEach((el) => {
    let className = el.className.toString();

    if (currentAppearance === "dark") {
      className = className
        .replace(/text-(slate|stone|zinc)-800/g, `text-${currentNeutral}-100`)
        .replace(/text-(slate|stone|zinc)-700/g, `text-${currentNeutral}-200`)
        .replace(/text-(slate|stone|zinc)-600/g, `text-${currentNeutral}-300`);
    } else {
      className = className
        .replace(/text-(slate|stone|zinc)-100/g, `text-${currentNeutral}-800`)
        .replace(/text-(slate|stone|zinc)-200/g, `text-${currentNeutral}-700`)
        .replace(/text-(slate|stone|zinc)-300/g, `text-${currentNeutral}-600`);
    }

    setElementClass(el, className);
  });
}
```

---

## ⚡ **Performance Best Practices**

### **1. Conditional Animation Execution**

```javascript
// Only run heavy animations when in viewport
if (animationsStarted) {
  // GSAP animations here
} else {
  // Instant updates here
}
```

### **2. Proper Cleanup**

```javascript
// Kill animations when component unmounts (if applicable)
gsap.killTweensOf(".animated-elements");

// Remove event listeners
element.removeEventListener("mouseenter", hoverHandler);
```

### **3. Efficient Selectors**

```javascript
// ✅ Good - Cache selectors
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  // animate card
});

// ❌ Bad - Query every time
document.querySelectorAll(".card").forEach((card) => {
  document.querySelector(".card").style.transform = "...";
});
```

---

## 🎭 **Animation Timing & Easing Guide**

### **Duration Guidelines**

```javascript
// Immediate feedback (clicks, hovers)
duration: 0.1 - 0.3

// Theme changes, smooth transitions  
duration: 0.15 - 0.4

// Content entrance, page transitions
duration: 0.8 - 1.2

// Ambient animations (floating, pulse)
duration: 2 - 4 (with repeat: -1)
```

### **Easing Personalities**

```javascript
// Quick, snappy interactions
ease: "power1.inOut";
ease: "power2.out";

// Smooth, natural motion
ease: "power2.inOut";
ease: "power3.out";

// Bouncy, playful (use sparingly)
ease: "back.out(1.2)";
ease: "elastic.out(1, 0.3)";
```

### **Stagger Timing**

```javascript
// UI elements appearing
stagger: 0.05 - 0.1;

// Cards/content blocks
stagger: 0.1 - 0.15;

// Navigation items
stagger: 0.02 - 0.05;
```

---

## 🏗️ **Code Structure & Organization**

### **Recommended Function Structure**

```javascript
document.addEventListener("DOMContentLoaded", () => {
  function initializeGSAP() {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      let animationsStarted = false;
      let currentColor = "amber";
      let currentNeutral = "stone";
      let currentAppearance = "light";

      // 1. Animation Functions
      function initializeEntranceAnimations() {/* ... */}
      function setupHoverAnimations() {/* ... */}
      function createInteractionEffects() {/* ... */}

      // 2. Theme Functions
      function applyThemeChanges() {/* ... */}
      function updateTheme() {/* ... */}
      function setElementClass(element, className) {/* ... */}

      // 3. Event Handlers
      function setupColorHandlers() {/* ... */}
      function setupAppearanceHandlers() {/* ... */}

      // 4. Viewport Detection
      function setupViewportObserver() {/* ... */}

      // 5. Initialize
      setupColorHandlers();
      setupAppearanceHandlers();
      setupViewportObserver();
    } else {
      setTimeout(initializeGSAP, 100);
    }
  }

  initializeGSAP();
});
```

### **Naming Conventions**

```javascript
// IDs for targeting
id="main-container"
id="color-panel" 
id="app-logo"

// Classes for styling
class="animated-card"
class="floating-panel"
class="themed-text"

// Data attributes for animation groups
data-animate="entrance"
data-theme-element="true"
```

---

## 🐛 **Debugging & Troubleshooting**

### **Common Issues & Solutions**

**1. "GSAP is not defined"**

```javascript
// ✅ Always check availability
if (typeof gsap !== "undefined") {
  // Use GSAP
}

// ✅ Add retry mechanism
function initializeGSAP() {
  if (typeof gsap !== "undefined") {
    // Initialize
  } else {
    console.log("GSAP not ready, retrying...");
    setTimeout(initializeGSAP, 100);
  }
}
```

**2. "Element not found"**

```javascript
// ✅ Always check element exists
const element = document.getElementById("my-element");
if (element) {
  gsap.to(element, {/* animation */});
} else {
  console.warn("Element 'my-element' not found");
}
```

**3. "Animation starts too early"**

```javascript
// ✅ Use viewport detection
const observer = new IntersectionObserver(/* ... */);
observer.observe(sectionElement);
```

**4. "SVG not changing colors"**

```javascript
// ✅ Use setAttribute for SVG elements
function setElementClass(element, className) {
  if (element.setAttribute) {
    element.setAttribute("class", className);
  } else {
    element.className = className;
  }
}
```

### **Debugging Tools**

```javascript
// Add console logs for development
console.log("GSAP animations started");
console.log("Theme updated:", { currentColor, currentAppearance });

// Check element availability
setTimeout(() => {
  const allElements = document.querySelectorAll("[id]");
  console.log("Available elements:", allElements);
}, 1000);
```

---

## 🎨 **Design Integration**

### **Working with Design Files**

1. **Extract exact colors** from Figma/design files
2. **Identify interactive states** (hover, active, disabled)
3. **Note spacing and timing** in motion designs
4. **Match easing curves** to design specifications

### **Color System Integration**

```javascript
// Map design colors to Tailwind classes
const colorMap = {
  "primary-blue": "blue-500",
  "accent-amber": "amber-500",
  "neutral-light": "slate-100",
  "neutral-dark": "slate-800",
};
```

### **Responsive Considerations**

```javascript
// Adjust animations for mobile
const isMobile = window.innerWidth < 768;

gsap.from(".card", {
  duration: isMobile ? 0.6 : 0.8,
  y: isMobile ? 20 : 30,
  stagger: isMobile ? 0.05 : 0.1,
});
```

---

## 📱 **Mobile & Responsive Design**

### **Mobile-First Animation Principles**

1. **Reduce Motion**: Smaller movements and shorter durations on mobile
2. **Faster Timing**: Mobile users expect quicker feedback
3. **Touch Interactions**: Larger tap targets and immediate visual feedback
4. **Performance**: Lighter animations to preserve battery and performance
5. **Layout Adaptations**: Elements stack vertically, sidebars collapse

### **Responsive Breakpoints (Tailwind CSS)**

```javascript
const isMobile = window.innerWidth < 640; // sm: phones
const isTablet = window.innerWidth < 1024; // lg: tablets
const isDesktop = window.innerWidth >= 1024; // lg+: desktop
```

### **Mobile Animation Adjustments**

```javascript
function initializeDashboardAnimations() {
  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth < 1024;

  // Entrance animations - faster and smaller on mobile
  gsap.from("#main-container", {
    duration: isMobile ? 0.8 : 1.2, // 33% faster
    y: isMobile ? 30 : 50, // 40% smaller movement
    opacity: 0,
    ease: "power2.out",
    delay: isMobile ? 0.2 : 0.3, // Earlier start
  });

  // Stagger timing - quicker on mobile
  gsap.from(".cards", {
    duration: isMobile ? 0.6 : 0.8,
    y: isMobile ? 20 : 30,
    stagger: isMobile ? 0.05 : 0.1, // Half the delay
    ease: "power2.out",
  });

  // Floating animations - subtle on mobile
  gsap.to(".floating-panel", {
    duration: 3,
    y: isMobile ? -4 : -8, // Half movement
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
  });
}
```

### **Mobile Layout Classes**

```tsx
// Container responsive positioning
class="justify-center lg:justify-end pt-16 sm:pt-20 lg:pt-20"

// Responsive sizing and spacing
class="w-24 sm:w-36 lg:w-48"              // Sidebar width
class="p-2 sm:p-3 lg:p-4"                // Padding
class="gap-1 sm:gap-2"                   // Spacing
class="text-xs sm:text-sm"               // Typography

// Mobile-specific behaviors
class="truncate text-xs"                 // Truncate long text on mobile
class="sm:hidden"                        // Show only on mobile
class="hidden sm:block"                  // Hide on mobile, show on larger screens  
class="grid-cols-1 sm:grid-cols-2"       // Single column on mobile
class="flex-col sm:flex-row"             // Stack vertically on mobile
class="overflow-x-auto"                  // Horizontal scroll tabs
class="whitespace-nowrap"                // Prevent text wrapping
```

### **Touch-Friendly Interactive Elements**

```tsx
// Larger touch targets on mobile
class="w-6 h-6 sm:w-8 sm:h-8"           // Buttons
class="px-2 sm:px-3 lg:px-4"            // Button padding
class="py-1 sm:py-1.5 lg:py-2"          // Button height

// Mobile text alternatives - shorter but still descriptive
<span class="hidden sm:inline">Create agent</span>
<span class="sm:hidden">Create</span>

// Navigation text - abbreviated on mobile
<span class="text-xs font-manrope font-medium truncate">New</span>
<span class="text-xs font-manrope font-medium truncate">Agents</span>

// Agent descriptions - different content for mobile vs desktop
<span class="sm:hidden">Strategy alignment</span>
<span class="hidden sm:block">Ensures alignment with the company's strategy in internal meetings and chat forums, track OKRs.</span>
```

### **Performance Optimizations for Mobile**

```javascript
// Reduce animations on slower devices
const prefersReducedMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isLowEndDevice = navigator.hardwareConcurrency < 4;

if (prefersReducedMotion || isLowEndDevice) {
  // Minimal or no animations
  gsap.set(".element", { opacity: 1 });
} else if (isMobile) {
  // Lighter mobile animations
  gsap.from(".element", {
    duration: 0.6,
    y: 20,
    opacity: 0,
  });
} else {
  // Full desktop animations
  gsap.from(".element", {
    duration: 1.2,
    y: 50,
    opacity: 0,
  });
}
```

---

## 📋 **Checklist for New Animations**

### **Before You Start**

- [ ] Understand the user flow and purpose
- [ ] Identify key interactive elements
- [ ] Plan entrance, interaction, and exit states
- [ ] **Design mobile-first, then enhance for desktop**
- [ ] **Test on actual mobile devices, not just browser dev tools**

### **During Development**

- [ ] Set up viewport detection first
- [ ] Start with basic functionality (no animations)
- [ ] Add entrance animations
- [ ] Implement hover/interaction effects
- [ ] Add theme transition support
- [ ] Test performance on slower devices

### **Before Delivery**

- [ ] Animations feel smooth, not jarring
- [ ] All interactions have immediate feedback
- [ ] Theme changes work in all states
- [ ] No console errors or warnings
- [ ] Graceful degradation if GSAP fails to load
- [ ] Works on mobile, tablet, desktop
- [ ] Accessibility: respects `prefers-reduced-motion`

### **Accessibility Consideration**

```javascript
// Respect user motion preferences
const prefersReducedMotion =
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  // Full animations
  gsap.from(".element", { duration: 0.8, y: 30 });
} else {
  // Instant or minimal animations
  gsap.set(".element", { opacity: 1 });
}
```

---

## 🚀 **Advanced Techniques**

### **Timeline Management**

```javascript
const masterTimeline = gsap.timeline();

masterTimeline
  .add("start")
  .from(".header", { duration: 0.6, y: -50 })
  .from(".content", { duration: 0.8, y: 30 }, "-=0.3") // Overlap by 0.3s
  .add("contentReady")
  .from(".sidebar", { duration: 0.6, x: -200 }, "contentReady")
  .add("complete");
```

### **Scroll-Based Animations**

```javascript
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".parallax-section",
  start: "top bottom",
  end: "bottom top",
  scrub: 1,
  animation: gsap.to(".parallax-bg", {
    yPercent: -50,
    ease: "none",
  }),
});
```

### **Advanced Hover States**

```javascript
function createAdvancedHover(element) {
  const tl = gsap.timeline({ paused: true });

  tl.to(element, {
    duration: 0.3,
    y: -5,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  })
    .to(element.querySelector(".icon"), {
      duration: 0.2,
      rotation: 5,
      scale: 1.1,
    }, "-=0.2");

  element.addEventListener("mouseenter", () => tl.play());
  element.addEventListener("mouseleave", () => tl.reverse());
}
```

---

## 💡 **Creative Animation Ideas**

### **Micro-Interactions**

- Loading states with subtle pulse
- Form validation with gentle shake/bounce
- Success states with check mark animation
- Progress indicators with smooth fills

### **Transition Effects**

- Page transitions with sliding panels
- Modal entrances with backdrop blur
- Tab switches with sliding underlines
- Image galleries with parallax scroll

### **Branding Elements**

- Logo animations on load
- Color theme ripple effects
- Signature easing curves
- Custom loading animations

---

**Remember: The best animations are the ones users don't consciously notice, but
make the interface feel alive, responsive, and delightful to use. Focus on
enhancing the user experience, not showcasing animation skills.**
