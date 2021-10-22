// Spread Destructuring Exercise

// 1 A
const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];

// 1 B
function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos);

// 2 A
const jPCharacters = {
    alanGrant: "Sam Neill", 
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

// 2 B
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);




