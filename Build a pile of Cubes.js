function findNb(m) {
    let output = 1;
    let check = 0;
    while (check <= m) {
        check += output ** 3;
        if (check == m) return output;
        output += 1;
    }
    return -1;
}
//by aziz ammar