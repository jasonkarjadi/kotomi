import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { borders, colors, shadows } from "theme";

interface NavBookProps {
  href: LinkProps["href"];
  icon: IconProp;
}

const NavBook: FC<NavBookProps> = ({ href, icon }) => {
  const { pathname } = useRouter();
  const clicked = href === pathname;

  return (
    <>
      <Link href={clicked ? "/" : href}>
        <button className={`navbook ${clicked && "clicked"}`}>
          <FontAwesomeIcon icon={icon} className="fa-fw fa-2x" />
        </button>
      </Link>
      <style jsx>{`
        .navbook {
          width: 12.5%;
          background: ${colors.lightgreen};
          border: ${borders.book};
          border-style: none solid;
        }
        .navbook:hover {
          box-shadow: ${shadows.book};
        }
        .navbook:active {
          background: ${colors.darkgreen};
          box-shadow: ${shadows.book};
        }
        .clicked {
          box-shadow: ${shadows.book};
        }
        .navbook.clicked:hover {
          box-shadow: none;
        }
      `}</style>
    </>
  );
};

export default NavBook;
