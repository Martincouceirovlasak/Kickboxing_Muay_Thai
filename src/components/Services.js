import Footer from "./Footer";
function ArticleContent () {
    


return <div className="container mt-5">
<h1>Kick Boxing</h1>

<ul className="list-group">
  <li className="list-group-item"><strong>Full-contanct</strong><p className="lead">Full Contact, c'est l'intensité à son maximum ! Les combattants combinent technique et puissance pour dominer le ring.</p></li>
  <li className="list-group-item"><strong>Point-fight</strong><p className="lead">Point Fighting, c'est l'art de la précision rapide - marquez des points avec agilité et finesse.</p></li>
  <li className="list-group-item"><strong>Kick-light</strong><p className="lead"> Kick-Light, un équilibre idéal ! Plus engagé que le Point Fighting, c'est une danse technique où chaque contact compte.</p></li>
</ul>
<ul/>

<h1>Muay Thai</h1>

<ul className="list-group">
    <p className="lead">Le Muay Thai, surnommé l'art des huit membres, est un sport de combat thaïlandais combinant des techniques de poings, de pieds, de genoux et de coudes, enrichi d'une riche tradition culturelle et d'un profond respect pour la discipline et la spiritualité</p>

</ul>
<ul/>
<Footer className = "footer fixed-bottom"/>
</div>

}

export default ArticleContent;