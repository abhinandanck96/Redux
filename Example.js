import axios from "axios";
import React from "react";

function FetchRequest() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://api.npms.io/v2/search?q=react")
    .then((response) => {
      setPost(response.data.results);
    });
  }, []);

  return (
   <div>
      {post.forEach((result) => {
        console.log(result.searchScore)})}
        </div>
  );
}

export default FetchRequest