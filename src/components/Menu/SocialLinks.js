import React from "react";
import Flex from "components/Box/Flex";
import Dropdown from "components/Dropdown/Dropdown";
import Link from "components/Link/Link";
import { socials } from "config/index";

const SocialLinks = () => (
    <Flex>
      {socials.map((social, index) => {
        const Icon = social.icon;
        const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
        if (social.items) {
          return (
              <Dropdown key={social.label} position="top" target={<Icon {...iconProps} />}>
                {social.items.map((item) => (
                    <Link external key={item.label} href={item.href || '/'} aria-label={item.label} color="textSubtle">
                      {item.label}
                    </Link>
                ))}
              </Dropdown>
          );
        }

        return (
            <Link external key={social.label} href={social.href} aria-label={social.label} color="textSubtle">
              <Icon {...iconProps} />
            </Link>
        );
      })}
    </Flex>
);

export default React.memo(SocialLinks, () => true);
