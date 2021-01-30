import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0,
    }
  }

  // ボタンがクリックされたら、いいねをカウントアップする。
  componentDidMount() {
    document.getElementById('counter').addEventListener('click', this.countUp)
  }

  // 公開状態を反転する関数。
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    })
  };

  countUp = () => {
    this.setState(state => {
      return {count: this.state.count + 1 }
    })
  }

  render() {
    return (
      <>
        <Article
          title={"GitHub でローカルファイルを管理"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
      </>
    );
  }
}

export default Blog;
