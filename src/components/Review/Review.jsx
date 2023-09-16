import React from "react";
import Container from "../Shared/Container";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className=" text-center mx-auto  pb-10">
          <h2 className="text-4xl md:text-6xl pb-2  "> Testimonials</h2>
          <p>
            Publish the best of your client testimonials and let the world know
            what a great agent or real estate agency you are. Testimonials build
            trust.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <ReviewCard
            name={"Susan Barkley"}
            title={"happy seller"}
            quote={
              "It is a long established fact that a reader will be point distracted by the readable content of a page when looking at its layout."
            }
            imgLink={
              "https://wpresidence.net/wp-content/uploads/2022/10/testimonial-1-5-4.jpg"
            }
          ></ReviewCard>
          <ReviewCard
            name={"Lisa Simpson"}
            title={" happy buyer "}
            quote={
              "It is a long established fact that a reader will be point distracted by the readable content of a page when looking at its layout."
            }
            imgLink={
              "https://wpresidence.net/wp-content/uploads/2022/01/testimonial5.jpg"
            }
          ></ReviewCard>
          <ReviewCard
            name={"Jessica Fowley "}
            title={" happy buyer "}
            quote={
              "It is a long established fact that a reader will be point distracted by the readable content of a page when looking at its layout."
            }
            imgLink={
              "https://wpresidence.net/wp-content/uploads/2022/01/testimonials6.jpg"
            }
          ></ReviewCard>
          <ReviewCard
            name={"Esther Howard"}
            title={"Foundar"}
            quote={
              "It is a long established fact that a reader will be point distracted by the readable content of a page when looking at its layout."
            }
            imgLink={
              "https://cdn.cmsfly.com/640715c61ca9ad02e5c0300f/ellipse-2-dNOSSV.png"
            }
          ></ReviewCard>
          <ReviewCard
            name={"Esther Howard"}
            title={"Foundar"}
            quote={
              "It is a long established fact that a reader will be point distracted by the readable content of a page when looking at its layout. "
            }
            imgLink={
              "https://cdn.cmsfly.com/640715c61ca9ad02e5c0300f/ellipse-2-dNOSSV.png"
            }
          ></ReviewCard>
          <ReviewCard
            name={"Esther Howard"}
            title={"Foundar"}
            quote={
              "It is a long established fact that a reader will be point distracted by the readable content of a page when looking at its layout."
            }
            imgLink={
              "https://cdn.cmsfly.com/640715c61ca9ad02e5c0300f/ellipse-2-dNOSSV.png"
            }
          ></ReviewCard>
        </div>
      </Container>
    </div>
  );
};

export default Review;
