import { cn } from "@/lib/utils";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

type AlignDropdown = "left" | "right" | "center";
interface NavigationMenuProviderProps {
  value: { alignDropdown?: AlignDropdown };
  children: React.ReactNode;
}

const NavigationMenuContext = React.createContext<null | {
  alignDropdown?: AlignDropdown;
}>(null);

const NavigationMenuProvider: React.FC<NavigationMenuProviderProps> = ({
  value,
  children,
}) => {
  return (
    <NavigationMenuContext.Provider value={value}>
      {children}
    </NavigationMenuContext.Provider>
  );
};

const useNavigationMenu = (): { alignDropdown?: AlignDropdown } => {
  const context = React.useContext(NavigationMenuContext);
  if (!context) {
    throw new Error(
      "useNavigationMenu must be used within a NavigationMenuProvider"
    );
  }
  return context;
};

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & {
    alignDropdown?: AlignDropdown;
  }
>(({ className, children, alignDropdown = "left", ...props }, ref) => (
  <NavigationMenuProvider value={{ alignDropdown }}>
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {/* <NavigationMenuViewport /> */}
    </NavigationMenuPrimitive.Root>
  </NavigationMenuProvider>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn("group px-2 ", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDownIcon
      className="relative ml-1 h-4 w-4 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => {
  const { alignDropdown } = useNavigationMenu();
  return (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "absolute  top-full mt-3 rounded-lg bg-white text-gray-900  ring-1 ring-gray-900/5  shadow-[0_10px_32px_rgba(34,42,53,0.15),0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.08),0_1px_1px_rgba(34,42,53,0.1),0_24px_68px_rgba(47,48,55,0.1)]",
        className,
        "before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:w-full before:bg-transparent before:opacity-0 before:h-3",
        alignDropdown !== "center" &&
          "data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out  ",
        alignDropdown === "left" && "left-0",
        alignDropdown === "right" && "right-0",
        alignDropdown === "center" && " left-1/2 -translate-x-1/2 "
      )}
      {...props}
    />
  );
});
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
