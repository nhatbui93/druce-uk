import { Mail, MapPin, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-primary-foreground py-2 lg:py-12">
      <div className="wrapper">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-flow-col gap-x-10 xl:gap-x-16 lg:grid-cols-[repeat(3,auto)]">
          <div className="text-primary lg:order-2 py-7 lg:py-0 last:border-b-0 md:border-b-0 border-b border-gray-300">
            <h3 className="text-2xl mb-5 md:mb-7 font-heading font-semibold">
              HEAD OFFICE
            </h3>
            <ul className="grid grid-cols-1 gap-y-5">
              <li className="w-full relative text-base flex">
                <MapPin className="w-6 h-6 text-primary mr-3 flex-none grow-0" />
                <span className="grow">
                  Montpelier House, 106 Brompton Road , Knightsbridge, London,
                  SW3 1JJ
                </span>
              </li>
              <li className="w-full relative text-base flex">
                <Phone className="w-6 h-6 text-primary mr-3 flex-none grow-0" />
                <a
                  className="grow hover:text-secondary transition-colors"
                  href="tel:+442071836592"
                >
                  + 44 207 183 6592
                </a>
              </li>
              <li className="w-full relative text-base flex">
                <Mail className="w-6 h-6 text-primary mr-3 flex-none grow-0" />
                <a
                  className="grow hover:text-secondary transition-colors"
                  href="mailto::enquiries@druce.com"
                >
                  enquiries@druce.com
                </a>
              </li>
            </ul>
          </div>
          <div className="text-primary lg:order-3 py-7 lg:py-0 last:border-b-0 md:border-b-0 border-b border-gray-300">
            <h3 className="text-2xl mb-5 md:mb-7 font-heading font-semibold">
              @DRUCE
            </h3>
            <div className="flex gap-2">
              <div className="grow">
                <div className="text-base md:pb-5 border-b-0 md:border-b-2 border-yellow-600">
                  <b className="block mb-2">Mobile application</b>
                  <p>Download app to stay connected on the go with us</p>
                </div>
                <div className="flex space-x-5 md:justify-center md:space-x-2 pt-5">
                  <a
                    href="https://play.google.com/"
                    target="_blank"
                    className="flex justify-center items-center max-w-32"
                    style={{ aspectRatio: 155 / 46 }}
                  >
                    <img
                      src="/images/google_play.png"
                      alt="Google Play"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    className="flex justify-center items-center max-w-32"
                    style={{ aspectRatio: 155 / 46 }}
                  >
                    <img
                      src="/images/google_play.png"
                      alt="Appstore"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div className="text-center max-w-28 flex-none grow-0 hidden justify-between md:flex flex-col">
                <div className="aspect-square w-full flex justify-center items-center">
                  <img
                    src="/images/qr_footer.png"
                    alt="QR download"
                    loading="lazy"
                  />
                </div>
                <span className="text-gray-900 font-semibold text-lg leading-tight">
                  Scan to download
                </span>
              </div>
            </div>
          </div>
          <div className="text-primary lg:order-1 py-7 lg:py-0 lg:col-span-1 md:col-span-2 last:border-b-0 md:border-b-0 border-b border-gray-300">
            <div className="text-sm">
              <h3 className="font-bold mb-2">
                © 2023 Druce & Co (International) Ltd.
              </h3>
              <p>
                All rights reserved. Druce & Co (International) Ltd,
                incorporated and registered in England and Wales.
              </p>
              <p className="mt-4">
                Registration Number: 13695288 Registered Office: Montpelier
                House 106 Brompton Road, Knightsbridge, London, England, SW3 1JJ
              </p>
            </div>
            <div className="flex items-end justify-between">
              <ul className="mt-4 grid grid-cols-1 gap-1">
                <li>
                  <a
                    href="#"
                    className="underline font-base hover:bg-gray-500/10"
                  >
                    Terms & Fees
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline font-base hover:bg-gray-500/10"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline font-base hover:bg-gray-500/10"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
              <ul className="flex gap-x-5 gap-y-2 flex-wrap">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    title="Linkedin"
                    className="flex items-center justify-center hover:text-secondary transition-colors"
                  >
                    <svg
                      width="34"
                      height="34"
                      className="w-8 h-8"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.25 0.945312C1.73121 0.945312 0.5 2.17652 0.5 3.69531V31.1953C0.5 32.714 1.73121 33.9453 3.25 33.9453H30.75C32.2687 33.9453 33.5 32.714 33.5 31.1953V3.69531C33.5 2.17652 32.2687 0.945312 30.75 0.945312H3.25ZM10.6214 8.28363C10.6317 10.0368 9.31945 11.117 7.76225 11.1093C6.29529 11.1015 5.01655 9.93363 5.02428 8.28622C5.03202 6.73676 6.25663 5.49152 7.84734 5.52762C9.46124 5.56372 10.6317 6.74708 10.6214 8.28363ZM17.5128 13.3419H12.8928H12.8902V29.0349H17.7731V28.6688C17.7731 27.9723 17.7726 27.2756 17.772 26.5788C17.7705 24.7202 17.7689 22.8595 17.7784 21.0014C17.781 20.5502 17.8015 20.0811 17.9176 19.6504C18.3532 18.0417 19.7997 17.0027 21.4136 17.2581C22.45 17.4204 23.1356 18.0212 23.4244 18.9983C23.6024 19.6092 23.6823 20.2666 23.69 20.9035C23.7109 22.8241 23.708 24.7447 23.7051 26.6655C23.704 27.3435 23.7029 28.0218 23.7029 28.6998V29.0323H28.6013V28.656C28.6013 27.8273 28.601 26.9988 28.6004 26.1703C28.5995 24.0996 28.5984 22.0288 28.6039 19.9573C28.6065 19.0214 28.506 18.0985 28.2765 17.1936C27.9336 15.8477 27.2247 14.734 26.0723 13.9297C25.2549 13.3573 24.3577 12.9887 23.3549 12.9474C23.2407 12.9427 23.1255 12.9365 23.0099 12.9302C22.4971 12.9025 21.9759 12.8743 21.4856 12.9732C20.0831 13.2542 18.8509 13.8962 17.9202 15.0279C17.812 15.1577 17.7062 15.2895 17.5483 15.4862L17.5128 15.5308V13.3419ZM5.41634 29.04H10.2761V13.3521H5.41634V29.04Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    title="Instagram"
                    className="flex items-center justify-center hover:text-secondary transition-colors"
                  >
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.3333 0.945312H9.66667C4.60406 0.945312 0.5 5.04938 0.5 10.112V24.7786C0.5 29.8412 4.60406 33.9453 9.66667 33.9453H24.3333C29.3959 33.9453 33.5 29.8412 33.5 24.7786V10.112C33.5 5.04938 29.3959 0.945312 24.3333 0.945312ZM30.2917 24.7786C30.2816 28.0651 27.6198 30.7269 24.3333 30.737H9.66667C6.38014 30.7269 3.7184 28.0651 3.70833 24.7786V10.112C3.7184 6.82545 6.38014 4.16371 9.66667 4.15365H24.3333C27.6198 4.16371 30.2816 6.82545 30.2917 10.112V24.7786ZM25.7083 10.5703C26.7209 10.5703 27.5417 9.74949 27.5417 8.73698C27.5417 7.72447 26.7209 6.90365 25.7083 6.90365C24.6958 6.90365 23.875 7.72447 23.875 8.73698C23.875 9.74949 24.6958 10.5703 25.7083 10.5703ZM17 9.19531C12.4437 9.19531 8.75 12.889 8.75 17.4453C8.75 22.0017 12.4437 25.6953 17 25.6953C21.5564 25.6953 25.25 22.0017 25.25 17.4453C25.255 15.2558 24.3872 13.1545 22.839 11.6063C21.2907 10.0581 19.1896 9.19044 17 9.19531ZM11.9583 17.4453C11.9583 20.2298 14.2155 22.487 17 22.487C19.7845 22.487 22.0417 20.2298 22.0417 17.4453C22.0417 14.6608 19.7845 12.4036 17 12.4036C14.2155 12.4036 11.9583 14.6608 11.9583 17.4453Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    title="Instagram"
                    className="flex items-center justify-center hover:text-secondary transition-colors"
                  >
                    <svg
                      width="38"
                      height="26"
                      viewBox="0 0 38 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                    >
                      <path
                        d="M36.5873 4.20486C36.3785 3.4301 35.9704 2.72354 35.4036 2.1555C34.8369 1.58747 34.1312 1.17777 33.3569 0.967196C30.4859 0.178863 19.0001 0.16603 19.0001 0.16603C19.0001 0.16603 7.51612 0.153196 4.64328 0.906696C3.86948 1.12696 3.16529 1.54245 2.59832 2.11328C2.03135 2.6841 1.62064 3.39108 1.40562 4.16636C0.64845 7.03736 0.641116 12.992 0.641116 12.992C0.641116 12.992 0.633783 18.976 1.38545 21.8177C1.80712 23.3889 3.04462 24.63 4.61762 25.0535C7.51795 25.8419 18.9726 25.8547 18.9726 25.8547C18.9726 25.8547 30.4584 25.8675 33.3294 25.1159C34.104 24.9057 34.8103 24.4969 35.3785 23.93C35.9466 23.3632 36.357 22.6578 36.569 21.8837C37.3279 19.0145 37.3334 13.0617 37.3334 13.0617C37.3334 13.0617 37.3701 7.07586 36.5873 4.20486ZM15.3261 18.5085L15.3353 7.50853L24.8814 13.0177L15.3261 18.5085Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}