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
              <div onClick={() => props.deleteFriend(friend.id)}>
                Delete Friend?
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default Friend;