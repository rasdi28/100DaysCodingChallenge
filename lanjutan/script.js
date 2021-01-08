//cara membuat objek pada javascript

//1. objek literal

// let mahasiswa1 = {
//     nama : 'Rasdi',
//     energy:10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama : 'Abdul',
//     energy:10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }
// }




// 2. function declaration

// function Mahasiswa(nama, energy) {
//     let mahasiswa = [];
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function (porsi) {
//         this.energy += porsi;
//         console.log (`Hallo ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function(jam){
//         this.energy -+ jam;
//         console.log(`hallo , ${this.nama}, selamat bermain`);
//     }
//     return mahasiswa;
// }

// let rasdi = Mahasiswa ('raasdi',10);
// let abdul = Mahasiswa ('abdul',20);

// 3. constructor function


function Mahasiswa(nama, energy) {
    
    this.nama = nama;
    this.energy = energy;

    this.makan = function (porsi) {
        this.energy += porsi;
        console.log (`Hallo ${this.nama}, selamat makan`);
    }

    this.main = function(jam){
        this.energy -+ jam;
        console.log(`hallo , ${this.nama}, selamat bermain`);
    }
   
}

let rasdi = new Mahasiswa('rasdi',10);


// 4. objecct.create()