#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const options = yargs.usage("Usage: -n <name>").argv;
console.log("")
console.log("Selamat Datang di Ujian WHALEZ DIGITAL TEKNOLOGI !")
console.log("")
console.log("Silahkan Pilih Soal Ujian :")
console.log("")
console.log("No. 1 Compare the Triplets :")
console.log("No. 2 Check Prime :")
console.log("No. 3 Remove Duplicate :")
console.log("No. 4 Reverse in Place :")
console.log("No. 5 First non repeating char :")
console.log("")
readline.question(`Masukan No Ujian : `, no_ujian => {
    const ujian = ['Compare the Triplets', 'Check Prime', 'Remove Duplicate', 'Reverse in Place', 'First non repeating char'];
    let index = parseInt(no_ujian) - 1;
    if (ujian[parseInt(no_ujian) - 1] === undefined) {
        console.log("Maaf No yang Anda masukan tidak tersedia !")
    } else {
        console.log(`Anda Memilih Soal ${ujian[index]}!`);
        console.log("")

        // Compare the Triplets
        if (index === 0) {
            let a = "";
            let b = "";
            let p_a = 0;
            let p_b = 0;
            readline.question(`Masukan Nilai A, Contoh : 5,6,7 : `, nilai_a => {
                a = nilai_a;
                readline.question(`Masukan Nilai B, Contoh : 3,6,10 : `, nilai_b => {
                    b = nilai_b;
                    let array_a = a.split(',');
                    let array_b = b.split(',');

                    if (array_a.length >= array_b.length) {
                        array_a.map((val, index) => {
                            if (parseInt(val) > parseInt(array_b[index])) {
                                p_a += 1;
                            } else if (parseInt(val) < parseInt(array_b[index])) {
                                p_b += 1;
                            }
                        })
                    } else {
                        array_b.map((val, index) => {
                            if (parseInt(val) > parseInt(array_a[index])) {
                                p_b += 1;
                            } else if (parseInt(val) < parseInt(array_a[index])) {
                                p_a += 1;
                            }
                        })
                    }
                    console.log("")
                    console.log("Point A : " + p_a);
                    console.log("Point B : " + p_b);
                    readline.close();
                });
            });
        }

        // Check Prime
        if (index === 1) {
            readline.question(`Masukan Angka Prima : `, angka => {
                let pembagi = 0;
                for (let i = 1; i <= angka; i++) {
                    if (angka % i == 0) {
                        pembagi++
                    }
                }
                console.log("")
                if (pembagi === 2) {
                    console.log(angka + " Adalah Bilangan Prima")
                } else {
                    console.log(angka + " Adalah Bukan Bilangan Prima")
                }
                readline.close();
            });
        }

        // Remove Duplicate
        if (index === 2) {
            readline.question(`Masukan Huruf/Angka Duplicate, Contoh : 1,3,3,3,1,5,6,7,8,1  : `, input_huruf => {
                let huruf = input_huruf.split(',');
                let hurufUnik = [...new Set(huruf)];
                let hasil = '';
                hurufUnik.map((val,index)=>{
                    if(hurufUnik.length === index+1){
                        hasil += val
                    }else{
                        hasil += val+','
                    }
                })
                console.log("")
                console.log('Hasilnya Adalah : '+hasil);
                readline.close();
            });
        }

        // Reverse in Place
        if (index === 3) {
            readline.question(`Masukan kalimat : `, kalimat => {
                let array = kalimat.split(' ');
                let reverse = '';
                array.map((val)=>{
                    reverse += [...val].reverse().join("")+' ';
                })
                console.log("")
                console.log('Hasilnya Adalah : '+reverse);
                readline.close();
            });
        }

        // First non repeating char
        if (index === 4) {
            readline.question(`Masukan kalimat : `, kalimat => {
                let array = kalimat.split(' ');
                let katake1 = [];
                let hasil = [];
                array.map((val)=>{
                    katake1.push(val.substring(0, 1))
                })
                katake1.map((val)=>{
                    if(katake1.filter((o)=>o === val).length === 1){
                        hasil.push(val)
                    }
                })
                console.log("")
                console.log('Hasilnya Adalah : '+hasil[0]);
                readline.close();
            });
        }
    }
});


// console.log(`Hello, ${options.n}!`)

// const greeting = chalk.white.bold(`Hello, ${options.name}!`);

// const boxenOptions = {
//     padding: 1,
//     margin: 1,
//     borderStyle: "round",
//     borderColor: "green",
//     backgroundColor: "#555555"
// };
// const msgBox = boxen(greeting, boxenOptions);

// console.log(msgBox);