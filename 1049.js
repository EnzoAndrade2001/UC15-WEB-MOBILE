//Exercicio 4

var palavra1 = lines[0].trim();
var palavra2 = lines[1].trim();
var palavra3 = lines[2].trim();

var tabelaAnimais = {
    "vertebrado": {
        "ave": {
            "carnivoro": "aguia",
            "onivoro": "pomba"
        },
        "mamifero": {
            "onivoro": "homem",
            "herbivoro": "vaca"
        }
    },
    "invertebrado": {
        "inseto": {
            "hematofago": "pulga",
            "herbivoro": "lagarta"
        },
        "anelideo": {
            "hematofago": "sanguessuga",
            "onivoro": "minhoca"
        }
    }
};

var animal = tabelaAnimais[palavra1][palavra2][palavra3];

// Imprime o resultado
console.log(animal);