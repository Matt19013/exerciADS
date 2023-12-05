public class contagem {


        public static int contar(int pd, int N) {
            int contagem = 0;
            for (int i = pd; i <= N; i++) {
                if (i % 1 == 0) {
                    contagem++;
                }
            }
            return contagem;
        }
    
        public static void main(String[] args) {
            int pd = 3;
            int N = 10;
    
            int contagem = contar(pd, N);
    
            System.out.println("Existem " + contagem + " valores inteiros no intervalo entre " + pd + " e " + N);
        }
    }
    
    
    

