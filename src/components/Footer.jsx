import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 bg-gradient-to-r from-[#1CB5E0] to-[#000851] text-white ">
      {/* Main links */}
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="/about-us">
          About us
        </a>
        <a className="link link-hover" href="/community">
          Community
        </a>
        <a className="link link-hover" href="/leaderboard">
          Leaderboard
        </a>
        <a className="link link-hover" href="mailto:info@aimodels.com">
          Contact: info@aimodels.com
        </a>
      </nav>

      <div className="text-center text-sm opacity-80 max-w-md">
        <p>123 Innovation Way, Tech Valley, CA 94043</p>
        <p>Building the next generation of AI collaboration.</p>
      </div>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on X"
          >
            {/* ... svg ... */}
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
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch us on YouTube"
          >
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
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Find us on Facebook"
          >
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
          {/* GitHub logo */}
          <a
            href="https://github.com/himel2535/ai-model-inventory-manager-client"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.334-1.756-1.334-1.756-1.089-.744.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.513 11.513 0 013.003-.404 11.51 11.51 0 013.003.404c2.289-1.552 3.295-1.23 3.295-1.23.656 1.653.244 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.371.814 1.102.814 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.303 24 12c0-6.629-5.371-12-12-12z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - **MODELS INVENTORY** . All rights reserved.
        </p>
      </aside>

    </footer>
  );
};

export default Footer;
