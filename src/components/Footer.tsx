

function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
              <p className="mb-4">
              I’m a web developer with 1+ year of experience in TypeScript, JavaScript, Next.js, React.js, and Node.js, and I’m currently strengthening my backend development skills to become a first-class, well-rounded full-stack developer. Additionally, I have 10+ months of hands-on experience in cybersecurity, with a solid foundation in networking and operating systems.
              </p>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
              <ul>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/manish-prasad-gupta-053822258/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Linkedin
                </a>
                <a
                  href="https://x.com/ManishP42890265"
                  className="hover:text-white transition-colors duration-300"
                >
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/mnisprsd0201/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
              <p>MEGHALAYA, India</p>
              <p>Email:codingengineer2002@gmail.com</p>
            </div>
            </div>
        </footer>
      )
}

export default Footer;
