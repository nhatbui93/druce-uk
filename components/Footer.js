export default function Footer() {
  return (
    <footer className="bg-[#B7C2CB] py-12">
      <div className="wrapper">
        <div className="grid md:grid-cols-3 grid-cols-1 auto-cols-auto gap-x-[115px]">
          <div className="text-primary">
            <div className="text-sm">
              <h3 className="font-bold mb-1">
                © 2023 Druce & Co (International) Ltd.
              </h3>
              <p>
                All rights reserved. Druce & Co (International) Ltd,
                incorporated and registered in England and Wales.
              </p>
              <p className="mt-7">
                Registration Number: 13695288 Registered Office: Montpelier
                House 106 Brompton Road, Knightsbridge, London, England, SW3 1JJ
              </p>
            </div>
            <ul className="mt-7">
              <li>
                <a href="#" className="underline font-base">
                  Terms & Fees
                </a>
              </li>
              <li>
                <a href="#" className="underline font-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="underline font-base">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="text-primary">
            <h3 className="text-4xl mb-7 font-heading font-medium">
              HEAD OFFICE
            </h3>
          </div>
          <div className="text-primary">
            <h3 className="text-4xl mb-7 font-heading font-medium">@DRUCE</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
