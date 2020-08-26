import React from 'react'


function tabela(time) {
    return(<div>
<table class="striped">
                    <thead>
                        <tr>Times Brasileiros</tr>
                         <th>{time}</th>
                        
                    </thead>
                </table>

    </div>

    )


}


function Times(props){
    return tabela(props.nomeTime)


}




export default (tabela,Times);