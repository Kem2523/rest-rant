const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
          <img height="300" width="500" src="/images/404.jpg" alt="404" />
      <div>
        Photo by <a href="AUTHOR_LINK">Charles Deluvio</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404
