import React from "react";

export const List = ({
    items
  }) => {
    const elements = items.map((item) => < li key = {
        item.toString()
      } > {
        item
      } < /li>);
      return <ul > {
        elements
      } < /ul>;
    };