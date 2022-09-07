import React from "react";
import { Link } from "react-scroll";
MenuItem.propTypes = {};

function MenuItem(props) {
  const { name, Icon, className, color, to } = props;
  return (
    <Link
      className={className}
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <Icon style={{ color: color }} className="icon" />
      <span> {name}</span>
    </Link>
  );
}

export default MenuItem;
