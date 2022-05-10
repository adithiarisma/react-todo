import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

const TodosList = ({ todos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} idx={i} />
      ))}
    </div>
  );
};
const mapStateToProps = ({ todos }) => ({
  todos,
});
export default connect(mapStateToProps)(TodosList);
