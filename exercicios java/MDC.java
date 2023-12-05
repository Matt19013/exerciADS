 public class MDC {

        public static int mdc(int a, int b) {
            if (b == 0) {
                return a;
            } else {
                return mdc(b, a % b);
            }
        }
    
        public static void main(String[] args) {
            int a = 15;
            int b = 10;
    
            int mdc = mdc(a, b);
    
            System.out.println("O MDC de " + a + " e " + b + " é " + mdc);
        }
    }
    

