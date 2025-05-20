import NormalCard from "./Components/NormalCard";
import ProductCard from "./Components/ProductCard";
import UserCard from "./Components/UserCard";
import BlogCard from "./Components/BlogCard";

export default function App() {
    return (
        <div style={{ backgroundColor: "#eee", padding: "20px" }}>
            <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                <NormalCard type="product" />
                <NormalCard type="user" />
                <NormalCard type="blog" />
            </div>
            <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                <ProductCard />
                <UserCard />
                <BlogCard />
            </div>
        </div>
    );
}
