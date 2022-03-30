alert("Caso queira escolher um escreva o nome de qual você escolheu com letra minuscula")

const backOUfront = prompt("qual area você que seguir Front-end ou Back-end?", `EX: front-end`)

if (backOUfront == "front-end") {
    const reactOUvue = prompt("Oque você quer aprender depois React ou Vue", `EX: react`)
    if (reactOUvue == "react") {
        alert("você escolheu Front-end e Reactjs")
    } else if (reactOUvue == "vue") {
        alert("você escolheu Front-end e Vuejs")
    } else {
        alert("você não escreveu com letras minusculas ou não escreveu nada!")
    }

} else if (backOUfront == "back-end") {
    const csharpOUjava = prompt("Oque você que aprender depois C# ou Java", `EX: c#`)
    if (csharpOUjava == "c#") {
        alert("você escolheu Back-end e C#")
    } else if (csharpOUjava == "java") {
        alert("você escolheu Back-end e Java")
    }else {saas
        alert("você não escreveu com letras minusculas ou não escreveu nada!")

    }

} else {
    alert("você não escreveu com letras minusculas ou não escreveu nada!")

}