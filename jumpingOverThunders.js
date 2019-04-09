function jumpingOnClouds(c) {
    let p = 0; //starting position
    let h = 0; // hop count;
    while (p < c.length-1) {
        //console.log(p);
        c[p + 2] ? p++ : p += 2;
        h++;
        console.log(`Ziplama:${h} yeni pozisyon: ${p} C length: ${c.length}`)
    }
    return h;
}


console.log(jumpingOnClouds([0,0,1,0,0,1,0]));
