# OPERATOR

Operator adalah simbol yang digunakan untuk melakukan operasi pada suatu nilai dan variabel.

Operator dalam pemrograman terbagi dalam 6 jenis:

1. Operator aritmatika;
2. Operator Penugasan (Assignment);
3. Opeartor relasi atau perbandingan;
4. Operator Logika;
5. Operator Bitwise;
6. Operator Ternary;
___
> ## Operator Aritmatika
Operator aritmatika merupakan operator untuk melakukan operasi aritmatika seperti penjumlahan, pengurangan, pembagian, perkalian, dsb. 
contoh:

```
var a = 5;
var b = 3;

// menggunakan operator penjumlahan
var c = a + b;
console.log(c);
```

> ## Operator Penugasan (Assignment)
Operator penugasan adalah operator yang digunakan untuk memberikan tugas kepada variabel. Biasanya digunakan untuk mengisi variabel.
Operator penugasan sama seperti operator aritmatika. Ia juga digunakan untuk melakukan operasi aritmatika.

```
var jumlahView = 12;

// menggunakan operator penugasan penjumlahan
// untuk menambah nilai
jumlahView += 1;
```

> ## Opeartor Perbandingan
Operator relasi atau perbandingan adalah operator yang digunakan untuk membandingkan dua nilai.

Operator perbandingan akan menghasilkan sebuah nilai boolean true dan false.
contoh
```
// ini akan bernilai true
var a = "4" == 4; //-> true

// sedangkan ini akan bernilai false
var b = "4" === 4; //-> false
```

> ## Opeartor Logika
Operator logika digunakan untuk melakukan operasi terhadap dua nilai boolean.
contoh
```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Operator Logika</title>
</head>

<body>

    <script>
        var aku = 20;
        var kamu = 19;

        var benar = aku > kamu;
        var salah = aku < kamu;

        // operator && (and)
        var hasil = benar && salah;
        document.write(`${benar} && ${salah} = ${hasil}<br/>`);
        
        // operator || (or)
        var hasil = benar || salah;
        document.write(`${benar} || ${salah} = ${hasil}<br/>`);
        
        // operator ! (not)
        var hasil = !benar
        document.write(`!${benar} = ${hasil}<br/>`);

    </script>
</body>

</html>

```

>## Opeartor Bitwise
Operator bitwise merupkan operator yang digunakan untuk operasi berdasarkan bit (biner).
Konsepnya memang hampir sama dengan opeartor Logika. Bedanya, Bitwise digunakan untuk biner.

> ## Opeartor Ternary
Operator ternary merupakan operator yang teridiri dari tiga bagian.

Operator-operator sebelumnya hanya dua bagian saja, yaitu: bagian kiri dan kanan. Ini disebut operator binary.

Sementara operator trinary ada bagian kiri, tengah, dan kanan.
```
<kodisi> ? "benar" : "salah"
```
