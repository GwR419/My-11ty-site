---
title: Gallery
layout: base.njk
permalink: gallery.html
---

# Gallery

Pick a button to show one set of images.

<is-land on:visible>

<div id="gallery" v-scope="{ active: 'all' }">
  <div class="filters">
    <button @click="active = 'all'" :class="{ on: active === 'all' }" :aria-pressed="active === 'all'">All</button>
    <button @click="active = 'setup'" :class="{ on: active === 'setup' }" :aria-pressed="active === 'setup'">Setup</button>
    <button @click="active = 'cat'" :class="{ on: active === 'cat' }" :aria-pressed="active === 'cat'">Cat</button>
    <button @click="active = 'v'" :class="{ on: active === 'v' }" :aria-pressed="active === 'v'">V</button>
    <button @click="active = 'kojima'" :class="{ on: active === 'kojima' }" :aria-pressed="active === 'kojima'">Kojima</button>
  </div>
  <section class="topic" v-show="active === 'all' || active === 'setup'">
    <h3>Setup</h3>
    <img src="img/setup/daw-fl-studio.jpg" alt="FL Studio open with a blue theme, the sample browser full of Cymatics packs on the left and Hatsune Miku art in the empty workspace">
    <img src="img/setup/pc-build.jpg" alt="A glass PC case in a dark room, lit up in blue and purple, with fans and a small cooler screen showing anime art">
  </section>
  <section class="topic" v-show="active === 'all' || active === 'cat'">
    <h3>Cat</h3>
    <img src="img/cat/on-the-floor.jpg" alt="A black and white tuxedo cat with yellow eyes sitting on a wood floor, looking up at the camera">
    <img src="img/cat/on-the-shelf.jpg" alt="The tuxedo cat sitting on a white shelf next to a bag of coffee, eyes wide">
    <img src="img/cat/close-up.jpg" alt="A close-up of the tuxedo cat's face, showing the black spot on its white chin">
    <img src="img/cat/in-a-box.jpg" alt="The tuxedo cat sitting inside an open cardboard box in a living room">
    <img src="img/cat/side-view.jpg" alt="The tuxedo cat in profile, looking to the side, with a Christmas tree in the background">
  </section>
  <section class="topic" v-show="active === 'all' || active === 'v'">
    <h3>V</h3>
    <img src="img/v/arms-crossed.jpg" alt="My V from Cyberpunk 2077 at night, arms crossed with a pistol in each hand, wearing glowing visor glasses and a black and white NUSA jacket">
    <img src="img/v/pistols-up.jpg" alt="My V from Cyberpunk 2077 holding two pistols up beside her head, next to a graffiti-covered wall">
  </section>
  <section class="topic" v-show="active === 'all' || active === 'kojima'">
    <h3>Kojima</h3>
    <img src="img/kojima/bounty-screen.jpg" alt="Hideo Kojima's character in Cyberpunk 2077 on a red NCPD bounty screen that reads Bounty Issued">
    <img src="img/kojima/yellow-burst.jpg" alt="Hideo Kojima's character in Cyberpunk 2077 looking down, framed by bright yellow comic-style speed lines">
  </section>
</div>

  <template data-island>
    <script type="module">
      import { createApp } from './js/petite-vue.js'
      createApp().mount('#gallery')
    </script>
  </template>

</is-land>
