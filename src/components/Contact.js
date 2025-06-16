// src/components/Contact.jsx

import styles from '../assets/styles/components/Contact.module.css';
const Contact = () => (
    <section id="contact" className="py-12">
      <h2 className={`mb-6 ${styles.headerText}`}>Contact</h2>
      <div className='flex justify-between items-center'>
        <div>
          <p className={`${styles.contactTitle}`}>xyz</p>
          <span className={`${styles.contactSubTitle}`}>1234567</span><br />
          <span className={`${styles.contactSubTitle}`}>demo@gmail.com</span>
        </div>
      
      
        <div className="mt-6 space-x-4">
          <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">Email</a>
          <a href="https://linkedin.com/in/your-profile" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="https://github.com/your-profile" className="text-blue-500 hover:underline">GitHub</a>
        </div>
      </div>
    </section>
  );
  
  export default Contact;
  