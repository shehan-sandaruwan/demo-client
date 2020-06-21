import Head from "next/head";
import Layout from "../component/Layout";
import FavoriteItem from "../component/FavoriteItem";
import fetch from "isomorphic-fetch";
import styles from "../public/utils.module.css";
import { Card, Button } from "react-bootstrap";

class Favorite extends React.Component {
  constructor(props) {
    super(props);

    this.showInitButton = true;

    this.state = {
      favItemList: [],
    };

    this.fetchFavoriteData = this.fetchFavoriteData.bind(this);
    this.removeFavItem = this.removeFavItem.bind(this);
  }

  async fetchFavoriteData() {
    fetch("http://localhost:9000/favorite")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ favItemList: data });
      });

    this.showInitButton = false;
  }

  removeFavItem(favItem) {
    this.showInitButton = false;
    this.setState({
      favItemList: this.state.favItemList.filter(
        (item) => item.index !== favItem.index
      ),
    });
  }

  render() {
    const { favItemList } = this.state;

    return (
      <Layout>
        <div>
          <Head>
            <title>Favorites</title>
          </Head>
          {this.showInitButton ? (
            <div className={styles.cardPosition}>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Button variant="primary" onClick={this.fetchFavoriteData}>
                    Show Favorite
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ) : (
            ""
          )}
          <div className={styles.topClearance}>
            {favItemList.length > 0 ? (
              favItemList.map((element, key) => {
                return (
                  <FavoriteItem
                    key={key}
                    detail={element}
                    onRemoveItem={this.removeFavItem}
                  />
                );
              })
            ) : !this.showInitButton && !favItemList.length ? (
              <FavoriteItem />
            ) : (
              ""
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Favorite;
