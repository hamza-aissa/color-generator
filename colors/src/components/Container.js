import color_names from "../colors.js";
import React from "react";

const Container = ({ name, color }) => {
  console.log("color prop value:", color);
  const lowercase_color = color.toLowerCase();

  let found_color = null;

  for (let key in color_names) {
    if (key.toLowerCase() === lowercase_color) {
      found_color = color_names[key];
      break;
    }
  }

  const colore = found_color ? found_color : "#ffff";
  // const lowercaseColor = color.toLowerCase();
  // const colore = color_names.hasOwnProperty(color)
  //   ? color_names[color]
  //   : "#ffff";

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 200,
    padding: 20,
    backgroundColor: colore,
    textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
  };
  return (
    <div style={styles}>
      <h3>{name ? name : "empty value"}</h3>
    </div>
  );
};
export default Container;
