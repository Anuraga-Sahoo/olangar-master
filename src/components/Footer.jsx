import React from "react";

const Footer = () => {
  return (
    <footer className="bg-examys-600 text-center text-white text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Our Offerings
            </h6>
            <div>
              <p className="mb-4">
                <a href="#!">Course</a>
              </p>
              <p className="mb-4">
                <a href="#!">Test series</a>
              </p>
              <p className="mb-4">
                <a href="#!">Examys Test pass pro+</a>
              </p>
              <p className="mb-4">
                <a href="#!">Examys ai</a>
              </p>
              <p className="mb-4">
                <a href="#!">Examys Inspire</a>
              </p>
              <p className="mb-4">
                <a href="#!">Examys First</a>
              </p>
              <p className="mb-4">
                <a href="#!">Doubt Clear</a>
              </p>
            </div>
          </div>
          {/* <!-- Products section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Company
            </h6>
            <p className="mb-4">
              <a href="#!">About us</a>
            </p>
            <p className="mb-4">
              <a href="#!">Careers</a>
            </p>
            <p className="mb-4">
              <a href="#!">Press & Media</a>
            </p>
            <p className="mb-4">
              <a href="#!">Sitemap</a>
            </p>
            <p className="mb-4">
              <a href="#!">Contact us</a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!">Pricing</a>
            </p>
            <p className="mb-4">
              <a href="#!">Settings</a>
            </p>
            <p className="mb-4">
              <a href="#!">Orders</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>

            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              support@examys.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              8144420436
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold" href="https://tw-elements.com/">
          Examys.com
        </a>
      </div>
    </footer>
    // </div>
  );
};

export default Footer;
