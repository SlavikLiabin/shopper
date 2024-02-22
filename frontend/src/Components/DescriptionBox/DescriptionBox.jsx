import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum
          provident dolores iusto suscipit, porro, vel enim molestiae adipisci
          error nostrum. Voluptatem excepturi quia saepe voluptas. Repellat
          laboriosam eaque consequatur praesentium incidunt, placeat veritatis,
          vel quasi cum dolorem asperiores! Reiciendis numquam optio vero odio
          ipsum veritatis, nulla tempora molestias consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          assumenda, suscipit quibusdam totam natus quos in asperiores, voluptas
          ab, molestias fugit. Libero, pariatur. Error saepe ad accusamus,
          possimus id tempore non asperiores veniam molestiae dolores?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
