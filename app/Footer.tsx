// components/Footer.tsx
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 mt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left: Contact + Address */}
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Contact
          </h2>
          <p>
            Email:{" "}
            <a href="mailto:info@example.com" className="hover:underline">
              info@example.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+49123456789" className="hover:underline">
              +49 123 456 789
            </a>
          </p>
          <p className="mt-2 leading-relaxed">
            Example Street 12
            <br />
            12345 Example City
            <br />
            Germany
          </p>
        </div>

        {/* Middle: Social Links */}
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Follow Me
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                <Instagram size={20} /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <Twitter size={20} /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-500 transition"
              >
                <Youtube size={20} /> YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Legal Links */}
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Legal
          </h2>
          <ul className="space-y-3">
            <li>
              <a href="/footerlinks/impressum" className="hover:underline">
                Impressum
              </a>
            </li>
            <li>
              <a href="/footerlinks/disclaimer" className="hover:underline">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="/footerlinks/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Your Name — All rights reserved.
      </div>
    </footer>
  );
}
