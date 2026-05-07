import ProdutoCard from "../components/ProdutoCard";
import { tenis } from "../components/tenis";

export default function ProdutosPage() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  };

  return (
    <div>
      <h1>Nossos Tênis</h1>
      <div style={containerStyle}>
        {tenis.map((item) => (
          <ProdutoCard key={item.id} tenis={item} />
        ))}
      </div>
    </div>
  );
}