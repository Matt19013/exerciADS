public class ordenacao {
        public static void main(String[] args) {
            int[] v = {15, 2, 4, 11, 3, 1};
            for (int i = 0; i < v.length - 1; i++) {
                int min = i;
                for (int j = i + 1; j < v.length; j++) {
                    if (v[min] > v[j]) {
                        min = j;
                    }
                }
                int temp = v[i];
                v[i] = v[min];
                v[min] = temp;
            }
            for (int i = 0; i < v.length; i++) {
                System.out.println(v[i]);
            }
        }
    }
    
