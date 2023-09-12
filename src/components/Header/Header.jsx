import profilImage from "../../assets/images/profile.png";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";
const Header = () => {
  return (
    <div className="">
      <header className="flex  justify-between items-center mb-6 font-bold">
        <h1 className="text-4xl">Knowledge Cafe</h1>
        <img className="" src={profilImage} alt="" />
      </header>
      <hr />
      <main>
        <div className="md:flex">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </main>
    </div>
  );
};

export default Header;
