import React from "react";
export default (props) => {
  return (
    <div>
      <h1> Arena {props.arena}</h1>

      {React.Children.map(props.children, (hero) => {
        return React.cloneElement(hero, {
          ...props,
        });
      })}
    </div>
  );
};
