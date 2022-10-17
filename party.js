//Vetores
let party = [[], [], [], []]
let ident = [[], [], [], []]
alert("Corrida unica")
//Inserindo o nome de cada competido
for (let iparty = 0; iparty < 4; iparty++) {
  while (true) {
    let nome = prompt(`Digite o nome do participante  N°${iparty + 1}(São 4 participantes ao todo)
    Digite pronto para finalizar`)//laço de repetição para concatenar  
    nome = nome.toUpperCase();
    if (nome === "PRONTO") {
      break
    } else { party[iparty].push(nome) }
  }
}
//Informando o numeros dos competidores
for (let inparty = 0; inparty < 4; inparty++) {
  while (true) {
    let numeroPart = prompt(`Digite o numero dos participantes: ${party[inparty][0]}
    Digite pronto para finalizar `)
    numeroPart = numeroPart.toUpperCase()
    if (numeroPart === "PRONTO") {
      break
    } else {
      ident[inparty].push(numeroPart)
    }
  }
}
//perguntas para informar o tempo de cada corredor atraves de let
let tmpM = Number(prompt(`Digite os minutos percorrido do corredor ${party[0]}`))
let tmpS = Number(prompt(`Digite os segundos percorrido do corredor ${party[0]}`))
 
let tmpM1 = Number(prompt(`Digite os minutos percorrido do corredor ${party[1]}`))
let tmpS1 = Number(prompt(`Digite os segundos percorrido do corredor ${party[1]}`))
 
let tmpM2 = Number(prompt(`Digite os minutos percorrido do corredor ${party[2]}`))
let tmpS2 = Number(prompt(`Digite os segundos percorrido do corredor ${party[2]}`))
 
let tmpM3 = Number(prompt(`Digite os minutos percorrido do corredor ${party[3]}`))
let tmpS3 = Number(prompt(`Digite os segundos percorrido do corredor ${party[3]}`))
//somar os minutos com 1000 para quer assim não fique vaziu a variavel tmpMM=tempo minutos maximo
let tmpMM = tmpM + 1000
let tmpMM1 = tmpM1 + 1000
let tmpMM2 = tmpM2 + 1000
let tmpMM3 = tmpM3 + 1000
//somando minutos com segundos
let tmpT = tmpMM + tmpS
let tmpT1 = tmpMM1 + tmpS1
let tmpT2 = tmpMM1 + tmpS2
let tmpT3 = tmpMM3 + tmpS3
//se o minutos forem iguais a 1000 quer dizer quer o usuario não inserio os minutos
if (tmpT === 1000) {
  let vencedor = Math.min(tmpT1, tmpT2, tmpT3)
  if (vencedor === tmpT1) {
    console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
  } if (vencedor === tmpT2) {
    console.log(`O vencedor ${party[2]} teve um tempo de ${tmpM2} minutos e ${tmpS2} segundo`)
 
  } if (vencedor === tmpT3) {
    console.log(`O vencedor ${party[3]} teve um tempo de ${tmpM3} minutos e ${tmpS3} segundo `)
 
  }
} else if (tmpT1 === 1000) {
  let vencedor = Math.min(tmpT, tmpT2, tmpT3)
  if (vencedor === tmpT) {
    console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo`)
  } if (vencedor === tmpT2) {
    console.log(`O vencedor ${party[2]} teve um tempo de ${tmpM2} minutos e ${tmpS2} segundo`)
 
  } if (vencedor === tmpT3) {
    console.log(`O vencedor ${party[3]} teve um tempo de ${tmpM3} minutos e ${tmpS3} segundo `)
 
  }
} else if (tmpT2 === 1000) {
  let vencedor = Math.min(tmpT, tmpT1, tmpT3)
  if (vencedor === tmpT) {
    console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo`)
  } if (vencedor === tmpT1) {
    console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
 
  } if (vencedor === tmpT3) {
    console.log(`O vencedor ${party[3]} teve um tempo de ${tmpM3} minutos e ${tmpS3} segundo `)
 
  }
} else if (tmpT3 === 1000) {
  let vencedor = Math.min(tmpT, tmpT1, tmpT2)
  if (vencedor === tmpT) {
    console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo `)
  } if (vencedor === tmpT1) {
    console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
 
  } if (vencedor === tmpT2) {
    console.log(`O vencedor ${party[2]} teve um tempo de ${tmpM2} minutos e ${tmpS2} segundo `)
 
  }
}
//usando math o programa escolher o menor tempo e o declara o vencedor 
let campeao = Math.min(tmpT, tmpT1, tmpT2, tmpT3)
if (tmpT === campeao) {
  console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo`)
} else if (tmpT1 === campeao) {
  console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
} else if (tmpT2 === campeao) {
  console.log(`O vencedor ${party[2]} teve um tempo de ${tmpM2} minutos e ${tmpS2} segundo `)
} else if (tmpT3 === campeao) {
  console.log(`O vencedor ${party[3]} teve um tempo de ${tmpM3} minutos e ${tmpS3} segundo `)
 
}
