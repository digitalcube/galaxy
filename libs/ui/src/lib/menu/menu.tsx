import { useState, useLayoutEffect } from 'react';
import { Scrollspy } from '@galaxy/ui';

// Abstracted from Scrollspy to allow for easier customizations
const onScrollUpdate = (entry, isInVewPort) => {
  const { target, boundingClientRect } = entry;
  const menuItem = document.querySelector(`[data-scrollspy-id="${target.id}"]`);
  if (!menuItem) return;
  if (boundingClientRect.y <= 0 && isInVewPort) {
    menuItem.classList.add('font-bold');
  } else {
    if (menuItem.classList.contains('font-bold')) {
      menuItem.classList.remove('font-bold');
    }
  }
};

const Menu = ({ options }) => {
  // control the click event
  const onClick = (e) => {
    e.preventDefault();
    // Set the hash
    window.location.hash = e.target.hash;

    // Scroll to the section + 1 to account for weird bug.
    // remove the `+1` and click on Section 2 link to see the bug.
    const targetSection = document.querySelector(`${e.target.hash}`);
    if (!targetSection) return;
    window.scrollTo(0, targetSection.offsetTop + 1);
  };

  return (
    <nav className="sticky">
      <ul>
        {options.map((option) => (
          <li key={option.hash}>
            <a
              href={`#${option.hash}`}
              onClick={onClick}
              data-scrollspy-id={option.hash}
            >
              {option.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const WithMenu = ({ children, selector }) => {
  const [options, setOptions] = useState([]);
  useLayoutEffect(() => {
    const menuSections = document.querySelectorAll(selector);
    const optionsFromSections = Array.from(menuSections).map((section) => {
      return {
        hash: section.id,
        title: section.dataset.navTitle,
      };
    });
    setOptions(optionsFromSections);
  }, [selector]);

  return (
    <div>
      <Scrollspy handleScroll={onScrollUpdate} />
      <div className="fixed">
        <Menu options={options} />
      </div>
      {children}
    </div>
  );
};
