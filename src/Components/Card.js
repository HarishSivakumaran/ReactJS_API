import React from "react";

const Card = ({ userData }) => {
  return (
    <div class="card mb-3 align-items-center py-5">
      <img
        src={userData.picture?.large}
        className="card-img-top w-25 rounded-circle"
        style={{ position: "absolute", bottom: "170px" }}
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title mt-5">{`${userData.name?.title}. ${userData.name?.first} ${userData.name?.last}`}</h5>
        <p class="card-text">{userData.email}</p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
