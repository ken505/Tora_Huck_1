import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      order: 1
    }
  }

  // 公開状態を反転する関数。
togglePublished = () => {
  this.setState( {
    isPublished: !this.state.isPublished
  })
};

  render() {
    return (
      <>
        <Article
          title={"GitHub でローカルファイルを管理"}
          isPublished={this.state.isPublished} toggle={() => this.togglePublished()}
        />
      </>
    );
  }
}

export default Blog;
