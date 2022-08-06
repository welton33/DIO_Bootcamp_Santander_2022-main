package dio.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/* CommandLineRunner é uma interface Spring Boot simples com um método run. O Spring Boot chamará
   automaticamente o método run de todos os beans que implementam esta interface depois que o
   contexto do aplicativo for carregado */

/* @Component é uma anotação que permite ao Spring detectar automaticamente nossos beans personalizados.
   Em outras palavras, sem ter que escrever nenhum código explícito, o Spring irá: Escanear nosso aplicativo para
   classes anotadas com @Component. Instancie-os e injete quaisquer dependências especificadas neles. Injete-os
   sempre que necessário.*/
@Component
public class MyApp implements CommandLineRunner {

    @Autowired // Ele permite que o Spring resolva e injete beans colaborativos em nosso bean
    private Calculadora calculadora; // Estrutura para usar o objeto criado pelo Springboot

    @Override
    public void run(String... args) throws Exception {
        System.out.println("O resultado é : " + calculadora.somar(2,7));
    }
}
