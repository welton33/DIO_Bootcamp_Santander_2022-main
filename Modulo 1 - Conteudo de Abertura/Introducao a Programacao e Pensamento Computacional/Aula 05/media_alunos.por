programa {
	funcao inicio() {
		real a, b, nota_a, nota_b
		
		escreva ("Digite as notas da p1 e p2 do Aluno A: \n")
		leia(a)
		leia(b)
		
	    escreva ("Digite as notas da p1 e p2 do Aluno B: \n")
		leia(nota_a)
		leia(nota_b)
		
		escreva ("M�dia do aluno A: ", media_aluno(a,b))
		escreva ("\nM�dia do aluno B: ", media_aluno(nota_a,nota_b))
	}
		
		funcao real media_aluno(real nota_a, real nota_b){
		    retorne (nota_a + nota_b)/2
		}
}
