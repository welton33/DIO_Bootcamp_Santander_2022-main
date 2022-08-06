

public class Cliente {
	
	private String nome;
	ContaCorrente contaCorrente;
	ContaPoupanca contaPoupanca;
	
	
	//Construtores
	
	public Cliente() {
		
	}

	public Cliente(String nome, ContaCorrente contaCorrente) {
		super();
		this.nome = nome;
		this.contaCorrente = contaCorrente;
	}
	
	public Cliente(String nome, ContaPoupanca contaPoupanca) {
		super();
		this.nome = nome;
		this.contaPoupanca = contaPoupanca;
	}

	public Cliente(String nome, ContaCorrente contaCorrente, ContaPoupanca contaPoupanca) {
		super();
		this.nome = nome;
		this.contaCorrente = contaCorrente;
		this.contaPoupanca = contaPoupanca;
	}

	
	// Getters and Setters

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	
	public ContaCorrente getContaCorrente() {
		return contaCorrente;
	}
	

	public void setContaCorrente(ContaCorrente contaCorrente) {
		this.contaCorrente = contaCorrente;
	}
	

	public ContaPoupanca getContaPoupanca() {
		return contaPoupanca;
	}
	

	public void setContaPoupanca(ContaPoupanca contaPoupanca) {
		this.contaPoupanca = contaPoupanca;
	}

}
