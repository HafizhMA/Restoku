import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import CardFavorite from "../Components/CardFavorite";

const FavoritePage = () => {
  // Ambil data restoran favorit dari localStorage
  const favoriteRestaurants =
    JSON.parse(localStorage.getItem("favoriteRestaurants")) || [];

  return (
    <>
      <Header />
      <section id="favoritePageSection">
        <Container>
          <CardFavorite favoriteRestaurants={favoriteRestaurants} />
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default FavoritePage;
