import { useEffect, useRef } from "react";
import "./Skills.css"
function Skills() {
  const sectionRef = useRef(null);
  let lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      if (window.scrollY < lastScrollY.current) {
        // scrolling UP
        section.classList.add("scroll-up");
        section.classList.remove("scroll-down");
      } else {
        // scrolling DOWN
        section.classList.add("scroll-down");
        section.classList.remove("scroll-up");
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Express.js",
    "Python",
    "MongoDB",
    "HTML5 & CSS3",
    "Git & GitHub",
    "AWS / Netlify",
    "python",
    "video editing",
  ];

  return (
    <section
  id="skills"          // 👈 THIS IS REQUIRED
  ref={sectionRef}
  className="section4 scroll-down"
  tabIndex="-1"
>

      <h2 className="prheading">skill</h2>

      <div className="container">
        <h2>My Core Technology Stack</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
