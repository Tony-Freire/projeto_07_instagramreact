import Icons from './Icons'

export default function Post({post:{user, conteudo, bottombar}}){
   
      return(
          <div class="post">
          <Topo user = {user}/>
          <Conteudo conteudo = {conteudo} />
          <Bottombar follower={bottombar.follower} qtd = {bottombar.qtd}/>
          <Comentario/>
          </div>
      )
  }
  
  function Topo({user}){
      return (
        <div class="info">
          <div class="user">
          <div class="perfil-pic"> <img src={`assets/images/${user}.svg`} alt=""/></div>   
          <p class="username">{user}</p>         
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
      )
  }
  function Conteudo({conteudo}){
      return (
          
              <img class="post-img" src={`assets/images/${conteudo}.svg`} />
          
      )
  }
  function Bottombar({follower,qtd}){
      return (
          <div class="post-conteudo">
          <Acoes />
          <Curtidas follower={follower} qtd={qtd} />
          </div>
      )
  }
  function Acoes(){
      return(
        <div class="reacoes">
          <Icons icons= {['heart-outline', 'chatbubble-outline', 'paper-plane-outline']} />
          <ion-icon name="bookmark-outline" class="salvar" role="img" aria-label="bookmark outline"></ion-icon>
        </div>
        
      )
  }
  function Curtidas({follower, qtd}){
      return(
      <div class="curtidas">
          <img src={`assets/images/${follower}.svg`} />
          <div class="texto">
          Curtido por <strong>{follower}</strong> e <strong>outras {qtd} pessoas</strong>
          </div>
          
      </div>
      )
  }
  function Comentario()
  {return(
    <div class="comentario">
    <ion-icon name="happy-outline" class="smile"></ion-icon>
    <input type="text" class="caixa-comentario" placeholder="Adicionar um comentário"/>
    <button class="btn-comentario">publicar</button>
    </div>
  )
  }
 /* <div class="post">
                       
                       <img src="images/gato-telefone 1.png" class="post-img" alt="">
                       <div class="post-conteudo">
                           <div class="reacoes">
                            <ion-icon name="heart-outline" role="img" class="md hydrated" aria-label="heart outline"></ion-icon>
                            <ion-icon name="chatbubble-outline" role="img" class="md hydrated" aria-label="chatbubble outline"></ion-icon>
                            <ion-icon name="paper-plane-outline" role="img" class="md hydrated" aria-label="paper plane outline"></ion-icon>
                            <ion-icon name="bookmark-outline" class="salvar md hydrated" role="img" aria-label="bookmark outline"></ion-icon>
                           </div>
                           <div class="curtidas">
                            <img src="images/respondeai 2.png" alt="">
                            <p>Curtido por <span class="username">respondeai</span> e  
                                <span class="likes">outras 101.523 pessoas</span>
                            </p>
                           </div>
                           
                       </div>
                       <div class="comentario">
                        <ion-icon name="happy-outline" class="smile md hydrated" role="img" aria-label="happy outline"></ion-icon>
                        <input type="text" class="caixa-comentario" placeholder="Adicionar um comentário">
                        <button class="btn-comentario">publicar</button>
                       </div>
                    </div>*/