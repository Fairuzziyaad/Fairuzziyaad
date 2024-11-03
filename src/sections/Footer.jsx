const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Created by Fairuz Ziyaad Purnomo</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon w-10 h-10 flex items-center justify-center">
          <a href="https://github.com/Fairuzziyaad" target="_blank" className="w-full h-full flex items-center justify-center">
            <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
          </a>
        </div>
        <div className="social-icon w-10 h-10 flex items-center justify-center">
          <a href="https://www.instagram.com/zyaadp/" target="_blank" className="w-full h-full flex items-center justify-center">
            <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
