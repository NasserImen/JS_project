function test(a, b) {
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        console.log("le nombre est negatif");
    }
    else if ((a > 0) && (b > 0)) {
        console.log("le nombre est positif");
    }
    else {
        console.log("le produit est null");
    }
}
test(61, 0);
