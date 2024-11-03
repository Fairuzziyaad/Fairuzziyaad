export const navLinks = [
  {
    id: "1",
    name: "Home",
    href: "#home",
  },
  {
    id: "2",
    name: "About",
    href: "#about",
  },
  {
    id: "4",
    name: "Services",
    href: "#services",
  },
  {
    id: "3",
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    id: "5",
    name: "Feedback",
    href: "#feedback",
  },
];



export const portfolioData = [
  {
    id: "1",
    name: "First Portfolio",
    description: "Portfolio website built using Bootstrap, HTML, CSS, and JavaScript. This was my first attempt at creating a personal portfolio website with a clean and simple design.",
    image: "/assets/portfolio-ss.png",
    link: "https://fairuzziyaad.github.io/PORTFOLIO-ISENG/",
    tech: ["Bootstrap", "HTML", "CSS", "JavaScript"]
  },
  {
    id: "2",
    name: "Second Portfolio",
    description: "A more advanced portfolio website created using pure HTML, CSS, and JavaScript. This version features improved design and interactivity.",
    image: "/assets/portfolio-ss-2.png",
    link: "https://fairuzziyaad.github.io/PORTFOLIO-2/",
    tech: ["HTML", "CSS", "JavaScript"]
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'MI Miftahul Falah',
    pos: 'Elementary School',
    duration: '2014 - 2020',
    title: "When I was in elementary school, I went to Madrasah Ibtidaiyah Miftahul Falah, this school was an Islamic school, most of the lessons were about the Islamic religion.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'SMPN 12 Tambun Selatan',
    pos: 'Junior High School',
    duration: '2020 - 2023',
    title: "When I was in junior high school, I attended a public junior high school.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'SMK Telekomunikasi Telesandi Bekasi',
    pos: 'Vocational High School',
    duration: '2023 - 2026',
    title: "When I was in vocational school, currently I am studying at SMK Telesandi Bekasi, a private school whose major is mostly technology, my major is software engineering.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];


