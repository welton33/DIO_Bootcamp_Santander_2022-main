package dio.springboot.app;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.List;
@Configuration
/* @Configuration indica que a classe possui métodos de definição @Bean. Assim, o contêiner Spring pode
processar a classe e gerar Spring Beans para serem usados na aplicação. */

@ConfigurationProperties(prefix = "remetente")
/* @ConfigurationProperties permite mapear facilmente todas as propriedades e arquivos Yaml em um objeto.
Também permite validar propriedades com validação de bean JSR-303. Por padrão, a anotação lê do aplicativo. */

public class Rementente {
    private String nome;
    private String email;
    private List<Long> telefones;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Long> getTelefones() {
        return telefones;
    }

    public void setTelefones(List<Long> telefones) {
        this.telefones = telefones;
    }
}
