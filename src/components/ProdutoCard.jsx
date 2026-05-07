export default function ProdutoCard({ tenis }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "4px",
  };

  const btnStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={cardStyle}>
      <img src={tenis.imagem} alt={tenis.nome} style={imgStyle} />
      <h3>{tenis.nome}</h3>
      <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>{tenis.preco}</p>
      <button style={btnStyle}>Adicionar ao Carrinho</button>
    </div>
  );
}