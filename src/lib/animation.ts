
export type Direction = "up" | "down" | "left" | "right" | null;

// Create animation classes for elements to be revealed on scroll
export function createRevealClass(delay: number = 0, direction: Direction = null): string {
  let baseClass = "reveal";
  
  if (direction) {
    baseClass += ` reveal-${direction}`;
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
