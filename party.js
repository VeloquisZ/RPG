//Vetores
<<<<<<< HEAD
let party = [[],[],[],[]]
let ident = [[],[],[],[]]
//Variveis
let nome = document.querySelector("#nome")
let identific = document.querySelector("#identificacao")
let nome1 = document.querySelector("#nome1")
let identific1 = document.querySelector("#identificacao1")
let nome2 = document.querySelector("#nome2")
let identific2 = document.querySelector("#identificacao2")
let nome3 = document.querySelector("#nome3")
let identific3 = document.querySelector("#identificacao3")
//butoes
let bntSalv = document.querySelector("#BntSalv")
//Inserindo o nome de cada competido
bntSalv.addEventListener("click", (e) => {
    alert("foiiii")

    // for (let iParty = 0; iParty < 1; iParty++) 
    //     party[iParty].push(nome.value)
    //     party[iParty].push(ident.value)
    // }







        party[0].push(nome.value)
        party[1].push(nome1.value)
        party[2].push(nome2.value)
        party[3].push(nome3.value)
    ident[0].push(identific.value)
    ident[1].push(identific1.value)
    ident[2].push(identific2.value)
    ident[3].push(identific3.value)
    
    console.log(party)
    console.log(ident)


//perguntas para informar o tempo de cada corredor atraves de let
let tmpM = Number(prompt(`Digite os minutos percorrido do corredor ${party[0]}`))
let tmpS = Number(prompt(`Digite os segundos percorrido do corredor ${party[0]}`))
=======
let party = []
let ident = []
//Variveis
let nome = document.querySelector("#nomes")
let Nparty = document.querySelector("#Nparty").value
let identific = document.querySelector("#Identificacao").value
//butoes
let bntNparty = document.querySelector("#Bntparty")
let bntSalv = document.querySelector("#BntSalv")
//Inserindo o nome de cada competido
bntNparty.addEventListener("click ", (e)=>{

}
)
// //Informando o numeros dos competidores
// for (let inparty = 0; inparty < 4; inparty++) {
//   while (true) {
//     let numeroPart = prompt(`Digite o numero dos participantes: ${party[inparty][0]}
//     Digite pronto para finalizar `)
//     numeroPart = numeroPart.toUpperCase()
//     if (numeroPart === "PRONTO") {
//       break
//     } else {
//       ident[inparty].push(numeroPart)
//     }
//   }
// }
// //perguntas para informar o tempo de cada corredor atraves de let
// let tmpM = Number(prompt(`Digite os minutos percorrido do corredor ${party[0]}`))
// let tmpS = Number(prompt(`Digite os segundos percorrido do corredor ${party[0]}`))
>>>>>>> d5a179296521bc9b8d8c528ee5e53ad381f67b99
 
// let tmpM1 = Number(prompt(`Digite os minutos percorrido do corredor ${party[1]}`))
// let tmpS1 = Number(prompt(`Digite os segundos percorrido do corredor ${party[1]}`))
 
// let tmpM2 = Number(prompt(`Digite os minutos percorrido do corredor ${party[2]}`))
// let tmpS2 = Number(prompt(`Digite os segundos percorrido do corredor ${party[2]}`))
 
<<<<<<< HEAD
let tmpM3 = Number(prompt(`Digite os minutos percorrido do corredor ${party[3]}`))
let tmpS3 = Number(prompt(`Digite os segundos percorrido do corredor ${party[3]}`))
//somar os minutos com 1000 para quer assim não fique vaziu a variavel tmpMM=tempo minutos maximo
let tmpMM = tmpM + 0
let tmpMM1 = tmpM1 + 0
let tmpMM2 = tmpM2 + 0
let tmpMM3 = tmpM3 + 0
//somando minutos com segundos
let tmpT = tmpMM + tmpS
let tmpT1 = tmpMM1 + tmpS1
let tmpT2 = tmpMM1 + tmpS2
let tmpT3 = tmpMM3 + tmpS3
//se o minutos forem iguais a 1000 quer dizer quer o usuario não inserio os minutos
if (tmpT === 0) {
  let vencedor = Math.min(tmpT1, tmpT2, tmpT3)
  if (vencedor === tmpT1) {
    console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
  } if (vencedor === tmpT2) {
    console.log(`O vencedor ${party[2]} teve um tempo de ${tmpM2} minutos e ${tmpS2} segundo`)
=======
// let tmpM3 = Number(prompt(`Digite os minutos percorrido do corredor ${party[3]}`))
// let tmpS3 = Number(prompt(`Digite os segundos percorrido do corredor ${party[3]}`))
// //somar os minutos com 1000 para quer assim não fique vaziu a variavel tmpMM=tempo minutos maximo
// let tmpMM = tmpM + 1000
// let tmpMM1 = tmpM1 + 1000
// let tmpMM2 = tmpM2 + 1000
// let tmpMM3 = tmpM3 + 1000
// //somando minutos com segundos
// let tmpT = tmpMM + tmpS
// let tmpT1 = tmpMM1 + tmpS1
// let tmpT2 = tmpMM1 + tmpS2
// let tmpT3 = tmpMM3 + tmpS3
// //se o minutos forem iguais a 1000 quer dizer quer o usuario não inserio os minutos
// if (tmpT === 1000) {
//   let vencedor = Math.min(tmpT1, tmpT2, tmpT3)
//   if (vencedor === tmpT1) {
//     console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
//   } if (vencedor === tmpT2) {
//     console.log(`O vencedor ${party[2]} teve um tempo de ${tmpM2} minutos e ${tmpS2} segundo`)
>>>>>>> d5a179296521bc9b8d8c528ee5e53ad381f67b99
 
//   } if (vencedor === tmpT3) {
//     console.log(`O vencedor ${party[3]} teve um tempo de ${tmpM3} minutos e ${tmpS3} segundo `)
 
<<<<<<< HEAD
  }
} else if (tmpT1 === 0) {
  let vencedor = Math.min(tmpT, tmpT2, tmpT3)
  if (vencedor === tmpT) {
    console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo`)
  } if (vencedor === tmpT2) {
    console.log(`O vencedor ${party[2]} teve um tempo de ${tmpM2} minutos e ${tmpS2} segundo`)
=======
//   }
// } else if (tmpT1 === 1000) {
//   let vencedor = Math.min(tmpT, tmpT2, tmpT3)
//   if (vencedor === tmpT) {
//     console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo`)
//   } if (vencedor === tmpT2) {
//     console.log(`O vencedor ${party[2]} teve um tempo de ${tmpM2} minutos e ${tmpS2} segundo`)
>>>>>>> d5a179296521bc9b8d8c528ee5e53ad381f67b99
 
//   } if (vencedor === tmpT3) {
//     console.log(`O vencedor ${party[3]} teve um tempo de ${tmpM3} minutos e ${tmpS3} segundo `)
 
<<<<<<< HEAD
  }
} else if (tmpT2 === 0) {
  let vencedor = Math.min(tmpT, tmpT1, tmpT3)
  if (vencedor === tmpT) {
    console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo`)
  } if (vencedor === tmpT1) {
    console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
=======
//   }
// } else if (tmpT2 === 1000) {
//   let vencedor = Math.min(tmpT, tmpT1, tmpT3)
//   if (vencedor === tmpT) {
//     console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo`)
//   } if (vencedor === tmpT1) {
//     console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
>>>>>>> d5a179296521bc9b8d8c528ee5e53ad381f67b99
 
//   } if (vencedor === tmpT3) {
//     console.log(`O vencedor ${party[3]} teve um tempo de ${tmpM3} minutos e ${tmpS3} segundo `)
 
<<<<<<< HEAD
  }
} else if (tmpT3 === 0) {
  let vencedor = Math.min(tmpT, tmpT1, tmpT2)
  if (vencedor === tmpT) {
    console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo `)
  } if (vencedor === tmpT1) {
    console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
=======
//   }
// } else if (tmpT3 === 1000) {
//   let vencedor = Math.min(tmpT, tmpT1, tmpT2)
//   if (vencedor === tmpT) {
//     console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo `)
//   } if (vencedor === tmpT1) {
//     console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
>>>>>>> d5a179296521bc9b8d8c528ee5e53ad381f67b99
 
//   } if (vencedor === tmpT2) {
//     console.log(`O vencedor ${party[2]} teve um tempo de ${tmpM2} minutos e ${tmpS2} segundo `)
 
<<<<<<< HEAD
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
  console.log(`O vencedor ${party[3]} teve um tempo de ${tmpM3} minutos e ${tmpS3} segundo `)}
 




}
)

// //Informando o numeros dos competidores
// for (let inparty = 0; inparty < 4; inparty++) {
//   while (true) {
//     let numeroPart = prompt(`Digite o numero dos participantes: ${party[inparty][0]}
//     Digite pronto para finalizar `)
//     numeroPart = numeroPart.toUpperCase()
//     if (numeroPart === "PRONTO") {
//       break
//     } else {
//       ident[inparty].push(numeroPart)
//     }
//   }
// }
=======
//   }
// }
// //usando math o programa escolher o menor tempo e o declara o vencedor 
// let campeao = Math.min(tmpT, tmpT1, tmpT2, tmpT3)
// if (tmpT === campeao) {
//   console.log(`O vencedor ${party[0]} teve um tempo de ${tmpM} minutos e ${tmpS} segundo`)
// } else if (tmpT1 === campeao) {
//   console.log(`O vencedor ${party[1]} teve um tempo de ${tmpM1} minutos e ${tmpS1} segundo`)
// } else if (tmpT2 === campeao) {
//   console.log(`O vencedor ${party[2]} teve um tempo de ${tmpM2} minutos e ${tmpS2} segundo `)
// } else if (tmpT3 === campeao) {
//   console.log(`O vencedor ${party[3]} teve um tempo de ${tmpM3} minutos e ${tmpS3} segundo `)
 
>>>>>>> d5a179296521bc9b8d8c528ee5e53ad381f67b99
