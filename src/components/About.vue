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
            <img src="/static/img/0.jpg" class="logo-mario">
            <br/>
            This is my first take a Vue.js project that integrates FourSquare's API and Google Maps with Places.
            <br/>
            Thank you to all the online developers who share their code and amazing experiences.
          </p>
          <blockquote>
            A person who never made a mistake never tried anything new<br/><br/>
            <span>- Einstein -</span>
          </blockquote>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
  export default {
    name: 'About',
    data () {
      return {
        msg: 'About'
      }
    }
  }
</script>
