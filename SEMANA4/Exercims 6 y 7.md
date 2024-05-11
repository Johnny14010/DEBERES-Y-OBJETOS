
**Leap resumen del código:**

Este código es una función en TypeScript llamada `isLeap` que determina si un año es bisiesto o no. Te explico cómo funciona:

1. `year % 400 === 0`: Comprueba si el año es divisible por 400 sin dejar residuo. Si es así, el año es bisiesto.
2. `(year % 100 !== 0 && year % 4 === 0)`: Si el año no es divisible por 100 (no es un año secular) y además es divisible por 4 sin dejar residuo, entonces también es bisiesto.

En resumen, la función `isLeap` devuelve `true` si el año es bisiesto y `false` si no lo es, siguiendo las reglas estándar para determinar años bisiestos en el calendario gregoriano.


**RNA Transcription resumen del código: **

Este código es una función en que convierte una secuencia de ADN en su equivalente ARN. Aquí está su resumen:

1. `sequence.split('')`: Divide la secuencia de ADN en una matriz (array) de caracteres individuales.
    
2. `.map(nucleotide => { ... })`: Itera sobre cada carácter de la secuencia y realiza una conversión según las reglas de conversión de ADN a ARN.
    
3. `switch(nucleotide) { ... }`: Usa un bloque `switch` para determinar qué base de ADN está presente y realizar la conversión adecuada a su equivalente de ARN.
    
    - `'G'` en ADN se convierte en `'C'` en ARN.
    - `'C'` en ADN se convierte en `'G'` en ARN.
    - `'T'` en ADN se convierte en `'A'` en ARN.
    - `'A'` en ADN se convierte en `'U'` en ARN.
4. `.join('')`: Une los caracteres convertidos de ARN de nuevo en una cadena.
    

En resumen, la función `toRna` toma una secuencia de ADN como entrada y devuelve su equivalente ARN, aplicando las reglas de conversión estándar de ADN a ARN según la biología molecular.

LINK DEL VIDEO EXPLICATIVO: https://youtu.be/EMXuSxb15JI
