import Logo from "../assets/tem.png";
const Blog = () => {
  return (
    <>
      <div className="container w-full h-[100vh] bg-white px-28">
        <div className="row flex justify-between">
          <div className="w-50 h-[100vh] text-black flex flex-col items-start justify-center">
            <h3 className="text-5xl mb-4">I{"'"}m Mukesh Pathak</h3>
            <p className="text-lg">Fullstack Developer & Instructor</p>
            <p className="text-lg mt-4 w-[40vw]">
              Hi there! My name is Mukesh Pathak and I’m a software engineer
              with over 7+ years of experience in the Web Development industry.
              I love all things tech and coding, and on my channel, I share my
              knowledge and experience with others.
            </p>
            <a
              href="#"
              className="mt-6 relative text-sm sm:text-md md:text-lg text-center items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Visit Us
            </a>
          </div>
          <div className="w-50 h-[100vh] text-black flex flex-col items-start justify-center pl-12">
            <img src={Logo} alt="" className="w-[500px] h-[500px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
