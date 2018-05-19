<template>
  <div id="app">
    <main id="main-content">
      <section id="intro">
        <header class="header">
          <div id="logo">
            <a href="#"><img src="/static/img/logo.svg" alt="Logo"></a>
          </div>
          <div id="search-box"></div>
          <a class="menu-trigger" href="javascript:void(0)">Menu<span></span></a>
        </header>
          <div class="content-wrapper">
            <p>
              Ninja'd by:
              <br/><br/>
              <a href="http://vanilla-js.com">Mario Peusschers</a>
              <br/>
              <a href="https://github.com/AstroPony/adyensquare">github.com *Slash!* AstroPony *Slash!* adyensquare</a>
            </p>
          </div>
      </section>
    </main>
  </div>
</template>
<script>
  export default {
    name: 'contact',
    data () {
      return {
        msg: 'Contact'
      }
    }
  }
</script>
