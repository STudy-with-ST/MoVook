import React from "react";
import styled from "styled-components";
import AddImg from "../../assets/img/main/CoverAdd.jpg";

const CoverAdd = () => {
  return <Poster src={AddImg} alt="추가 이미지" />;
};

export default CoverAdd;

const Poster = styled.img`
  height: 250px;
  width: 170px;
  border-radius: 15px;
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
