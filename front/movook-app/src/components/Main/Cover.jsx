import React from "react";

const Cover = ({ work }) => {
  const styleObj = {
    height: "250px",
    width: "170px",
    borderRadius: work.type === "book" ? "15px" : "0px",
    boxShadow: "0 4px 5px 1px gray",
    margin: "10px",
  };
  return (
    <div>
      <img style={styleObj} src={work.url} alt="영화 이미지" />
    </div>
  );
};

export default Cover;
