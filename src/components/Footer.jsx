import { Link } from 'react-router-dom'; 
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PharmaBeauty</h3>
            <p>Your premium destination for beauty products and gifts.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1Ch1iyQpNd/"><FaFacebook /></a>
              <a href="https://www.instagram.com/mennahelal4?igsh=YzljYTk1ODg3Zg=="><FaInstagram /></a>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} BeautyGift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;