import { Card } from "react-bootstrap";
import styles from "./NewsFeedItem.module.css";
import fetch from "isomorphic-fetch";

class NewsFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike: props.detail.isLiked,
    };
  }

  async sendDataToBackend() {
    const { detail } = this.props;

    detail.isLiked = this.state.isLike;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(detail),
    };

    const response = await fetch(
      "http://localhost:9000/favorite/update",
      requestOptions
    );
  }

  heartClickHandler = () => {
    this.setState(
      {
        isLike: !this.state.isLike,
      },
      this.updateHeart
    );
  };

  updateHeart = () => {
    const { index, id } = this.props.detail;

    const heart = document.getElementById(id);
    const addClass = this.state.isLike ? "fa-heart" : "fa-heart-o";
    const removeClass = this.state.isLike ? "fa-heart-o" : "fa-heart";

    heart.classList.remove(removeClass);
    heart.classList.add(addClass);
    this.sendDataToBackend();

    if (typeof this.props.clickOnHeart === "function") {
      this.props.clickOnHeart(index);
    }
  };

  render() {
    const { detail } = this.props;

    return (
      <div className={styles.cardPosition}>
        <Card>
          <Card.Img
            className={styles.imageSize}
            variant="top"
            src={detail.src}
          />
          <Card.Body>
            <span onClick={this.heartClickHandler}>
              <i
                id={detail.id}
                className="fa fa-heart-o"
                aria-hidden="true"
              ></i>
            </span>
            <Card.Title>{detail.title}</Card.Title>
            <Card.Text>
              Animals are a diverse group of organisms that make up the kingdom
              known as Animalia. ... The general description of an animal is a
              multicellular, heterotrophic organism
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">#wildLife</small>
          </Card.Footer>
        </Card>
        <style jsx>{`
          .fa-heart-o {
            color: red;
            cursor: pointer;
          }

          .fa-heart {
            color: red;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

export default NewsFeedItem;
