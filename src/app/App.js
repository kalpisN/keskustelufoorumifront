import React from 'react';
import './App.css';
import SideNavbar from "../nav/SideNavbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Topic from "../chat/Topic";
import NewPost from "../chat/NewPost";

function App() {
  return (
    <div className="App container-fluid">
        <Router>
            <div className="row">
                    <SideNavbar/>
                <div className="col-md-9">
                        <Switch>
                            <Route exact path="/" component={Demoteksti}/>
                            <Route path="/b">
                                <Topic id="1"/>
                            </Route>

                            <Route path="/c">

                            </Route>
                        </Switch>
            </div>
            </div>
        </Router>
    </div>
  );
}

const Demoteksti = () => (
    <div>
            <h2>Lorem ipsum dolor sit amet.</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Aliquam
            aspernatur blanditiis distinctio eaque est eveniet explicabo molestias mollitia natus nisi
            numquam odio
            provident quibusdam reiciendis sapiente, tempora unde vero voluptates! Asperiores commodi,
            consequuntur deleniti
            dolorem dolorum eius eos error eum fugit incidunt labore modi nesciunt nostrum porro
            praesentium quam rem
            repudiandae rerum ut voluptatibus. Aliquid aperiam atque commodi, dignissimos eius harum
            impedit, laboriosam
            laborum quaerat, quam soluta tempora veniam? Aliquam asperiores commodi eaque eos error,
            esse inventore
            laboriosam necessitatibus nesciunt odit quibusdam quis rem repudiandae sunt tempora ullam
            vitae? Ad animi est
            facere iste, iure laboriosam natus nostrum sapiente vel!</p><p>Aliquam cumque, dolores error
            facilis in quo
            saepe ut veniam! Commodi dolorum ducimus eum molestias necessitatibus nulla officia
            repellat, velit. A
            consequatur consequuntur delectus hic libero molestias nulla optio, repudiandae sequi
            tempora. Aperiam
            architecto atque cum, deleniti ea enim ex explicabo iure labore molestiae nam necessitatibus
            placeat quasi,
            repudiandae suscipit velit vitae, voluptate? A at consectetur culpa cum dolores doloribus
            eligendi excepturi
            fuga fugiat illo in, ipsum itaque laborum nisi nobis obcaecati perspiciatis quibusdam
            recusandae sapiente
            tenetur. Aliquam commodi incidunt officiis. Commodi cumque, debitis dolore dolores excepturi
            facere harum
            laborum laudantium maiores nesciunt possimus qui repellat repudiandae tenetur vel
            veniam!</p><p>Aliquam
            architecto consectetur fugit iure numquam reiciendis reprehenderit, sed. Cum cumque eos
            maxime nam nemo optio
            quasi, repellat sed suscipit unde! Accusantium adipisci aliquam at blanditiis cum cumque
            delectus dicta dolor
            dolorem ducimus enim error excepturi id inventore itaque laboriosam nemo nesciunt nobis
            officia omnis porro,
            quas quod quos rerum sapiente sit tempore unde vitae voluptas voluptatibus. Adipisci at eos
            eveniet,
            exercitationem facere iure nisi nostrum officia quo quod, repellat reprehenderit rerum
            suscipit. Aliquid commodi
            eligendi laborum sit! Accusantium ad architecto assumenda cum explicabo. Atque cumque ea
            esse iusto labore
            molestiae omnis, quos repudiandae sequi totam. Alias molestiae quasi quibusdam!</p>
            <p>Accusamus assumenda autem,
                    beatae consequatur doloremque eaque eveniet fuga harum incidunt iste, itaque magni
                    molestiae mollitia
                    necessitatibus neque nisi odio perferendis quaerat rem repellat temporibus tenetur
                    voluptas voluptatum? Dolor,
                    ea eaque, earum excepturi fugit iste, laborum officiis porro quaerat quidem sit
                    soluta tempora. A dolore dolorum
                    eius harum in iure neque reprehenderit, voluptates. Dolorem eos illum ipsum minus
                    optio pariatur reprehenderit
                    similique ullam. Accusamus aliquid commodi consequuntur cum ducimus illum, in ipsum
                    laboriosam neque nihil omnis
                    ratione veritatis voluptatem. Aperiam autem corporis delectus dolorem doloribus
                    ducimus eaque expedita, illo, in
                    mollitia natus nemo omnis praesentium rem veniam vero voluptatibus voluptatum.</p>
            <p>Ab amet, commodi delectus,
                    dolore dolorem et in ipsam iure nihil quia reiciendis ullam veniam voluptas.
                    Accusantium aliquid culpa debitis
                    doloribus ducimus ea eius eum ex expedita impedit, iste laboriosam magnam
                    necessitatibus nemo non odit officia
                    optio perspiciatis provident quibusdam ratione reprehenderit similique suscipit
                    tempora tenetur ullam veritatis
                    voluptate? Asperiores est fugit maxime, nesciunt obcaecati rem veritatis voluptatum.
                    Autem doloremque facere
                    fugit illo in quam recusandae! Animi autem beatae commodi consequatur cum,
                    distinctio dolores dolorum in
                    inventore, nihil quia quis quisquam repellat voluptas voluptatem? A accusamus
                    accusantium amet at blanditiis,
                    dolorem maxime neque obcaecati, quidem quis, recusandae repellat reprehenderit
                    tempora.</p><p>Consequatur fugiat
            ipsa laborum numquam soluta, totam unde? Accusamus aspernatur beatae blanditiis commodi,
            consectetur culpa
            dolorem earum enim esse eum eveniet exercitationem facere facilis illum impedit ipsa ipsum
            laboriosam maiores
            mollitia natus nihil non perferendis porro quaerat quo repellat sequi ullam unde vitae
            voluptas! Accusamus
            adipisci alias architecto aut beatae consequuntur eligendi est explicabo fuga fugiat fugit
            in itaque libero
            maiores nam nihil, nobis numquam obcaecati odio optio perferendis placeat quaerat quas
            quibusdam, ratione
            temporibus, tenetur voluptas. Ab alias autem dolor earum, ex explicabo fuga in, molestiae
            nesciunt placeat quae
            quas qui quidem temporibus veniam veritatis vero vitae. Facilis, placeat?</p><p>Accusamus
            aperiam aut corporis
            debitis doloribus eligendi enim est expedita fuga incidunt libero nesciunt non, nulla
            provident quia, quidem
            repudiandae tempora ullam, vel veritatis! Assumenda ex impedit saepe? Culpa dolores
            doloribus eos eum harum iste
            libero tenetur voluptas. At dolore modi nemo nostrum obcaecati odio repellat veniam. Ab
            accusamus, assumenda
            cupiditate doloremque ducimus esse et excepturi labore minus modi nemo nostrum officia
            officiis quae rem
            repellendus sit, tempora vel? Ad aliquid at blanditiis consequuntur deserunt dicta
            distinctio dolore dolores ea
            esse eveniet inventore ipsa, iste itaque modi nulla optio quidem quisquam sed similique sunt
            tenetur vel velit
            vitae voluptas voluptatem?</p>
    </div>
)

export default App;
