import * as React from "react";
import { cn } from "utils"; // Ensure this utility is available if you're using a utility class library
import { Button } from "@mui/material"; // If you're using Material UI for buttons
import { ArrowLeft, ArrowRight } from "lucide-react"; // Importing arrow icons

// Carousel component
const Carousel = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

// CarouselItem Component
const CarouselItem = React.forwardRef<HTMLElement, React.ComponentProps<'div'>>(
  ({ className, orientation, ...props }, ref) => {
    return (
      <div
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = "CarouselItem";

// CarouselPrevious Component
const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";

// CarouselNext Component
const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

// Export Carousel and its components
export { 
  Carousel, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
};
