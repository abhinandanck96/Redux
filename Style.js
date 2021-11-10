import axios from "axios";
import React from "react";

function FetchData() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://api.npms.io/v2/search?q=react")
    .then((response) => {
      setPost(response.data.results);
    });
  }, []);

  return (
<div>
 {post.filter(result=>result.searchScore<7).map(filteredresult => 
    {
      console.log(filteredresult.searchScore)
    }
)}
</div>
  )
}


export default FetchData