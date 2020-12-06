# JAVASCRIPT

## Apa itu Javascript
Javascript adalah bahasa pemrograman yang awalnya dirancang untuk berjalan di atas browser.

Namun, seiring perkembangan zaman, javascript tidak hanya berjalan di atas browser saja. Javascript juga dapat digunakan pada sisi Server, Game, IoT, Desktop, dsb.

Javascript awalnya bernama Mocha, lalu berubah menjadi LiveScript saat browser Netscape Navigator 2.0 rilis versi beta (September 1995). Namun, setelah itu dinamai ulang menjadi Javascript. 
___
## Peralatan untuk Belajar Javascript
Apa saja perlatan yang harus disiapkan untuk belajar Javascript?
1. Web Browser (Google Chrome, Firefox, Opera, dll)
2. Teks Editor (rekomendasi: VS Code)

## Cara Menulis Kode Javascript
ada 4 Jenis menulis kode dalam javascript yaitu

### 1. Tag < script >

Cara yang umum yang dipakai adalah menuliskanya dalam tag < script>. Tag < script> bisa dibuat di dalam tag < head>, mauapun di dalam tag < body>.
contoh
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Penulisan Javascript</title>
    <script>
    console.log("Hi, ini kode Javascript");
    </script>
</head>
<body>

<script>
document.write("Javascript itu keren!");
</script>
</body>
</html>
```

### 2. File Eksternal

Tidak ingin kode Javascript bercampur aduk dengan HTML, kita bisa menuliskannya pada file terpisah. Caranya, buatlah sebuah file yang berekstensi .js, misalnya isinya sebagai berikut.

> test.js


isinya
```
alert("Kode Javascript dari File Eksternal");
```

Kemudian, kita perlu menghubungkan file eksternal tersebut dengan file HTML. Caranya, gunakan tag < script> dengan atribut src untuk menentukan lokasi file Javascriptnya.

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Penulisan Javascript</title>

<script src="test.js"></script>


</head>
<body>

</body>
</html>

```

### 3. Atribut Event

Cara yang ketiga ini sering digunakan untuk memanggil fungsi pada event terentu. Misalnya ketika suatu elemen diklik, maka jalankan fungsi Javascript.
```
<button onclick="alert('Ok Terima kasih!')">Klik donk!</button>
```

### 4. URL

Terakhir, penulisan Javascript pada URL. Cara ini jarang digunakan, namun kita juga perlu mengetahuinya. Penulisan Javascript pada URL menggunakan protokol Javascript. Misal, cobalah untuk menuliskan kode seperti ini pada URL browser.

```
javascript:alert("Nah! ini Javascript")
```


> REFERENSI

[Petani Kode](petanikode.com/javascript-dalam-html/)