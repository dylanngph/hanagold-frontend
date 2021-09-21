import Link from "./Link";
import { ExternalLinkIcon } from '@heroicons/react/outline';
const LinkExternal = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      <ExternalLinkIcon width="20" color="primary"/>
    </Link>
  );
};

export default LinkExternal;
