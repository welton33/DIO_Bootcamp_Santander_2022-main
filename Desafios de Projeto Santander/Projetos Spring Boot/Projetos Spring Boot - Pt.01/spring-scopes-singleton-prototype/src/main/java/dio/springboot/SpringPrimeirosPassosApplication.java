package dio.springboot;

import dio.springboot.app.SistemaMensagem;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringPrimeirosPassosApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringPrimeirosPassosApplication.class, args);
	}

	@Bean
	public CommandLineRunner run(SistemaMensagem sistema) throws Exception {
		return args -> {
			sistema.enviarConfirmacaoCadastro();
			sistema.enviarMensagemBoasVindas();
			sistema.enviarConfirmacaoCadastro();

			/* Situação 1 - Se na Classe Beans não informar a anotação @Scope("prototype") e realizar as
			   chamadas acima dos métodos na segunda vez que chamar o sistema.enviarConfirmacaoCadastro(),
			   não haverá a mudança do email como se fosse um novo cadastro, pois o Springboot por padrão
			   instância apenas uma única vez o objeto REMETENTE comportamento SINGLETON.
			 */

			/* Situação 2 - Ao informar a anotação @Scope("prototype") e realizar as chamadas acima dos
			métodos na segunda vez que chamar o sistema.enviarConfirmacaoCadastro(), o Springboot por padrão
			ao executar a aplicação ela irá prover a quantidade necessária de instâncias para cada chamada
			do método que faz o seu uso comportamento PROTOTYPE.
			 */
		};
	}

}
