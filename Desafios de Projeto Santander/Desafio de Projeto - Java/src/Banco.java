import java.util.List;


public class Banco {

	private String nome;
	private List<Conta> contas;

	// Construtor
	public Banco() {
    }

	
	// Regras de Negócio
	
	public Banco(String nome, List<Conta> contas) {
        this.nome = nome;
        this.contas = contas;
    }
	
    // método que lista os clientes
    public void listarClientes() {

        this.contas.stream()
                .map(Conta::getCliente)
                .distinct()
                .map(Cliente::getNome)
                .forEach(System.out::println);
    }
	
	
    // Get and Set
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}


	
	

	
}
