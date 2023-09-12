import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-10">
        <Header></Header>
        <main>
          <div className="md:flex">
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
