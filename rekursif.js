function logIndex(angka) {
    console.log(angka);
    if (angka>0) {
        logIndex(angka-1)
    }
}


logIndex(8)