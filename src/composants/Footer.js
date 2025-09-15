import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-gradient-to-b from-gray-400 to-black  border-t-2 border-gray-900 pt-4 text-white  p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 max-w-6xl mx-auto">

        {/* Social Media Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.instagram.com/zizou_k25?utm_source=qr&igsh=Y3N3bmM5OTdiaHU1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1DHt5NHWba/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/+213774392043"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center gap-2">
            <MdEmail className="text-xl text-green-400" /> yazidkhoualdi5@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <MdLocationOn className="text-xl text-red-400" /> Béjaia, Algeria
          </p>
          <p className="flex items-center gap-2">
            <MdPhone className="text-xl text-blue-400" /> +213 774 39 20 43
          </p>
        </div>
      </div>

      
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Lyazid coaching. All rights reserved.
      </div>
    </footer>
  );
}
