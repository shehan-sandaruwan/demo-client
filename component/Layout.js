import Navbar from "./Navbar";
import NewsFeedItem from "./NewsFeedItem";
import styles from "./Layout.module.css";
import FavoriteItem from "./FavoriteItem";
import FooterMenu from "./FooterMenu";

export const siteTitle = "Demo App";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const { children } = this.props;
    const { windowWidth } = this.state;

    return (
      <div>
        {windowWidth > 500 ? <Navbar /> : <FooterMenu />}
        {children}
      </div>
    );
  }
}
