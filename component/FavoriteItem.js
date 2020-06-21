import { Card, Button } from "react-bootstrap";
import styles from "./FavoriteItem.module.css";
import fetch from "isomorphic-fetch";

const deleteFavItem = async (detail, onRemoveItem) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(detail),
  };

  const response = await fetch(
    "http://localhost:9000/favorite/remove",
    requestOptions
  );

  if (typeof onRemoveItem === "function") {
    onRemoveItem(detail);
  }
};

const FavoriteItem = ({ detail, onRemoveItem }) => {
  if (detail && detail.isLiked) {
    return (
      <div className={styles.cardPosition}>
        <Card>
          <img className={styles.imageSize} src={detail.src} />
          <Card.Body className={styles.textPosition}>
            <Card.Title>{detail.title}</Card.Title>
            <Card.Text>You Liked this picture</Card.Text>
            <Button
              variant="danger"
              onClick={() => deleteFavItem(detail, onRemoveItem)}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div className={styles.cardPosition}>
        <Card>
          <Card.Text>You don't have any liked item</Card.Text>
        </Card>
      </div>
    );
  }
};

export default FavoriteItem;
