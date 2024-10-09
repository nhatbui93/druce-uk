import { Button } from "../ui/Button";
import { HeaderNavigation } from "../ui/HeaderNavigation";

const HEADER_INFO = {
  logo: "/images/logo.svg",
  name: "Druce Logo",
  url: "#",
};

const MAIN_NAV = [
  {
    id: 0,
    title: "Seller",
    url: "#",
    hasDropdown: false,
    newTab: false,
  },
  { id: 1, title: "Landlord", url: "#", hasDropdown: false, newTab: false },
  {
    id: 2,
    title: "Find a Property",
    url: "#",
    hasDropdown: false,
    newTab: false,
  },
  { id: 3, title: "New Homes", url: "#", hasDropdown: false, newTab: false },
  {
    id: 4,
    title: "Capital Market",
    url: "#",
    hasDropdown: false,
    newTab: false,
  },
  {
    id: 5,
    title: "@Druce Premier",
    url: "#",
    hasDropdown: false,
    newTab: false,
  },
  { id: 6, title: "News", url: "#", hasDropdown: false, newTab: false },
];

const ButtonSignIn = () => {
  return (
    <Button variant="outline" asChild>
      <a href="#">
        <div className="w-3 h-3 mr-1 flex justify-center items-center">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0C8.01109 0 7.04439 0.293245 6.22215 0.842652C5.3999 1.39206 4.75904 2.17295 4.3806 3.08658C4.00216 4.00021 3.90315 5.00555 4.09607 5.97545C4.289 6.94536 4.7652 7.83627 5.46447 8.53553C6.16373 9.2348 7.05464 9.711 8.02455 9.90393C8.99445 10.0969 9.99979 9.99784 10.9134 9.6194C11.827 9.24096 12.6079 8.6001 13.1573 7.77785C13.7068 6.95561 14 5.98891 14 5C14 3.67392 13.4732 2.40215 12.5355 1.46447C11.5979 0.526784 10.3261 0 9 0ZM9 8C8.40666 8 7.82664 7.82405 7.33329 7.49441C6.83994 7.16476 6.45542 6.69623 6.22836 6.14805C6.0013 5.59987 5.94189 4.99667 6.05764 4.41473C6.1734 3.83279 6.45912 3.29824 6.87868 2.87868C7.29824 2.45912 7.83279 2.1734 8.41473 2.05764C8.99667 1.94189 9.59987 2.0013 10.1481 2.22836C10.6962 2.45542 11.1648 2.83994 11.4944 3.33329C11.8241 3.82664 12 4.40666 12 5C12 5.79565 11.6839 6.55871 11.1213 7.12132C10.5587 7.68393 9.79565 8 9 8ZM18 19V18C18 16.1435 17.2625 14.363 15.9497 13.0503C14.637 11.7375 12.8565 11 11 11H7C5.14348 11 3.36301 11.7375 2.05025 13.0503C0.737498 14.363 0 16.1435 0 18V19H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13H11C12.3261 13 13.5979 13.5268 14.5355 14.4645C15.4732 15.4021 16 16.6739 16 18V19H18Z"
              fill="currentColor"
            />
          </svg>
        </div>
        Sign in
      </a>
    </Button>
  );
};

export default function Header() {
  return (
    <>
      {/* <header className="shadow-md border-b-1 border-t-gray-100">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto wrapper">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="/images/logo.svg"
              className="mr-3 h-5 sm:h-7"
              alt="Druce Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="rounded-md text-base px-5 py-1 border flex items-center border-primary hover:bg-primary hover:text-white"
            >
              <div className="w-4 h-4 mr-2 flex justify-center items-center">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0C8.01109 0 7.04439 0.293245 6.22215 0.842652C5.3999 1.39206 4.75904 2.17295 4.3806 3.08658C4.00216 4.00021 3.90315 5.00555 4.09607 5.97545C4.289 6.94536 4.7652 7.83627 5.46447 8.53553C6.16373 9.2348 7.05464 9.711 8.02455 9.90393C8.99445 10.0969 9.99979 9.99784 10.9134 9.6194C11.827 9.24096 12.6079 8.6001 13.1573 7.77785C13.7068 6.95561 14 5.98891 14 5C14 3.67392 13.4732 2.40215 12.5355 1.46447C11.5979 0.526784 10.3261 0 9 0ZM9 8C8.40666 8 7.82664 7.82405 7.33329 7.49441C6.83994 7.16476 6.45542 6.69623 6.22836 6.14805C6.0013 5.59987 5.94189 4.99667 6.05764 4.41473C6.1734 3.83279 6.45912 3.29824 6.87868 2.87868C7.29824 2.45912 7.83279 2.1734 8.41473 2.05764C8.99667 1.94189 9.59987 2.0013 10.1481 2.22836C10.6962 2.45542 11.1648 2.83994 11.4944 3.33329C11.8241 3.82664 12 4.40666 12 5C12 5.79565 11.6839 6.55871 11.1213 7.12132C10.5587 7.68393 9.79565 8 9 8ZM18 19V18C18 16.1435 17.2625 14.363 15.9497 13.0503C14.637 11.7375 12.8565 11 11 11H7C5.14348 11 3.36301 11.7375 2.05025 13.0503C0.737498 14.363 0 16.1435 0 18V19H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13H11C12.3261 13 13.5979 13.5268 14.5355 14.4645C15.4732 15.4021 16 16.6739 16 18V19H18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              Sign in
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-5 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary hover:text-secondary rounded bg-primary-700 lg:bg-transparent  lg:p-0"
                  aria-current="page"
                >
                  Seller
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary hover:text-secondary rounded bg-primary-700 lg:bg-transparent  lg:p-0"
                  aria-current="page"
                >
                  Landlord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary hover:text-secondary rounded bg-primary-700 lg:bg-transparent  lg:p-0"
                  aria-current="page"
                >
                  Find a Property
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary hover:text-secondary rounded bg-primary-700 lg:bg-transparent  lg:p-0"
                  aria-current="page"
                >
                  New Homes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary hover:text-secondary rounded bg-primary-700 lg:bg-transparent  lg:p-0"
                  aria-current="page"
                >
                  Capital Market
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary hover:text-secondary rounded bg-primary-700 lg:bg-transparent  lg:p-0"
                  aria-current="page"
                >
                  @Druce Premier
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-primary hover:text-secondary rounded bg-primary-700 lg:bg-transparent  lg:p-0"
                  aria-current="page"
                >
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header> */}
      <HeaderNavigation
        headerInfo={HEADER_INFO}
        dataMenu={MAIN_NAV}
        isUpperCase
        isSticky
        navigationRight={<ButtonSignIn />}
      />
    </>
  );
}
