import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren, useRef } from "react";
import useReveal from "../lib/useReveal";
import Menu from "./Menu";
import { menuitem, menu__list } from "./Menu.css";
import {
  menubar,
  menubaritem,
  menubarmenu,
  menubar__wrapper,
} from "./MenuBar.css";

type WrapperProps = {
  title?: string;
  items?: DropdownProps[];
  showItems?: boolean;
  searchTerm?: string;
} & HTMLAttributes<HTMLDivElement>;

const DropDownMenuItem = ({
  items,
  className,
  searchTerm,
  ...props
}: WrapperProps) => {
  return (
    <Menu.Item
      title={props.title}
      {...props}
      className={clsx(className, {
        "has-searchterm": searchTerm && containsTitle(props, searchTerm),
      })}
    >
      {items?.map((item, index) => (
        <DropDownMenuItem
          key={`${index}`}
          className={clsx(item.className, {
            "has-searchterm": searchTerm && containsTitle(item, searchTerm),
          })}
          {...item}
        />
      ))}
    </Menu.Item>
  );
};

type DropdownProps = PropsWithChildren<{
  key?: any;
  className?: string;
  items?: DropdownProps[];
  showItems?: boolean;
  title?: string;
  searchTerm?: string;
}> &
  HTMLAttributes<HTMLDivElement>;

const DropdownMenu = ({
  items,
  searchTerm,
  className,
  ...props
}: DropdownProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId, isOpen, setIsOpen] = useReveal(menuRef);
  return (
    <div className={clsx(menu__list, menubarmenu)} ref={menuRef}>
      {items?.map((item, index) => {
        return (
          <DropDownMenuItem
            key={`${index}-${item.title}`}
            {...item}
            showItems={activeId === index}
            searchTerm={searchTerm}
            onClick={() => setActiveId(index)}
            className={clsx(className, {
              "has-searchterm": searchTerm && containsTitle(item, searchTerm),
            })}
          />
        );
      })}
    </div>
  );
};

type Props = PropsWithChildren<
  {
    items?: DropdownProps[];
    searchTerm?: string;
  } & HTMLAttributes<HTMLDivElement>
>;

const containsTitle = (
  tree: DropdownProps,
  term: string
): DropdownProps | undefined => {
  if (
    tree.title
      ?.toLocaleLowerCase()
      .trim()
      .includes(term.toLocaleLowerCase().trim())
  ) {
    return tree;
  }
  if (tree.items)
    return tree.items.find((branch) => containsTitle(branch, term));
};

const MenuBar = ({ children, items, searchTerm, ...props }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId, isOpen, setIsOpen] = useReveal(menuRef);

  return (
    <>
      <div className={menubar__wrapper}>
        <div className={menubar} ref={menuRef} tabIndex={0} {...props}>
          {items?.map((item, barItemIndex) => {
            return (
              <div
                key={`${barItemIndex}`}
                className={clsx(menubaritem, menuitem, {
                  "is-active": isOpen && activeId === barItemIndex,
                  "has-searchterm":
                    searchTerm && containsTitle(item, searchTerm),
                })}
                onClick={() => {
                  setIsOpen(true);
                  setActiveId(barItemIndex);
                }}
                onMouseEnter={() => setActiveId(barItemIndex)}
              >
                <div className="title">{item.title}</div>
                {isOpen && activeId === barItemIndex && (
                  <DropdownMenu {...item} searchTerm={searchTerm} />
                )}
              </div>
            );
          })}
        </div>
        {children}
      </div>
    </>
  );
};

export default MenuBar;
