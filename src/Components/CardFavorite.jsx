import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDetailRestaurant } from "../CONFIG/ApiConsume";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const mediumResolution = `https://restaurant-api.dicoding.dev/images/medium/`;

function CardFavorite({ favoriteRestaurants }) {
  const [favoriteRestaurantData, setFavoriteRestaurantData] = useState([]);

  function truncateDescription(description, wordCount) {
    const words = description.split(" ");
    return words.length <= wordCount
      ? description
      : words.slice(0, wordCount).join(" ") + "...";
  }

  useEffect(() => {
    async function fetchFavoriteRestaurantData() {
      const restaurantData = [];

      for (const restaurantId of favoriteRestaurants) {
        try {
          const data = await getDetailRestaurant(restaurantId);
          restaurantData.push(data);
        } catch (error) {
          console.error("Error fetching restaurant details:", error);
        }
      }

      setFavoriteRestaurantData(restaurantData);
    }

    fetchFavoriteRestaurantData();
  }, [favoriteRestaurants]);

  return (
    <Row>
      {favoriteRestaurantData.map((restaurant) => (
        <Col key={restaurant.id} lg={4} md={6} sm={12} className="my-3">
          <Card className="rounded-3">
            <Card.Img
              className="cardimg"
              variant="top"
              src={`${mediumResolution}${restaurant.pictureId}`}
              alt={restaurant.name}
            />
            <Card.Body className="cards text-black">
              <Link className="cardLink" to={`/detail/${restaurant.id}`}>
                <Card.Title>{restaurant.name}</Card.Title>
              </Link>
              <div className="cityNrating d-flex justify-content-between">
                <h5 className="city">Kota: {restaurant.city}</h5>
                <h5 className="rating">Rating: {restaurant.rating}</h5>
              </div>
              <Card.Text>
                {truncateDescription(restaurant.description, 30)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardFavorite;
