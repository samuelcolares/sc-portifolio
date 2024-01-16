const sidebarIcons = {
  open: {
    // y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      x: { stiffness: 1000, velocity: -100 },
      y: { stiffness: 1000, velocity: -100 },
      delay: 0.3,
    },
  },
  closed: {
    // y: -100,
    x: -100,
    opacity: 0,
    scale: 0,
    transition: {
      type: "spring",
      x: { stiffness: 1000 },
    },
  },
};

const sidebar = {
  open: (height = 200) => ({
    clipPath: `circle(${height * 2 + 200}px at 1.5rem 8.5rem)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 1.5rem 8.35rem)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const navbarMobile = {
  open: (height = 200) => ({
    clipPath: `circle(${height * 2 + 200}px at 1.5rem 8.5rem)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 1.5rem 1.4rem)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export { sidebarIcons, sidebar, navbarMobile };
