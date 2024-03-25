// Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full h-96 flex flex-col items-center justify-between px-12 text-white">
      <div className="container mx-auto pt-11">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="font-bold mb-6 text-2xl">Technical Mickey</h3>
            <p className="leading-7 text-base  text-justify">
              Hi there! My name is{" "}
              <span className="text-base text-yellow-400">Mukesh Pathak</span>{" "}
              and I’m a software engineer with over 7<sup>+</sup> years of
              experience in the Web Development industry. I love all things tech
              and coding, and on my channel, I share my knowledge and experience
              with others.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold mb-6 text-2xl">About Us</h3>
            <div className="about flex flex-col gap-6">
              <h3 className="hover:text-yellow-400 cursor-pointer">About Us</h3>
              <h3 className="hover:text-yellow-400 cursor-pointer">Course</h3>
              <h3 className="hover:text-yellow-400 cursor-pointer">Blog</h3>
              <h3 className="hover:text-yellow-400 cursor-pointer">
                Contact Us
              </h3>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold mb-6 text-2xl">Quick Link</h3>
            <div className="about flex flex-col gap-6">
              <h3 className="hover:text-yellow-400 cursor-pointer">
                Pravicy Policy
              </h3>
              <h3 className="hover:text-yellow-400 cursor-pointer">
                Term of Use
              </h3>
              <h3 className="hover:text-yellow-400 cursor-pointer">Dis</h3>
              <h3 className="hover:text-yellow-400 cursor-pointer">
                Contact Us
              </h3>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold mb-6 text-2xl">Follow Us</h3>
            <div className="about flex flex-col gap-6">
              <h3 className="hover:text-yellow-400 cursor-pointer">Instgram</h3>
              <h3 className="hover:text-yellow-400 cursor-pointer">YouTube</h3>
              <h3 className="hover:text-yellow-400 cursor-pointer">Facebook</h3>
              <h3 className="hover:text-yellow-400 cursor-pointer">Twitter</h3>
              <h3 className="hover:text-yellow-400 cursor-pointer">LinkedIn</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full pt-2 h-10 text-center pb-4 border-t-2 border-teal-50">
        © Copyright 2024 - Developed by Technical Mickey. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
