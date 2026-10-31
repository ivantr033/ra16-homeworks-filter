import "./ProjectList.css"; // Importamos el CSS específico

function ProjectList({ projects }) {
    return (
        <div className="projects-grid">
            {projects.map(({ img, category }, index) => (
                <div key={index} className="project-card">
                    <img src={img} alt={category} className="project-img" />
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
