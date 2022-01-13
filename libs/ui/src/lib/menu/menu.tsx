import { useState, useEffect } from 'react';
import { Scrollspy } from '../scrollspy/scrollspy';

// Abstracted from Scrollspy to allow for easier customizations
const onScrollUpdate = (entry, isInVewPort) => {
  const { target, boundingClientRect } = entry;
  const menuItem = document.querySelector(`[data-scrollspy-id="${target.id}"]`);
  if (!menuItem) return;
const activeClassNames = ['font-bold', 'underline'];
  if (boundingClientRect.y <= 0 && isInVewPort) {
    menuItem.classList.add(...activeClassNames);
  } else {
    if (menuItem.classList.contains(activeClassNames[0])) {
      menuItem.classList.remove(...activeClassNames);
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
    <nav>
      <ul className="space-y-6">
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
  useEffect(() => {
    // const menuSections = document.querySelectorAll(selector);
    const optionsFromSections = Array.from(children).map((section) => {
      if (!section.props['data-scrollspy']) return {};
      return {
        hash: section.props.id,
        title: section.props['data-title'],
      };
    });
    setOptions(optionsFromSections);
  }, [selector]);

  return (
    <div>
      <Scrollspy handleScroll={onScrollUpdate} />
      <div className="fixed p-8">
        <Menu options={options} />
      </div>
      {children}
    </div>
  );
};
