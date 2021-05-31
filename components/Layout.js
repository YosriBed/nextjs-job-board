import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div
    className='font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex flex-col md:space-y-8'
    style={{
      backgroundImage: "url('https://source.unsplash.com/random')",
      minHeight: "100vh",
    }}
  >
    <Navbar />

    <main className='bg-cover flex-grow'>{children}</main>

    <Footer />
  </div>
);
export default Layout;
