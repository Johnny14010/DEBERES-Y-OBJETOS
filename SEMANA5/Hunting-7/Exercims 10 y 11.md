**Darts resumen del codigo: **
  
Este código es una función en TypeScript llamada `score` que calcula una puntuación basada en las coordenadas (x, y) de un punto en un plano cartesiano. Aquí está cómo funciona:

1. `const distance = Math.sqrt(x*x + y*y);`: Calcula la distancia del punto (x, y) al origen (0, 0) utilizando el teorema de Pitágoras para obtener la longitud de la hipotenusa de un triángulo rectángulo.
    
2. `if(distance > 10){ ... }`: Si la distancia es mayor que 10 unidades del origen, la puntuación es 0.
    
3. `else if(distance > 5 ){ ... }`: Si la distancia está entre 5 y 10 unidades del origen, la puntuación es 1.
    
4. `else if(distance > 1){ ... }`: Si la distancia está entre 1 y 5 unidades del origen, la puntuación es 5.
    
5. `else{ ... }`: Si la distancia es menor o igual a 1 unidad del origen, la puntuación es 10.
    

En resumen, esta función asigna una puntuación dependiendo de qué tan lejos está el punto (x, y) del origen en el plano cartesiano. Cuanto más cerca esté el punto del origen, mayor será la puntuación asignada.



## Explicación de Pangram

**Función:** `isPangram(paragraph: string) : boolean`

**Objetivo del exercims:** Verificar si una cadena de texto ("paragraph") es un pangrama.

**Funcionamiento del código:**

1. **Convertir a minúsculas:** La cadena se convierte a minúsculas para ignorar la sensibilidad a mayúsculas.
    
2. **Eliminar caracteres no alfabéticos:** Se eliminan todos los caracteres que no sean letras minúsculas (a-z) utilizando una expresión regular.
    
3. **Crear un Set y contar caracteres únicos:** Se crea un Set con los caracteres únicos de la cadena procesada. El tamaño del Set representa la cantidad de caracteres únicos.
    
4. **Verificar si es pangrama:** Se compara el tamaño del Set con 26. Si es igual a 26, la cadena contiene todas las letras minúsculas y se considera un pangrama.
    

**Devuelve:**

- `true` si la cadena es un pangrama.
- `false` si la cadena no es un pangrama.

**Ejemplo:**

JavaScript

```
isPangram("The quick brown fox jumps over the lazy dog"); // true (pangrama)
isPangram("Hello, world!"); // false (no es pangrama)
```

**En resumen:**

Podemos decir que la función ( isPagram ) verifica si una cadena de texto contiene todas las letras minúsculas del alfabeto al menos una vez.



LINK DEL VIDEO EXPLICATIVO: https://youtu.be/louev-R66rM

