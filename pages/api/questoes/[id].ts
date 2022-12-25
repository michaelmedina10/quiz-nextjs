// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next'
import questoes from '../bancoDeQuestoes'

type Data = {
  name?: string
  id?: string | number
}

export default function handler(
  req: any,
  res: NextApiResponse<Data>
) {
  const id = +req.query.id ?? 0
  const idSelecionado = id
  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

  if(unicaQuestaoOuNada.length === 1){
    const questao = unicaQuestaoOuNada[0].embaralharRespostas()
    return res.status(200).json(questao.paraObjeto())
  } else {
    return res.status(204).end()
  }
}
