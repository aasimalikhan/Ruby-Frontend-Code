import React, { useState } from "react";

const Post = (props) => {
  const [postData, setPostData] = useState({
    text: "",
    description: "",
  });

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
    </div>
  );
};

export default Post;
