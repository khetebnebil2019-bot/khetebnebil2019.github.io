function lastModDate() {
    var lastMod = document.lastModified;
    var lastMod = lastMod.substring(1, 20);

    document.getElementById("displayLastMod").innerHTML = "<p>Date is Updated " + lastMod + " </p";
}