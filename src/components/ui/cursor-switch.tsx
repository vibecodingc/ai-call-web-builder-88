
import React from "react";
import { useCursor } from "@/providers/cursor-provider";
import { ButtonGradient } from "./button-gradient";

export function CursorSwitch() {
  const { setCursorType } = useCursor();

  return (
    <div className="flex gap-2 items-center">
      <ButtonGradient 
        variant="ghost" 
        size="sm" 
        onClick={() => setCursorType("default")}
      >
        Default
      </ButtonGradient>
      <ButtonGradient 
        variant="ghost" 
        size="sm" 
        onClick={() => setCursorType("dot")}
      >
        Dot
      </ButtonGradient>
      <ButtonGradient 
        variant="ghost" 
        size="sm" 
        onClick={() => setCursorType("ring")}
      >
        Ring
      </ButtonGradient>
      <ButtonGradient 
        variant="ghost" 
        size="sm" 
        onClick={() => setCursorType("glow")}
      >
        Glow
      </ButtonGradient>
    </div>
  );
}
