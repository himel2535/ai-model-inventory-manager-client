import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      {/* Main links */}
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#">About us</a>
        <a className="link link-hover" href="#">Contact</a>
        <a className="link link-hover" href="#">Jobs</a>
        <a className="link link-hover" href="#">Press kit</a>
      </nav>

      {/* Social icons */}
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* X (Twitter) logo - CORRECTED */}
          <a href="YOUR_X_PROFILE_LINK" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="w-6 h-6"
              fill="currentColor"
            >
              <path 
                d="M18.901 1.144h3.585l-7.34 8.791L24 22.856h-8.243L8.601 13.92 1.625 22.856H0L9.07 11.23L0 1.144h8.461l5.372 6.786L18.901 1.144ZM17.818 20.678h2.052L6.471 3.253H4.257l13.561 17.425Z" 
                fill="currentColor"
              />
            </svg>
          </a>

          {/* YouTube logo */}
          <a href="YOUR_YOUTUBE_LINK" target="_blank" rel="noopener noreferrer" aria-label="Watch us on YouTube">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>

          {/* Facebook logo */}
          <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer" aria-label="Find us on Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by **AI Models Inventory Manager**.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;