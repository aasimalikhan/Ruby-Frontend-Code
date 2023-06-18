import React, { useState } from "react";

const Post = (props) => {
  const [postData, setPostData] = useState({
    text: "",
    description: "",
  });

  const [postAllData, setPostAllData] = useState([]);

  const handleInputChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };
  console.log(props);

  const handlePostSubmit = async (event) => {
    try {
      event.preventDefault();
      const user_id = props.loggedUserData.id;
      // const { username, password, email } = props.userData;
      const { text, description } = postData;

      const response = await fetch(
        `http://localhost:3000/users/${user_id}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            post: {
              text,
              description,
            },
          }),
        }
      );
      const responseData = await response.json();
      // props.setLoggedUserData(responseData);
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllPosts = async (req, res) => {
    const response = await fetch("http://localhost:3000/posts");
    const responseData = await response.json();
    setPostAllData(responseData);
    console.log(responseData);
  };
  return (
    <div className="post_create_container">
      <form onSubmit={handlePostSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Text"
          value={postData.text}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={postData.description}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>

      <button type="submit" onClick={getAllPosts}>
        Get All Posts
      </button>
      {postAllData.length ? (
        <div className="posts_container">
          {postAllData.map((data) => {
            console.log(data);
            // const timestamp = '2023-06-18T12:50:37.966Z';
            const date = new Date(data.created_at);
            console.log(date);
            const options = { year: "numeric", month: "long", day: "numeric" };
            const formattedDate = date.toLocaleDateString(undefined, options);

            console.log(formattedDate); // Output: June 18, 2023

            return (
              <div className="post_item">
                <h2>{data.text}</h2>
                <h2>{data.description}</h2>
                <h2>{formattedDate}</h2>
              </div>
            );
            return <h1>Post1</h1>;
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;
