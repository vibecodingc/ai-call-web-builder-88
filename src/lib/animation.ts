export type Direction = "up" | "down" | "left" | "right" | null;
export type AnimationType = "fade" | "scale" | "slide" | "bounce" | "pulse" | null;

// Create animation classes for elements to be revealed on scroll
export function createRevealClass(
  delay: number = 0, 
  direction: Direction = null, 
  type: AnimationType = null
): string {
  let baseClass = "reveal opacity-0 transition-all duration-500 ease-out";
  
  if (direction === "up") {
    baseClass += " translate-y-8";
  } else if (direction === "down") {
    baseClass += " -translate-y-8";
  } else if (direction === "left") {
    baseClass += " -translate-x-8";
  } else if (direction === "right") {
    baseClass += " translate-x-8";
  }

  if (type === "scale") {
    baseClass += " scale-95";
  } else if (type === "fade") {
    baseClass += " opacity-0";
  }
  
  if (delay > 0) {
    baseClass += ` delay-${Math.round(delay * 1000)}`;
  }
  
  return baseClass;
}

// Animation for vote count changes
export function animateVoteChange(element: HTMLElement, isIncrease: boolean): void {
  const animClass = isIncrease ? "vote-increase" : "vote-decrease";
  element.classList.add(animClass);
  
  setTimeout(() => {
    element.classList.remove(animClass);
  }, 600);
}

// Typing animation for text
export function typeWriter(
  element: HTMLElement, 
  text: string, 
  speed: number = 50, 
  startDelay: number = 0,
  onComplete?: () => void
): void {
  let i = 0;
  element.textContent = '';
  
  setTimeout(() => {
    const typing = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        if (onComplete) onComplete();
      }
    }, speed);
  }, startDelay);
}

// Add and remove animation classes with cleanup
export function animateElement(
  element: HTMLElement, 
  animationClass: string, 
  duration: number = 1000
): void {
  element.classList.add(animationClass);
  
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, duration);
}

// Create a staggered animation effect for multiple elements
export function createStaggeredAnimation(
  elements: HTMLElement[], 
  animationClass: string, 
  staggerDelay: number = 100,
  duration: number = 1000
): void {
  elements.forEach((element, index) => {
    setTimeout(() => {
      animateElement(element, animationClass, duration);
    }, index * staggerDelay);
  });
}
