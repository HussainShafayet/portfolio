
import styles from '../assets/styles/components/Skills.module.css';

const skills = [{
    file: '',
    name: 'Ps',
    description: ''
},
{
    file: '',
    name: 'Ai',
    description: ''
},
{
    file: '',
    name: 'Xd',
    description: ''
},{
    file: '',
    name: 'Figma',
    description: ''
}]
const softSkills = [
    ["Empathetic Human-Centered UI", "User Centric Thinking", "User Research", "Accessibility Standards", "Wireframing"],
    ["Prototyping", "A/B Testing", "HTML / CSS", "Content Strategy", "Portfolio Sketching"]
  ];

const Skills = () => (
    <section id="skills" className="py-12">
        <div className='mb-6'>
            <h2 className={`mb-6 ${styles.headerText}`}>Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {skills.map((skill)=>(
                <div class="flex items-center justify-center ">
                    <div class="bg-white rounded-2xl shadow-lg p-8  text-center">
                        <div class="flex items-center justify-center mb-4">
                        <img src="your-icon-path.png" alt="Photoshop Icon" class="w-12 h-12" />
                        </div>
                        <p class="text-gray-500 text-sm">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
        <div>
            <h2 className={`mb-6 ${styles.headerText}`}>SOFT Skills</h2>
            <div className="flex justify-center items-start min-h-screen bg-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 gap-y-3 text-black text-base">
                {softSkills.map((col, i) => (
                <ul key={i} className="space-y-3 list-disc list-inside">
                    {col.map((skill, j) => (
                    <li key={j}>{skill}</li>
                    ))}
                </ul>
                ))}
            </div>
            </div>
        </div>
    </section>
);

export default Skills;
  