package dio.springboot.app;

import com.google.gson.Gson;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/* @Configuration indica que uma classe declara um ou mais métodos @Bean e pode ser processada
   pelo contêiner Spring para gerar definições de bean e solicitações de serviço para esses beans em tempo
   de execução */

@Configuration
public class Beans {
    @Bean
    public Gson gson(){
        return new Gson();
    }
}
