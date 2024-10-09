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
   * Upper case text menu
   */
  isUpperCase?: Boolean;
  /**
   * Align dropdown menu position
   */
  alignDropdown?: "left" | "right" | "center";
}

interface MobileMenuProps {
  data: any;
  className?: string;
}

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
          <div className="w-6 h-6 shrink-0">
            <img
              src={icon}
              loading="lazy"
              className="w-6 h-6 object-cover"
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

              <div className="py-4 text-sm animate-fade-in duration-500 delay-300">
                {/* <h4 className="mb-2 mt-5 text-sm font-semibold text-gray-700 ">
                  TẢI VÀ ĐĂNG KÝ
                </h4>

                <div className="flex flex-nowrap">
                  <div className="flex-initial">
                    <a
                      className="link-white"
                      target="_blank"
                      href="https://itunes.apple.com/vn/app/id918751511?utm_source=website-momo&utm_medium=download&utm_campaign=momo-1dong"
                    >
                      <img
                        src="https://homepage.momocdn.net/img/momo-upload-api-210724113855-637627235353131497.jpg"
                        width={130}
                        loading="lazy"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3 flex-initial">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.mservice.momotransfer&utm_source=website-momo&utm_medium=download&utm_campaign=momo-1dong"
                      className="link-white"
                      target="_blank"
                    >
                      <img
                        src="https://homepage.momocdn.net/img/momo-upload-api-210724113959-637627235994410679.jpg"
                        width={130}
                        loading="lazy"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <h4 className="mb-2 mt-5 text-sm font-semibold text-gray-700">
                  HỖ TRỢ KHÁCH HÀNG
                </h4>

                <ul className="mb-2 text-sm text-gray-500">
                  <li className="mb-1">
                    Hotline :&nbsp;
                    <a
                      href={`tel:${MoMoText.Support.Hotline}`}
                      className="text-gray-600"
                    >
                      {MoMoText.Support.Hotline_Format}
                    </a>
                  </li>
                  <li className="mb-1">
                    Email :&nbsp;
                    <a
                      href={`mailto:${MoMoText.Support.Email}`}
                      className="text-gray-600"
                    >
                      {MoMoText.Support.Email}
                    </a>
                  </li>
                </ul>
                <a
                  href="https://www.momo.vn/huong-dan/huong-dan-gui-yeu-cau-ho-tro-bang-tinh-nang-tro-giup"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="relative inline-block overflow-hidden rounded border border-gray-300 bg-white py-1 pl-10 pr-2 hover:bg-gray-100">
                    <div
                      className="absolute left-1 top-1 "
                      style={{ paddingTop: "3px" }}
                    >
                      <svg
                        className="h-7 w-7 text-pink-700 "
                        fill="currentColor"
                        stroke="currentColor"
                        viewBox="0 0 345.1 512"
                      >
                        <g>
                          <title>Asset 1</title>
                          <path
                            d="M279.4,23.7H30.8C14.5,23.7,0,38.2,0,56.3v401.8c0,16.3,14.5,30.8,30.8,30.8H76h23.8L76,449.4H34.5V96.2h243.1v152l34.5,22
                        V56.3C312,38.2,297.5,23.7,279.4,23.7z M226.8,77.1H86.1c-8.1,0-13.5-5.4-13.5-13.5c0-8.1,5.4-13.5,13.5-13.5h140.8
                        c5.4,0,10.8,5.4,10.8,13.5C237.7,71.7,232.3,77.1,226.8,77.1z"
                          />
                          <path
                            d="M189.4,200.7c-14.4,0-25.9,11.6-25.9,25.9v155.7l-17.3-34.6c-14.2-26.3-28.1-23.6-38.9-17.3c-12.5,8.3-17.2,17-8.6,38.9
                        c19.6,48.2,49.8,105.6,82.2,142.7h116.7c41-30.4,74-175,17.3-181.6c-5.2,0-13.5,0.8-17.3,4.3c0-17.3-15.1-21.7-21.6-21.6
                        c-7.5,0.1-13,4.3-17.3,13c0-17.3-14.1-21.6-21.6-21.6c-8.3,0-17.9,5.2-21.6,13v-90.8C215.4,212.3,203.8,200.7,189.4,200.7z"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="text-xs text-gray-500 ">
                      Hướng dẫn trợ giúp trên
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      Ứng dụng Ví MoMo
                    </div>
                  </div>
                </a>
                <h4 className="mb-2 mt-5 text-sm font-semibold text-gray-700">
                  HỢP TÁC DOANH NGHIỆP
                </h4>

                <ul className="mb-2 text-sm text-gray-500">
                  <li className="mb-1">
                    Hotline :&nbsp;
                    <a
                      className="text-gray-600"
                      href={`tel:${MoMoText.Business.Phome}`}
                    >
                      {MoMoText.Business.Phome_Format}
                    </a>
                  </li>
                  <li className="mb-1">
                    Email :&nbsp;
                    <a
                      href={`mailto:${MoMoText.Business.Email}`}
                      className="text-gray-600"
                    >
                      {" "}
                      {MoMoText.Business.Email}
                    </a>
                  </li>
                </ul>

                <a
                  href="https://business.momo.vn/#menutop"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="relative inline-block overflow-hidden rounded border border-gray-300 bg-white py-1 pl-12 pr-2 hover:bg-gray-100">
                    <div className="absolute left-1 top-1 ">
                      <img
                        src="https://homepage.momocdn.net/fileuploads/svg/momo-file-210724114053.svg"
                        className="w-10"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="text-xs text-gray-500 ">
                      Hợp tác doanh nghiệp
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      Đăng ký hợp tác
                    </div>
                  </div>
                </a> */}
              </div>
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
            " select-none space-y-1 rounded-md  px-2 py-2 leading-none no-underline outline-none transition-colors hover:bg-pink-50 hover:text-seconddary focus:bg-pink-50 focus:text-seconddary flex flex-nowrap space-x-2  min-h-9 ",
            className,
            !icon && "items-center px-3"
          )}
          href={href}
          {...linkProps}
        >
          {icon && (
            <div className="w-7 h-7 shrink-0 mt-1">
              <img
                src={icon}
                loading="lazy"
                className="w-7 h-7 object-cover"
                alt={title}
              />
            </div>
          )}

          <div className="  ">
            <div className="text-sm font-medium  text-gray-900 leading-none">
              {title}
            </div>
            {children && (
              <p className="line-clamp-2 text-xs mt-1    text-gray-500">
                {children}
              </p>
            )}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

const NavItems = ({ data, alignDropdown, className, isUpperCase }: any) => {
  return (
    <NavigationMenu alignDropdown={alignDropdown}>
      <NavigationMenuList>
        {data.map((menuItem: any) => {
          const linkProps = menuItem.newTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};
          return menuItem.hasDropdown ? (
            <NavigationMenuItem
              className={cn(
                "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-secondary nav-item after:bg-primary",
                isUpperCase && "uppercase"
              )}
              key={menuItem.id}
            >
              <NavigationMenuTrigger>
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
                "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-secondary nav-item after:bg-primary",
                isUpperCase && "uppercase"
              )}
              key={menuItem.id}
            >
              <NavigationMenuLink
                href={menuItem.url}
                className={className}
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
  isUpperCase = false,
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
          <div className="relative flex items-center justify-between lg:justify-around">
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
                isUpperCase={isUpperCase}
              />
            </div>
            <div className="flex space-x-3 flex-nowrap items-center">
              {navigationRight && navigationRight}
            </div>
          </div>
        </nav>
      </div>
      <style global jsx>
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
      </style>
    </>
  );
};

HeaderNavigation.displayName = "HeaderNavigation";

export { HeaderNavigation };
