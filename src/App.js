import React, { Component } from 'react'
import './estilo.css'
import Botao from './components/Botao'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      textPhrase:''
    }

    this.brokCookie = this.brokCookie.bind(this)

    this.phrases = ['Vale mais ter um bom nome do que muitas riquezas; e o ser estimado é melhor do que a riqueza e o ouro. -Provérbios 22:1',
  'O que semear a perversidade segará males; e com a vara da sua própria indignação será extinto. -Provérbios 22:8',
'O que oprime ao pobre para se engrandecer a si mesmo, ou o que dá ao rico, certamente empobrecerá. -Provérbios 22:16',
'Não estejas entre os que se comprometem, e entre os que ficam por fiadores de dívidas, -Provérbios 22:26',
'Não comas o pão daquele que tem o olhar maligno, nem cobices as suas iguarias gostosas. -Provérbios 23:6',
'Não fales ao ouvido do tolo, porque desprezará a sabedoria das tuas palavras. -Provérbios 23:9',
'Aplica o teu coração à instrução e os teus ouvidos às palavras do conhecimento. -Provérbios 23:12',
'Não estejas entre os beberrões de vinho, nem entre os comilões de carne. -Provérbios 23:20',
'Porque o beberrão e o comilão acabarão na pobreza; e a sonolência os faz vestir-se de trapos. -Provérbios 23:21'];
  }

  brokCookie(){
    let state = this.state
    let randNumber = Math.floor(Math.random() * this.phrases.length )
      this.state.textPhrase = `"${this.phrases[randNumber]}"` 
      this.setState(state)
  }

  render(){
    return(
      <div className="container" >
        <img className="img" src={require('./assets/biscoito.png')}  />
        <Botao butName="Abrir biscoito" actionBtn={this.brokCookie} />
        <h3 className="textoFrase" > {this.state.textPhrase} </h3>
      </div>
    )
  }
}

export default App