import axios from "axios";
import React from "react";

function FetchValue() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://api.npms.io/v2/search?q=react")
    .then((response) => {
      setPost(response.data.results);
    });
  }, []);


  return (
  <div>
  {post.reduce((a,b)=>{return a+b.searchScore},0)
  }
</div>
   )
}
export default FetchValue