import style from '../assets/styles/components/About.module.css'

// src/components/About.jsx
const About = () => (
    <section id="about" className="py-12">
        <h2 className={`${style.aboutHeader} mb-4`}>About Me</h2>
        <p className={`${style.aboutText} mb-2`}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>
        <p className={`${style.aboutText} mb-2`}>

        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
        <p className={`${style.aboutText} mb-2`}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>
    </section>
);

export default About;
  