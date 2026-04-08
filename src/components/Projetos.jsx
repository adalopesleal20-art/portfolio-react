const projetos = [
  {
    nome: "Antiansiedade",
    descricao: "Ajuda pessoas com crises de ansiedade",
    link: "#"
  },
  {
    nome: "Agenda diária",
    descricao: "Organiza tarefas do dia a dia",
    link: "#"
  }
];

function Projetos() {
  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((projeto, index) => (
        <div key={index}>
          <h3>{projeto.nome}</h3>
          <p>{projeto.descricao}</p>
          <a href={projeto.link}>Em breve</a>
        </div>
      ))}
    </section>
  );
}

export default Projetos;
