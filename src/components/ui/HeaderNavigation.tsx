import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./NavigationMenu";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority"
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import parse from "html-react-parser";
import Router from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { useKey } from "react-use";


interface ComponentData {
  title: string;
  icon: string;
  url: string;
  description: string;
  newTab: boolean;
}

interface MainNavItemWithDropdown {
  id: number;
  title: string;
  hasDropdown: boolean;
  dropDownCompact: boolean;
  subMenu: ComponentData[];
}

interface MainNavItemWithoutDropdown {
  id: number;
  title: string;
  hasDropdown: boolean;
  url: string;
  newTab: boolean;
}

type MainNavItem = MainNavItemWithDropdown | MainNavItemWithoutDropdown;

interface HeaderInfo {
  logo?: string;
  name?: string;
  url: string;
}
export interface HeaderNavigationProps {
  /**
   * CSS class to be appended to the root element.
   */
  className?: string;
  /**
   * Data menu
   */
  dataMenu: MainNavItem[];
  /**
   * Service info
   */
  headerInfo?: HeaderInfo;
  /**
   * Right Navigation
   */
  navigationRight?: ReactElement;
  /**
   * Has sticky Navigation Header, default is true
   */
  isSticky?: Boolean;

  /**
   * Align dropdown menu position
   */
  alignDropdown?: "left" | "right" | "center";
}

interface MobileMenuProps {
  data: any;
  className?: string;
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-8 w-max items-center justify-center rounded-md bg-background px-2.5 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

const ListItemMobile = ({
  className = "",
  icon = "",
  title,
  children = "",
  href = "",
  newTab = false,
}: any) => {
  const linkProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <li className="min-h-8">
      <a
        className={cn(
          " select-none py-2 flex flex-nowrap space-x-1 items-center text",
          className
        )}
        href={href}
        {...linkProps}
      >
        {icon && (
          <div className="w-6 h-6 shrink-0 mt-1">
            <img
              src={icon}
              loading="lazy"
              className="w-5 h-5 object-cover"
              alt={title}
            />
          </div>
        )}

        <div className="  ">
          <div className="text-sm  text-gray-800  line-clamp-1">{title}</div>
          {children && (
            <p className="line-clamp-1 text-xs mt-0  text-gray-500">
              {children}
            </p>
          )}
        </div>
      </a>
    </li>
  );
};

const listItem = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.24, 0.25, 0.05, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.05 } },
};

const NavItemsMobile = ({ data }: any) => {
  return (
    <Accordion type="single" collapsible>
      {data.map((menuItem: any) => {
        const linkProps = menuItem.newTab
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <motion.div key={menuItem.id} variants={listItem}>
            {menuItem.hasDropdown ? (
              <AccordionItem value={menuItem.id}>
                <AccordionTrigger className="py-3">
                  {menuItem.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className={cn("grid gap-y-1 gap-x-2 grid-cols-2 ")}>
                    {menuItem.subMenu &&
                      menuItem.subMenu.map((component: any) => (
                        <ListItemMobile
                          key={component.title}
                          title={component.title}
                          href={component.url}
                          newTab={component.newTab}
                          icon={
                            menuItem.dropDownCompact === true
                              ? component.icon
                              : ""
                          }
                        >
                          {menuItem.dropDownCompact === true
                            ? component.description
                            : ""}
                        </ListItemMobile>
                      ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <a
                className="py-3 flex flex-1 items-center text-left justify-between  font-medium transition-all hover:underline text-gray-900 border-b border-gray-200"
                href={menuItem.url}
                {...linkProps}
              >
                {parse(menuItem.title)}
              </a>
            )}
          </motion.div>
        );
      })}
    </Accordion>
  );
};

const computeInsetTop = () =>
  typeof window !== "undefined" && window.pageYOffset !== undefined
    ? window.pageYOffset
    : 0;

const MobileMenu = ({ data, className }: MobileMenuProps) => {
  // useKey("Escape", () => setOpen(false));
  const [isOpen, setIsOpen] = useState(false);

  useKey("Escape", () => setIsOpen(false));

  useEffect(() => {
    if (!isOpen) return;
    const memoizedInsetTop = computeInsetTop();
    function handleRouteChange() {
      setIsOpen(false);
    }
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      document.body.style.position = "";
      document.body.style.width = "";
      window.scrollTo({
        top: memoizedInsetTop || 0,
        behavior: "instant",
      });
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [isOpen]);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.2 } },
    hidden: { opacity: 0, transition: { duration: 0.2 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.15,
        staggerChildren: 0.05,
        ease: [0.24, 0.25, 0.05, 1],
      },
    },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <div className={cn(className)}>
      <button
        type="button"
        className="text-gray-800 w-10 h-10 flex items-center justify-center hover:text-gray-700 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Navigation</span>
        <motion.div animate={isOpen ? "hidden" : "visible"} variants={variants}>
          <svg
            className={cn("block w-7 h-7", isOpen && "hidden")}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.div>
        <motion.div animate={isOpen ? "visible" : "hidden"} variants={variants}>
          <svg
            className={cn("block w-7 h-7", !isOpen && "hidden")}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.div>
      </button>

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className={cn(
                className,
                "fixed  block w-full  max-w-full z-50 px-5 bg-white left-0 right-0 bottom-0 overflow-y-auto top-[calc(var(--header-height)+1px)] pb-24 "
              )}
            >
              <NavItemsMobile data={data} />

            </motion.nav>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
};

const ListItem = ({
  className = "",
  icon = "",
  title,
  children = "",
  href = "",
  newTab = false,
}: any) => {
  const linkProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <li className="">
      <NavigationMenuLink asChild>
        <a
          className={cn(
            " select-none space-y-1 rounded-md  px-2 py-2 leading-none no-underline outline-none transition-colors hover:bg-primary-foreground hover:text-primary focus:bg-primary-foreground focus:text-primary flex flex-nowrap space-x-2  min-h-9 ",
            className,
            !icon && "items-center px-3"
          )}
          href={href}
          {...linkProps}
        >
          {icon && (
            <div className="w-7 h-7 shrink-0 mt-2">
              <img
                src={icon}
                loading="lazy"
                className="w-6 h-6 object-cover"
                alt={title}
              />
            </div>
          )}

          <div className=" min-w-0">
            <div className="text-sm font-medium  text-primary leading-none">
              {title}
            </div>
            {children && (
              <p className="line-clamp-2 text-xs mt-1    text-primary/60">
                {children}
              </p>
            )}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

const NavItems = ({ data, alignDropdown, className }: any) => {
  return (
    <NavigationMenu alignDropdown={alignDropdown}>
      <NavigationMenuList className="">
        {data.map((menuItem: any) => {
          const linkProps = menuItem.newTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};
          return menuItem.hasDropdown ? (
            <NavigationMenuItem
              className={cn(
                "relative inline-flex items-center justify-center  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ",
              )}
              key={menuItem.id}
            >
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                {parse(menuItem.title)}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={cn(
                    "grid w-[300px] p-2  grid-cols-1",
                    menuItem.dropDownCompact === true &&
                    menuItem.subMenu.length > 6 &&
                    " w-[530px] md:grid-cols-2 ",
                    menuItem.dropDownCompact === true &&
                    menuItem.subMenu.length > 12 &&
                    " w-[800px] md:grid-cols-3 "
                  )}
                >
                  {menuItem.subMenu &&
                    menuItem.subMenu.map((component: any) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.url}
                        newTab={component.newTab}
                        icon={
                          menuItem.dropDownCompact === true
                            ? component.icon
                            : ""
                        }
                      >
                        {menuItem.dropDownCompact === true
                          ? component.description
                          : ""}
                      </ListItem>
                    ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem
              className={cn(
                "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ",
              )}
              key={menuItem.id}
            >
              <NavigationMenuLink
                href={menuItem.url}
                // className={className}
                className={navigationMenuTriggerStyle()}
                {...linkProps}

              >
                {parse(menuItem.title)}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const HeaderNavigation = ({
  className,
  dataMenu,
  headerInfo,
  navigationRight,
  isSticky = true,
  alignDropdown = "left",
}: HeaderNavigationProps) => {
  const { logo, name, url } = headerInfo || {};
  return (
    <>
      <div
        className={cn(
          className,
          "z-40 w-full  flex-none  lg:z-50 ",
          isSticky ? "sticky top-0 " : "relative"
        )}
      >
        <div
          className={cn(
            "absolute  h-full w-full bg-white   shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.08)]"
          )}
        />
        <nav
          className={cn(
            "wrapper  grid grid-cols-1 items-center  lg:border-0 [--header-height:64px] "
          )}
          style={{ minHeight: "var(--header-height)" }}
        >
          <div className="relative flex items-center justify-between ">
            <div className="flex items-center">
              <MobileMenu data={dataMenu} className="lg:hidden mr-2" />
              {headerInfo && (
                <a
                  href={url}
                  title={name}
                  className=" relative flex flex-none items-center rounded-none hover:opacity-80"
                >
                  <img src={logo} className="max-w-24 xl:max-w-32" alt={name} />
                </a>
              )}
            </div>
            <div className="relative xl:ml-4 hidden lg:flex items-center">
              <NavItems
                data={dataMenu}
                alignDropdown={alignDropdown}
              />
            </div>
            <div className="flex space-x-3 flex-nowrap items-center">
              {navigationRight && navigationRight}
            </div>
          </div>
        </nav>
      </div>
      {/* <style global jsx>
        {`
          @media (min-width: 1024px) {
            .nav-item:after {
              bottom: -4px;
              content: "";
              height: 2px;
              left: 10px;
              position: absolute;
              width: 0;
              transition: width 0.2s ease-in-out;
            }
            .nav-item:hover:after {
              width: calc(100% - 20px);
            }
          }
        `}
      </style> */}
    </>
  );
};

HeaderNavigation.displayName = "HeaderNavigation";

export { HeaderNavigation };
