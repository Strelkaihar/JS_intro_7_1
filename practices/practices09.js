var a = 12;
(function() {
    console.log(a);
})();

function generateToken() {
    let token = "123onks123";
    return () => {
        console.log(token);
    }
}
const tokenForAdmin = generateToken();
const tokenForUser = generateToken();
tokenForAdmin();
tokenForUser();

var a = 12;
(function() {
    var a = 12;
    console.log(a); // 12
})();
const a = 12;
(function() {
    const a = 12;
    console.log(a); // 12
})();
const a = 12;
(function() {
    a = 12;
    console.log(a); // Error
})();



