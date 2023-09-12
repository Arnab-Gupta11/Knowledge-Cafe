import profilImage from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <div className="flex  justify-between items-center mb-6 font-bold">
        <h1 className="text-4xl">Knowledge Cafe</h1>
        <img className="" src={profilImage} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default Header;
