function TabButton({ id, label, isActive, onClick }) {
    return (
        <button
            id={id}
            onClick={onClick}
            style={{
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                backgroundColor: isActive ? "#000" : "#fff",
                color: isActive ? "#fff" : "#000",
            }}
        >
            {label}
        </button>
    );
}

export default function TabButtonList({ activeTab, onTabChange }) {
    return (
        <div>
            <TabButton id="home" label="홈" isActive={activeTab === "home"} onClick={onTabChange} />
            <TabButton id="products" label="제품" isActive={activeTab === "products"} onClick={onTabChange} />
            <TabButton id="contact" label="연락처" isActive={activeTab === "contact"} onClick={onTabChange} />
        </div>
    );
}
