import { useEffect, useState } from "react"; // Importa os hooks do React

export default function UsuariosPage() {
  // Estado para armazenar os usuários
  const [usuarios, setUsuarios] = useState([]);
  // Controla se está carregando
  const [loading, setLoading] = useState(true);

  useEffect(() => { // Executa ao carregar o componente
    async function buscarUsuarios() { // Função para buscar dados da API
      try {
        // Faz requisição para a API
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
        // Converte resposta para JSON
        const dados = await resposta.json();
        // Salva os dados no estado
        setUsuarios(dados);
      } catch (erro) {
        // Captura erro da requisição e mostra erro no console
        console.log("Erro ao buscar usuários:", erro);
      } finally {
        // Executa sempre (com erro ou não) e finaliza o carregamento
        setLoading(false);
      }
    }

    buscarUsuarios();
  }, []); // Executa apenas uma vez (ao carregar)

  return (
    <div>
      <h1>Usuários (API)</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : ( // Se terminou, mostra dados
        usuarios.map((user) => (
          <div 
            key={user.id} 
            style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
          >
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Cidade: {user.address.city}</p>
          </div>
        ))
      )}
    </div>
  );
}