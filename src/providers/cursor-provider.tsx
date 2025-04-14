
import React, { createContext, useContext, useEffect, useState } from "react";

type CursorType = "default" | "dot" | "ring" | "glow";

interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  cursorPosition: { x: number; y: number };
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    
    // Apply custom cursor style to body
    document.body.classList.add("custom-cursor");
    
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType, cursorPosition }}>
      <CustomCursor type={cursorType} position={cursorPosition} />
      {children}
    </CursorContext.Provider>
  );
};

interface CustomCursorProps {
  type: CursorType;
  position: { x: number; y: number };
}

const CustomCursor: React.FC<CustomCursorProps> = ({ type, position }) => {
  return (
    <>
      {type === "default" && (
        <div
          className="fixed pointer-events-none z-50 w-5 h-5 border-2 border-white rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`,
            mixBlendMode: "difference"
          }}
        />
      )}
      
      {type === "dot" && (
        <div
          className="fixed pointer-events-none z-50 w-3 h-3 bg-black rounded-full transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`,
            mixBlendMode: "difference"
          }}
        />
      )}
      
      {type === "ring" && (
        <div
          className="fixed pointer-events-none z-50 w-10 h-10 border border-blue rounded-full transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`,
            mixBlendMode: "difference"
          }}
        />
      )}
      
      {type === "glow" && (
        <div
          className="fixed pointer-events-none z-50 w-12 h-12 bg-blue/20 rounded-full blur-sm transition-transform duration-200 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`,
          }}
        />
      )}
    </>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
