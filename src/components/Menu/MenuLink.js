import { NavLink } from "react-router-dom";

const MenuLink = ({ href, ...otherProps }) => {
  const isHttpLink = href?.startsWith("http");
  const Tag = isHttpLink ? "a" : NavLink;
  const props = isHttpLink ? { href } : { to: href };
  return <Tag {...props} {...otherProps} />;
};

export default MenuLink;
