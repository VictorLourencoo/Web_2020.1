import React from 'react'


export default(props) =>{
   return( <div>
        <button onClick={()=> props.NotificarPai('tudo bom?')}>
            OI PAI 
        </button>

    </div>
   )

}