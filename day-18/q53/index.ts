// An object storing computer programming skills
const programmingSkills = {
    languages: ["HTML", "CSS", "JavaScript", "Python"],
    tools: ["VS Code", "Git", "Media Query", "Redux Toolkit"],
    frameworks: ["Bootstrap", "TailwindCSS", "Express.js", "Next.js", "React-Native"],
    libraries: ["React.js", "React-Redux", "Material UI"],
};

// Destructure properties from an object
let { tools, languages, libraries, frameworks } = programmingSkills;

// Show three specific skills
console.log(`${frameworks[3]} is a framework built on top of the ${libraries[0]} library, utilizing the ${languages[2]} language.`);