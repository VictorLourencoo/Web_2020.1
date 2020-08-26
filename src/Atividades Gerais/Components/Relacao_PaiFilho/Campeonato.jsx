import React from 'react'


export default (props) => {
    
  return (
            <div>
                  <h1>CAMPEONATOS MUNDIAIS</h1>
                  {React.Children.map(props.children,
                  times =>{
                            return React.cloneElement(times,{
                                nome:props.nomeTime,
                            })
                  })

                  }  

            </div>

  )

}