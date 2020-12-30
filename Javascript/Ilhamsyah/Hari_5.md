# VARIABEL

PEMAHAMAN
> Study kasus


carilah informasi/jawaban dari source code dibawah ini

>kasus 1 (menggunakan var)
```
var foo ='hello1'
var foo ='hello2'
console.log(foo);
```
Karena variabel di definisikan dua kali maka yang terbaca adalah yang terakhir di definisikan
>Output Console:
```
hello2
```

> kasus 2
```
x=10
var x
console.log(x)

```

pada definisi kedua nilai variabel tidak diubah
>Output Console:
```
10
```

> kasus ke 3

```
var b=2
if (true){
  var b=3
}
console.log(b)
```

kondisi default adalah true
>Output Console:
```
3
```
