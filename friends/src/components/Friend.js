import React from "react";

const Friend = (props) => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <div key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Friend;