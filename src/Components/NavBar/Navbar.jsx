import './Navbar.scss';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* wrapper */}
      <div className="wrapper">
        <motion.span
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{duration: 0.5}}
        >
          Lama dev
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/public/facebook.png" alt="fb" />
          </a>
          <a href="#">
            <img src="/public/instagram.png" alt="ins" />
          </a>
          <a href="#">
            <img src="/public/dribbble.png" alt="db" />
          </a>
          <a href="#">
            <img src="/public/youtube.png" alt="yt  " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
