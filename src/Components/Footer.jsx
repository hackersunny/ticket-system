export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content border-t border-base-content/20">
      <div className="container mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm">
          {/* Left column - description (wider) */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-lg font-bold">CS — Ticket System</h2>
            <p className="opacity-75 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* COMPANY */}
          <div className="md:col-span-2">
            <h6 className="footer-title text-base mb-3 opacity-100 uppercase tracking-wide">
              COMPANY
            </h6>
            <ul className="space-y-2">
              <li><a className="link link-hover opacity-80 hover:opacity-100">About Us</a></li>
              <li><a className="link link-hover opacity-80 hover:opacity-100">Our Mission</a></li>
              <li><a className="link link-hover opacity-80 hover:opacity-100">Contact Sales</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-2">
            <h6 className="footer-title text-base mb-3 opacity-100 uppercase tracking-wide">
              SERVICES
            </h6>
            <ul className="space-y-2">
              <li><a className="link link-hover opacity-80 hover:opacity-100">Products & Services</a></li>
              <li><a className="link link-hover opacity-80 hover:opacity-100">Customer Stories</a></li>
              <li><a className="link link-hover opacity-80 hover:opacity-100">Download Apps</a></li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div className="md:col-span-2">
            <h6 className="footer-title text-base mb-3 opacity-100 uppercase tracking-wide">
              INFORMATION
            </h6>
            <ul className="space-y-2">
              <li><a className="link link-hover opacity-80 hover:opacity-100">Privacy Policy</a></li>
              <li><a className="link link-hover opacity-80 hover:opacity-100">Terms & Conditions</a></li>
              <li><a className="link link-hover opacity-80 hover:opacity-100">Join Us</a></li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div className="md:col-span-2">
            <h6 className="footer-title text-base mb-3 opacity-100 uppercase tracking-wide">
              SOCIAL LINKS
            </h6>
            <ul className="space-y-2">
              <li>
                <a className="link link-hover opacity-80 hover:opacity-100">
                  𝕏 @CS — Ticket System
                </a>
              </li>
              <li>
                <a className="link link-hover opacity-80 hover:opacity-100">
                  in @CS — Ticket System
                </a>
              </li>
              <li>
                <a className="link link-hover opacity-80 hover:opacity-100">
                  f @CS — Ticket System
                </a>
              </li>
              <li>
                <a className="link link-hover opacity-80 hover:opacity-100" href="mailto:support@cst.com">
                  support@cst.com
                </a>
              </li>
              <li>
                <a className="link link-hover opacity-80 hover:opacity-100" href="mailto:cst@cst.com">
                  cst@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - same dark background, centered */}
        <div className="mt-10 pt-6 border-t border-base-content/10 text-center text-sm opacity-70">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}