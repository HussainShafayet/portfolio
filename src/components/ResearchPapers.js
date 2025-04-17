import styles from "../assets/styles/components/Researchpaper.module.css";

const papers = [
  {
    title: "Strengthening Consumer Trust in Bangladesh’s E-Commerce: Factors and Strategies",
    doi: "https://doi.org/10.58947/journal.kpry56",
  },
  {
    title: "Global Mobile App Accessibility: A Comparative Study of WCAG Compliance Across 12 Countries",
    doi: "10.58947/MXRC-RZKH",
  },
];

const ResearchPapers = () => {
  return (
    <div className="py-12">
      {/* Heading */}
      <h2 className={`mb-6 ${styles.headerText}`}>
        RESEARCH PAPER
      </h2>

      {/* Papers List */}
      <div className="space-y-8">
        {papers.map((paper, index) => (
          <div key={index} className="flex items-start space-x-4">
            <span className="mt-1 w-3 h-3 bg-black rounded-full inline-block"></span>
            <div>
              <p className={`${styles.researchText}`}>{paper.title}</p>
              <p className={`mt-1 ${styles.researchSubText}`}>DOI: {paper.doi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
