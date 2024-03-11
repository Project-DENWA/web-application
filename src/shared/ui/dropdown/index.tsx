import { useState, useRef, useEffect, useCallback } from 'react';
import css from './Dropdown.module.scss';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';
type Props = {
  dropdownItems: DropdownItems[];
  children: React.ReactNode;
};

type DropdownItems = {
  title: string;
  href: string;
};

export default function Dropdown({ dropdownItems, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    },
    [closeMenu],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div ref={dropdownRef} className={css.dropdown} onClick={toggleMenu}>
      {children}
      {isOpen && (
        <div
          className={cn(
            css.dropdowncontent,
            'border-dark-main-bg-primary border-[1px]',
          )}
        >
          {dropdownItems.map((item, index) => (
            <Link
              className={cn(
                'hover:text-light-text-colored dark:hover:text-dark-text-colored transition-colors',
              )}
              href={`/${item.href}`}
              key={index}
              target="_self"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
