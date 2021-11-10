import axios from "axios";
import React from "react";

function FetchName() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://api.npms.io/v2/search?q=react")
    .then((response) => {
      setPost(response.data.results);
    });
  }, []);

  return (
 /*  <div>
      {post.map((result) => {
        console.log(result.searchScore)})}
        </div>
  );
}*/
<div>
{post.find((result) => {
  console.log(result.searchScore)})}
  </div>
);
}


export default FetchName