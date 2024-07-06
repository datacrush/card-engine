import { useState, useContext, useEffect } from 'react';
import { gamePhase } from '../interfaces/gamePhase';
import { GameContext } from './EuchreComponent';
import './PromptComponent.css'

const dealerClasses : string[] = ['player_1_is_dealer', 'player_2_is_dealer', 'player_3_is_dealer', 'player_4_is_dealer' ]

const PromptComponent = () => {
  const game = useContext(GameContext);
  //const [message, setMessage] = useState('Welcome');
  //const [prompt1, setPrompt1] = useState('Pass');
  //const [prompt2, setPrompt2] = useState('Tell Player 2 to pick it up');
  const [dealerCSSClass, setdealerCSSClass] = useState('player_1_is_dealer');

  useEffect(() => {
    if (game) {
      setdealerCSSClass(dealerClasses[game.dealer]);
    }
    }, [game]);
  
  if (game.prompt1 !== '' || game.prompt2 !== '') {
    return (
      <>
        <div className="prompt_container">
          <button className="prompt_choice1" onClick={ () => game.prompt1Handler(game) }>{ game.prompt1 }</button>
          <button className="prompt_choice2" onClick={ () => game.prompt2Handler(game) }>{ game.prompt2 }</button>
        </div>
        <div className={`${dealerCSSClass}`}>Dealer</div>
      </>

    )
  }
  else {
    return (
    <>
       <div className={`${dealerCSSClass}`}>Dealer</div>
    </>
    )
  }
  

  

}

export default PromptComponent