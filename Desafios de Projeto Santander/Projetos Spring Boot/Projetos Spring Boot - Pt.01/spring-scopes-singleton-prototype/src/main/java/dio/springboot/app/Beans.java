package dio.springboot.app;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class Beans {

    @Bean

    /* @Scope(prototype): Significa que toda vez que você pedir ao spring (getBean ou injeção de dependência)
    por uma instância, ele criará uma nova instância e fornecerá uma referência a ela. No seu exemplo, uma
    nova instância de LoginAction é criada e injetada em seu HomeController */
    @Scope("prototype")

    public Remetente remetente(){
        System.out.println("CRIANDO UM OBJETO REMETENTE");
        Remetente remetente = new Remetente();
        remetente.setEmail("noreply@dio.com.br");
        remetente.setNome("Digital Innovation One");
        return remetente;
    }
}
