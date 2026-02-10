export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1fb6c6] via-[#6b3fa0] to-[#6b3fa0] pt-24 px-6 pb-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#1e2330]">Company</h3>
            <ul className="space-y-2 text-[#1e2330]">
              <li>
                <a href="#" className="hover:underline">
                  The Linktree Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Engineering Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  What&apos;s New
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Link in Bio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Social Good
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#1e2330]">Community</h3>
            <ul className="space-y-2 text-[#1e2330]">
              <li>
                <a href="#" className="hover:underline">
                  Linktree for Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  2023 Creator Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  2022 Creator Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Charities
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Creator Profile Directory
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Explore Templates
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#1e2330]">Support</h3>
            <ul className="space-y-2 text-[#1e2330]">
              <li>
                <a href="#" className="hover:underline">
                  Help Topics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Linktree Pro
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features & How-Tos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Report a Violation
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#1e2330]">
              Trust & Legal
            </h3>
            <ul className="space-y-2 text-[#1e2330]">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Trust Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies Preferences
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Transparency Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Law Enforcement Access Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Human Rights
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="px-6 py-3 bg-white border-2 border-[#1e2330] text-[#1e2330] rounded-lg md:rounded-full font-semibold hover:bg-gray-50">
              Log in
            </button>
            <button className="px-6 py-3 bg-[#d2e823] text-[#1e2330] rounded-lg md:rounded-full font-semibold hover:bg-[#c6de15]">
              Get started for free
            </button>
          </div>

          <div className="flex flex-wrap gap-3 items-center justify-center">
            {/* App Store */}
            <a
              href="#"
              className="bg-[#1e2330] text-white px-4 py-2 rounded-lg md:rounded-full flex items-center gap-2 hover:bg-[#2a3340]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-xs">App Store</span>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="bg-[#1e2330] text-white px-4 py-2 rounded-lg md:rounded-full flex items-center gap-2 hover:bg-[#2a3340]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span className="text-xs">Google Play</span>
            </a>

            {/* Social Icons */}
            <a
              href="#"
              className="bg-[#1e2330] text-white w-10 h-10 rounded-lg md:rounded-full flex items-center justify-center hover:bg-[#2a3340]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </a>

            <a
              href="#"
              className="bg-[#1e2330] text-white w-10 h-10 rounded-lg md:rounded-full flex items-center justify-center hover:bg-[#2a3340]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="#"
              className="bg-[#1e2330] text-white w-10 h-10 rounded-lg md:rounded-full flex items-center justify-center hover:bg-[#2a3340]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>

            <a
              href="#"
              className="bg-[#1e2330] text-white w-10 h-10 rounded-lg md:rounded-full flex items-center justify-center hover:bg-[#2a3340]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center pt-10 pb-0">
        <p className="text-white text-2xl md:text-3xl font-bold">
          Created by Sarrah ❤️
        </p>
      </div>
    </footer>
  );
}
