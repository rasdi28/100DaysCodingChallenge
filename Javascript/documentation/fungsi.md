# Fungsi

Fungsi adalah sub-program yang bisa digunakan kembali baik di dalam program itu sendiri, maupun di program yang lain.

Fungsi di dalam Javascript adalah sebuah objek. Karena memiliki properti dan juga method

ada 4 cara dalam membuat suatu fungsi dalam javascript
1. ## Membuat Fungsi dengan cara biasa
contoh
```
fungsi pemangilanNama(){
    console.log ("Hi...");
}
```

2. ## Membuat Fungsi dengan Ekspresi

contoh
```
var namaFungsi = function(){
    console.log ("Hi....");

}
```

3. ## Membuat Fungsi dengan tanda panah

pada kasus ini biasanya digunakan pada standard ES6

```
var namaFungsi = () => {
    console.log ("hi....);
}

// atau seperyi ini (jika hanya 1 baris)

var namaFungsi = () => console.log("Hi....");
```

4. ## Dengan Konstruktor

contoh
```
var namaFungsi = new Function ('console.log("Hi...");')
```
untuk cara ke 4 tidak direkomendasikan karena mempengaruhi kinerja engine javascript


___
## Pemanggilan Fungsi
dalam javascript untuk memanggil suatu fungsi maka dengan cara 

```
namaFungsi();
```

contoh 
```
//membuat fungsi
function sayHello(){
    console.log ("Hi...);
}

//memanggil fungsi
sayHello()
```
