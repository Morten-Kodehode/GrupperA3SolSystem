// script

const articleArray = [
    `<h1>The Solar System</h1>
    <img class="home-img" src="images/Solar_System.jpg" alt="The Solar System" />
    <article>
      The Solar System[c] is the gravitationally bound system of the Sun and
      the objects that orbit it. It formed 4.6 billion years ago from the
      gravitational collapse of a giant interstellar molecular cloud. The
      vast majority (99.86%) of the system's mass is in the Sun, with most
      of the remaining mass contained in the planet Jupiter.
    </article>`,
    `<h1>Mercury</h1>
    <img src="images/mercury2.jpg" alt="The Solar System">
    <article>
      Mercury is the closest planet to the Sun. The smallest planet in the Solar System (0.055 MEarth), Mercury has no natural satellites. The dominant geological features are impact craters or basins with ejecta blankets, the remains of early volcanic activity including magma flows, and lobed ridges or rupes that were probably produced by a period of contraction early in the planet's history. Mercury's very tenuous atmosphere consists of solar-wind particles trapped by Mercury's magnetic field, as well as atoms blasted off its surface by the solar wind. Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy.
    </article>`
]

const article = document.getElementById('main-page')

function render(){
    article.innerHTML = articleArray[0]
}

render()