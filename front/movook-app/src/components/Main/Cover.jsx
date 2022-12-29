import React from "react";
import styled from "styled-components";

const goSpecificOne = (review) => {
  review.movie_id === null ? console.log("책 클릭:" + review.book_id) : console.log("영화 클릭: " + review.movie_id);
};

const Cover = ({ review }) => {
  return <Poster review={review} onClick={() => goSpecificOne(review)} src={review.image} alt="이미지" />;
};

export default Cover;

const Poster = styled.img`
  height: 250px;
  width: 170px;
  border-radius: ${(props) => (props.review.movie_id === null ? "15px" : "0px")};
  box-shadow: 0 4px 5px 1px gray;
  margin: 10px;
  cursor: pointer;
`;

// :onclick {
//     ${(props) =>
//       props.review.movie_id === null
//         ? console.log("책id: " + props.review.book_id)
//         : console.log("영화id: " + props.review.movie_id)}
//   }
