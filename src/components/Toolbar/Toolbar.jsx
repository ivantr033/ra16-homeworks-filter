import "./Toolbar.css";

function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div className="toolbar-container">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onSelectFilter(filter)}
                    className={`btn-filter ${filter === selected ? "active" : ""}`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default Toolbar;
