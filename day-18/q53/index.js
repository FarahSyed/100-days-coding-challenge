// An object storing computer programming skills
var programmingSkills = {
    languages: ["HTML", "CSS", "JavaScript", "Python"],
    tools: ["VS Code", "Git", "Media Query", "Redux Toolkit"],
    frameworks: ["Bootstrap", "TailwindCSS", "Express.js", "Next.js", "React-Native"],
    libraries: ["React.js", "React-Redux", "Material UI"],
};
// Destructure properties from an object
var tools = programmingSkills.tools, languages = programmingSkills.languages, libraries = programmingSkills.libraries, frameworks = programmingSkills.frameworks;
// Show three specific skills
console.log("".concat(frameworks[3], " is a framework built on top of the ").concat(libraries[0], " library, utilizing the ").concat(languages[2], " language."));
