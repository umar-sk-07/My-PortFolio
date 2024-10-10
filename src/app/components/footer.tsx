// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-black mt-3 py-3">
      <h1 className="text-center text-white">Portfolio</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Where to find me */}
          <div className="py-3">
            <h4 className="text-white">Where to find me</h4>
            <hr className="border-indigo-500 my-2"/>
            <p className="text-white">
              Tingre nagar, Arman Building, <br /> Pune, Maharashtra, India
            </p>
          </div>
          {/* Follow me */}
          <div className="py-3">
            <p className="text-white">Follow me</p>
            <hr className="border-indigo-500 my-2"/>
            <ul className="list-none space-y-2">
              <li>
                <a href="https://github.com/umar-sk-07" className="text-indigo-500 hover:text-red-500">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/umar-shaikh-723765191/" className="text-indigo-500 hover:text-red-500">LinkedIn</a>
              </li>
              <li>
                <a href="https://leetcode.com/umar_sk_27/" className="text-indigo-500 hover:text-red-500">LeetCode</a>
              </li>
              <li>
                <a href="https://www.hackerrank.com/profile/umar_shaikh27201" className="text-indigo-500 hover:text-red-500">HackerRank</a>
              </li>
            </ul>
          </div>
          {/* Contact me */}
          <div className="py-3">
            <p className="text-white">Contact me</p>
            <hr className="border-indigo-500 my-2"/>
            <ul className="list-none">
              <li>
                <a href="https://wa.me/9112349119" className="text-indigo-500 hover:text-red-500">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Subscribe section */}
        <div className="text-center mt-6">
          <h3 className="text-white">Subscribe</h3>
        </div>
        {/* Credits */}
        <div className="text-center mt-4 text-white">
          Developed by Umar Shaikh{" "}
          <a href="https://github.com/umar-sk-07/PortFolio" className="text-indigo-500 hover:text-red-500">
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
