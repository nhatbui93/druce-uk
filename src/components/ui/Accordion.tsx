import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  AccordionContentProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionSingleProps,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

export interface AccordionInterface extends AccordionItemProps {
  css?: string;
}
export type AccordionRootInterface =
  | AccordionSingleProps
  | AccordionMultipleProps;
// const Accordion = AccordionPrimitive.Root;

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionRootInterface
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root ref={ref} {...props} />
));
Accordion.displayName = "AccordionRoot";

export interface AccordionItemInterface extends AccordionItemProps {
  css?: string;
}
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemInterface
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-gray-200", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export interface AccordionTriggerInterface extends AccordionTriggerProps {
  css?: string;
}
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerInterface
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center text-left justify-between py-4 font-medium transition-all hover:underline hover:text-pink-600 [&[data-state=open]]:text-pink-600 [&[data-state=open]>svg]:rotate-180 text-gray-900",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className=" h-5 w-5 shrink-0 transition-transform duration-200 ml-1" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export interface AccordionContentInterface extends AccordionContentProps {
  css?: string;
}
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentInterface
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-left "
    {...props}
  >
    <div className={cn("pb-4 pt-0 text-gray-900 ", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
