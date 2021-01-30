import React from "react";
import Article from "./Article";
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge'

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0,
    };
  }

  // ボタンがクリックされたら、いいねをカウントアップする。
  componentDidMount() {
    document.getElementById("counter").addEventListener("click", this.countUp);
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({ count: 0 });
    }
  }

  componentWillUnmount() {
    document.getElementById("counter").removeEventListener("click", this.countUp);
  }

  // 公開状態を反転する関数。
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished,
    });
  };

  countUp = () => {
    this.setState((state) => {
      return { count: this.state.count + 1 };
    });
  };

  render() {
    return (
      <>
        <Article
          title={"GitHub でローカルファイルを管理"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </>
    );
  }
}

export default Blog;
