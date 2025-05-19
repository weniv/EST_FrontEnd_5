function Home() {
    return <h2>Home</h2>;
}

function Products() {
    return <h2>Products</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}

export default function TabContent({ activeTab }) {
    if (activeTab === "home") {
        return <Home />;
    } else if (activeTab === "products") {
        return <Products />;
    } else if (activeTab === "contact") {
        return <Contact />;
    }
}
