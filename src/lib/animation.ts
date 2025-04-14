
export type Direction = "up" | "down" | "left" | "right" | null;

// Create animation classes for elements to be revealed on scroll
export function createRevealClass(delay: number = 0, direction: Direction = null): string {
  let className = "reveal";
  
  if (direction) {
    className += ` data-direction="${direction}"`;
  }
  
  if (delay > 0) {
    className += ` style="transition-delay: ${delay}s"`;
  }
  
  return className;
}
