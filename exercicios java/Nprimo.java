public class Nprimo {

        public static void main(String[] args) {
            int n = 100;
    
            boolean[] primos = new boolean[n + 1];
    
            for (int i = 2; i <= n; i++) {
                primos[i] = true;
            }
    
            for (int i = 2; i * i <= n; i++) {
                if (primos[i]) {
                    for (int j = i * i; j <= n; j += i) {
                        primos[j] = false;
                    }
                }
            }
    
            for (int i = 2; i <= n; i++) {
                if (primos[i]) {
                    System.out.println(i);
                }
            }
        }
    }
    
