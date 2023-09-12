import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog }) => {
  // console.log(blog);
  const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
  return (
    <div className="mt-5">
      <div>
        <img className="max-w-full mb-5" src={cover} alt="" />
      </div>

      <div className="px-3">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <img className="w-14" src={author_img} alt="" />
            <div>
              <h3 className="text-2xl font-bold">{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>
          <div>
            <span>{`${reading_time} min read`}</span>
            <button className="ml-4">
              <FaRegBookmark></FaRegBookmark>
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-4xl">{title}</h2>
          <p>
            {hashtags.map((hashtag, idx) => (
              <span className="mr-4" key={idx}>
                #{hashtag}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
