import "./Section5.css";

function Section5() {
  return (
    <section className="section5">
      <h2 className="section5-heading">About & Contact</h2>

      <div className="section5-container">
        {/* Personal Info */}
        <div className="section5-info">
          <img
            src="https://avatars.githubusercontent.com/u/your-github-id" 
            alt="Profile"
            className="section5-profile"
          />
          <h3>Vidhya Sagar</h3>
          <p>
            Undergraduate Student at <strong>Mahatma Gandhi Central University, Motihari, Bihar</strong>
          </p>
          <p>From <strong>Chittorgarh, Rajasthan</strong></p>
          <p>Hobbies: Playing Online Games 🎮, Exploring Web Development</p>
          <p>Aspiring to be a successful Web Developer 💻</p>

          <a
            href="/resume.pdf" 
            className="cta-button"
            download
          >
            Download Resume
          </a>
        </div>

        {/* Contact Links */}
        <div className="section5-contact">
          <h4>Connect with Me</h4>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/vidhya-sagar-147463333" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/abhishekh_118" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://github.com/vidhyasagar118" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:your-email@gmail.com">
              Email
            </a>
            <a href="tel:+911234567890">
              Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
