//  # 2️⃣ Calculadora de partidas Rankeadas

function adquirirQuantidadeExperienciaJogador(quantidadeVitorias, quantidadeDerrotas) {
    return quantidadeVitorias - quantidadeDerrotas;
  }
  
  const nomeHeroi = 'Nati Linda'
  const quantidadeVitorias = 101
  const quantidadeDerrotas = 1
  
  const saldoVitorias = adquirirQuantidadeExperienciaJogador(quantidadeVitorias, quantidadeDerrotas)
  
  let nivel = 'Ferro'
  
  if (saldoVitorias >= 101) {
  
      nivel = 'Imortal'
  
  } else if (saldoVitorias >= 91) {
  
      nivel = 'Lendário'
  
  } else if (saldoVitorias >= 81) {
  
      nivel = 'Diamante'
  
  } else if (saldoVitorias >= 51) {
  
      nivel = 'Ouro'
  
  } else if (saldoVitorias >= 21) {
  
      nivel = 'Prata'
  
  } else if (saldoVitorias >= 11) {
  
      nivel = 'Bronze'
  
  }
  
  
  console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);