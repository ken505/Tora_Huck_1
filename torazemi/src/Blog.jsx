import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "ToraHuck";
    return (
      <div>
        <Article
          title={"React の使い方"}
          order={2021}
          isPublished={true}
          author={authorName}
        />
      </div>
    );
  }
}

export default Blog;
