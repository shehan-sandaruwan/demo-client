import Head from "next/head";
import Layout, { siteTitle } from "../component/Layout";
import NewsFeedItem from "../component/NewsFeedItem";
import styles from "../public/utils.module.css";

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      newsFeedItemList: [
        {
          index: 0,
          src: "./tiger.jpg",
          title: "Tiger",
          id: "1_tiger",
          isLiked: false,
        },
        {
          index: 1,
          src: "./turtle.jpg",
          title: "Turtle",
          id: "2_turtle",
          isLiked: false,
        },
        {
          index: 2,
          src: "./sambar-deer.jpg",
          title: "Samber Deer",
          id: "3_deer",
          isLiked: false,
        },
        {
          index: 3,
          src: "./squirrel.jpg",
          title: "Squrrel",
          id: "4_squirrel",
          isLiked: false,
        },
        {
          index: 4,
          src: "./pupy.jpg",
          title: "Pupy",
          id: "5_pupy",
          isLiked: false,
        },
      ],
    };
  }

  handleNewsFeedItemList = (index) => {
    const newsFeedItemList = [...this.state.newsFeedItemList];

    newsFeedItemList[index].isLiked = true;

    this.setState({ newsFeedItemList });
  };

  render() {
    const { newsFeedItemList } = this.state;

    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        </Head>
        <div className={styles.topClearance}>
          {newsFeedItemList.map((item, key) => {
            return (
              <NewsFeedItem
                key={key}
                detail={item}
                clickOnHeart={this.handleNewsFeedItemList}
              />
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default Home;
