import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useNavigate} from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-6">mavonorm</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-6">
              Premier exhibition stand design and build specialists. We turn ordinary spaces into extraordinary brand experiences globally.
            </p>
            <div className="flex space-x-4 text-gray-400">
             <a href="#"><FaInstagram size={20}/></a>
             <a href="#"><FaFacebook size={20}/></a>
             <a href="#"><FaTwitter size={20}/></a>
             <a href="#"><FaLinkedin size={20}/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 font-light">
              <li><button onClick={() => navigate("/")} className="hover:text-orange-600 transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => navigate("/about")} className="hover:text-orange-600 transition-colors cursor-pointer">About Us</button></li>
              <li><button onClick={() => navigate("/services")} className="hover:text-orange-600 transition-colors cursor-pointer">Our Services</button></li>
              <li><button onClick={() => navigate("/portfolio")} className="hover:text-orange-600 transition-colors cursor-pointer">Portfolio</button></li>
              <li><button onClick={() => navigate("/contact")} className="hover:text-orange-600 transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Top Locations</h4>
            <ul className="space-y-4 text-gray-500 font-light">
              <li><span className="cursor-pointer hover:text-orange-600 transition-colors">New York</span></li>
              <li><span className="cursor-pointer hover:text-orange-600 transition-colors">Los Angeles</span></li>
              <li><span className="cursor-pointer hover:text-orange-600 transition-colors">Chicago</span></li>
              <li><span className="cursor-pointer hover:text-orange-600 transition-colors">Houston</span></li>
              <li><span className="cursor-pointer hover:text-orange-600 transition-colors">Las Vegas</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-gray-500 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-600 shrink-0" size={20} />
                <span>123 Exhibition Ave, Suite 400<br/>Design District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-600 shrink-0" size={20} />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-600 shrink-0" size={20} />
                <span>hello@mavonorm.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-light">
          <p>© {new Date().getFullYear()} Mavonorm Exhibits. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-gray-600">Privacy Policy</span>
            <span className="cursor-pointer hover:text-gray-600">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;