<template>
  <div>
    <nav>
      <a href="/friends">Go to App</a>
      |
      <a href="/login">Login</a>
    </nav>
    <header>
      <h1>{Decentralized Chat App}</h1>
      <p>Get Back your freedom from centralized corporate chat apps</p>
    </header>
    <blockquote>
      <ul>
        <li>
          <h6> This project (supposedly) uses</h6>
        </li>
        <ul>
          <li><a href="https://nuxtjs.org/">Nuxt JS </a>for frontend/SSG, <a
              href="https://www.github.com/dragos-efy/efy">EFY</a> for UI</li>
          <li><a href="https://ipfs.io/">IPFS</a> & <a href="https://filecoin.io/">Filecoin</a> for website hosting and
            file storage (via <a href="https://fleek.co/">fleek</a>) </li>
          <li><a href="https://capacitorjs.com/">Capacitor</a> for native builds</li>
        </ul>

      </ul>

    </blockquote>
    <section>
      <h4>
        Why {Decentralized Chat App} ?
      </h4>
      <dfn>and the problem with
        Web2 Social Media
      </dfn>
      <br><br>
      <article>
        <ol>
          <li>centralization</li>
          your data is with a company in a different country
          <li>ad-driven business model</li>
          privacy problem
          minimal client side JS
          <li>Censorship</li>
          If they ban you, you are banned
          <li>Repudiation</li>
          As data is centralized, it can be deleted easily by threath actors
        </ol>
      </article>
    </section>

    <footer>
      <p>{Decentralized Chat App} made by <a href="https://github.com/shell-raiser">Shailesh</a>
        <br><a target="_blank" href="https://github.com/shell-raiser/RH22">
          learn more on the
          GitHub page</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
