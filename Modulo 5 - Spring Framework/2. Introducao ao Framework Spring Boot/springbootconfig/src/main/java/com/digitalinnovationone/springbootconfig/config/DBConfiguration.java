package com.digitalinnovationone.springbootconfig.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration // Indica para o java que é um arquivo de configuração
@ConfigurationProperties("spring.datasource") // Informa o que deverá ser mapeado
@Getter // Quando for haver a compilação todos os atributos irão receber seus getters por meio do lombok
@Setter // Quando for haver a compilação todos os atributos irão receber seus getters por meio do lombok
public class DBConfiguration {

    // Declaração dos atributos de mapeamento
    private String driverClassName;
    private String url;
    private String username;
    private String password;


    // Declaração dos métodos que irá tratar as propriedades para dentro do sistema e definir o tipo de perfil

    @Profile("dev")
    @Bean // Indica o mapeamento desde a subida do projeto
    public String testDatabaseConnection() {
        System.out.println("DB connection for DEV - H2");
        System.out.println(driverClassName);
        System.out.println(url);
        return "DB Connection to H2_TEST - Test instance";
    }

    @Profile("prod")
    @Bean // Indica o mapeamento desde a subida do projeto
    public String prodDatabaseConnection() {
        System.out.println("DB connection for MYSQL Database: production");
        System.out.println(driverClassName);
        System.out.println(url);
        return "DB Connection to MySql production - Test instance";
    }

}
