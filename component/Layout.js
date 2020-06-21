import Navbar from "./Navbar";
import NewsFeedItem from "./NewsFeedItem";
import styles from "./Layout.module.css";
import FavoriteItem from "./FavoriteItem";

export const siteTitle = "Demo App";

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  }
}
