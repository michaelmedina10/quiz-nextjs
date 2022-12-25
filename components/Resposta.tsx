import RespostaModel from "../model/resposta"
import styles from "../styles/Resposta.module.css"

interface RespostaProps {
    valor: RespostaModel,
    indice: number,
    letra: string,
    corFundoLetra: string,
    respostaFornecida: (indice: number) => void
}

export default function Resposta(props: RespostaProps){
    const resposta = props.valor
    const respostaRevelada = resposta.revelada ? styles.repostaRevelada : ''
    return (
        <div className={styles.resposta} onClick={() => props.respostaFornecida(props.indice)}>
            <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>
                <div className={styles.frente}>
                    <div className={styles.letra} style={{backgroundColor: props.corFundoLetra}}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>
                    {resposta.certa ? (
                    <div className={styles.certa}>
                        <div>A Resposta Certa é...</div>
                        <div className={styles.valor}>{resposta.valor}</div>
                    </div>) : (
                    <div className={styles.errada}>
                        <div>A Resposta Informada esta...</div>
                        <div className={styles.valor}>{resposta.valor}</div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}