let friends = [" Luke ", " Meagan ", " Carl ", " Benjamin ", " Sierra "];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    let num = 99;
    while (num > 0) {
        if (num === 1) {
            console.log(" 1 line of code in the file, " + num + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file!");
        } else {
            console.log(num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " strikes one out, clears it all out," + (num - 1) + " lines of code in the file.");
        }
        num--;
    }
}



