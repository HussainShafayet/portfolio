import style from '../assets/styles/components/Hero.module.css'


// src/components/Hero.jsx
const Hero = () => (
    <section id="hero" className="h-screen flex items-center justify-center p-4">
      <div className="container flex flex-col justify-start">
        <h2 className={`${style.heroSubHeader}`}>Hi, I'm</h2>
        <h1 className={`${style.heroHeader}`}>Faria Islam</h1>
        <p className={`${style.heroText}`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
    </section>
  );
  
  export default Hero;
  