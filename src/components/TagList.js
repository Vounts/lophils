import React from "react";
import Tag from "./Tag";
export default function TagList({ tags }) {
  return tags.map((tag, idx) => {
    return <Tag key={idx} tag={tag.tag} />;
  });
}
