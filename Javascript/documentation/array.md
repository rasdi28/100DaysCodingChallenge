# Array

array adalah struktur data yang digunakan untuk menyimpan sekumpulan data dalam satu tempat.
dalam setiap array memiliki  index dimana index tersebut adalah nilai-nilai yang ingin kita simpan sehingga mempermudah dalam pemanggilan suatu nilai.
index dalam array dimulai dari 0 ( nol ). 
___

## Syintak Array
### Mendeklarasikan Langsung
```
var namaArray = [value1, value2, value3,...]

```
contoh:
```
<script>
var nama = ["nani","ilham","maulana"]
for (i=0; i <nama.length; i++){
  document.write (nama[i] + "<br/>");
}
</script>
```

### Menggunakan Keyword baru (array Directly)

```
var arrayName = new Array();

```

contoh 

```
var i;
var nama = new Array();
nama[0] = "nani";
nama[1] = "ilham";
nama[2] = "maulana";

for (i=0 ; i<nama.lenght; i++){
  document.write(nama[i] + "<br/>");
}

```

### Menggunakan konstruktor (Array Constructor)

contoh

```
var nama = new Array ("nani","ilham","maulana");
for (i = 0; i<nama.lenght; i++){
  document.write(nama[i]+ "<br/>");
}

```
