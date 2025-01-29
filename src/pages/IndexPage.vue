<template>
  <LeftIconsList />
  <RightEmail />
  <main>
    <div class="loader" v-if="is_loading">
      <img src="/src/assets/Untitled design.gif" alt="Lester Logo Gif" />
    </div>

    <!------------- Hero Section --------------->
    <section class="fng-intro">
      <span class="fng-intro-sup-text">Hi, my name is</span>
      <div>
        <h2 class="fng-intro-title-text">Lester Niel Fong.</h2>
      </div>
      <div>
        <h3 class="fng-intro-sub-text">I build things for the web.</h3>
      </div>
      <div>
        <p class="fng-intro-desc-text">
          I'm a software engineer based in the Philippines specializing in
          building (and occasionally designing) exceptional full-stack websites,
          applications, and everything in between.
        </p>
      </div>
      <div>
        <a
          href="mailto:lesternielcfong22@gmail.com"
          class="btn-default d-inline-block"
          >Get In Touch</a
        >
      </div>
    </section>

    <!------------- About Me --------------->
    <section class="fng-about">
      <h2 class="fng-about-numbered-heading">About Me</h2>
      <div class="fng-about-inner">
        <div class="fng-about-inner-left">
          <p>
            Hey there! I’m Lester, a passionate programmer who’s been hooked on
            coding since high school. My journey began as an
            <span class="text-highlight">
              associate developer at PocketDevs during my sophomore year in
              college</span
            >, and since then, I’ve had the chance to work in a variety of
            settings – from corporations to startups, and even freelancing.
          </p>
          <p>
            Now, I’m focused on
            <span class="text-highlight">building e-commerce web apps</span>
            full-time and
            <span class="text-highlight"
              >working on online food delivery apps</span
            >
            part-time for a diverse range of clients. I’m always looking to
            grow, learn, and create meaningful solutions. Let’s connect and see
            what we can build together!
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul class="fng-about-inner-left-skills-list">
            <li>Javascript (ES6+)</li>
            <li>Vue</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Graphql</li>
            <li>Mysql</li>
          </ul>
        </div>
        <div class="fng-about-inner-right">
          <div class="fng-about-inner-right-wrapper">
            <div class="fng-about-inner-right-wrapper-img_container">
              <img
                src="/src/assets/lester-pro.jpg"
                alt="Professional Shot Photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!------------- Where I've Worked --------------->
    <section class="fng-works">
      <h2 class="fng-works-numbered-heading">Where I've Worked</h2>
      <div>
        <div class="d-flex align-items-start">
          <!-- tabs -->
          <div
            class="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link fng-works-tabs active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Prime Solutions
            </button>
            <button
              class="nav-link fng-works-tabs"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Switch Connect
            </button>
            <button
              class="nav-link fng-works-tabs"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-disabled"
              type="button"
              role="tab"
              aria-selected="false"
            >
              PocketDevs
            </button>
            <button
              class="nav-link fng-works-tabs"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Freelance
            </button>
          </div>

          <!-- contents -->
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabindex="0"
            >
              <h3>
                <span>Mid-level Fullstack Developer</span>
                <span class="company"
                  >&nbsp;&nbsp;@
                  <a class="inline-link" href="https://primesolutions.com.ph/"
                    >Prime Solutions</a
                  >
                </span>
              </h3>
              <p class="range">May 2018 - Present</p>

              <div>
                <ul class="ambag-list">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    dolorem odio aut in assumenda nobis corporis tempora
                    repellat labore excepturi tempore velit perferendis facere.
                  </li>
                  <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reiciendis alias sapiente perferendis aspernatur fuga
                    tenetur, iste possimus et tempore temporibus odio ipsam,
                    blanditiis quis non.
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              aliquam quas tempora porro nulla, error similique illum at ad
              voluptatibus cupiditate officia quaerat provident corrupti
              voluptates, aut et blanditiis saepe asperiores, suscipit deserunt.
              Voluptatum rem explicabo dolorem. Quasi, inventore illum! Est
              explicabo adipisci delectus deleniti obcaecati aliquid voluptatum,
              nam dolore vero fugiat unde minima, id aperiam sequi veritatis vel
              fugit ipsam exercitationem! Maxime et omnis velit officiis porro
              impedit ea, deserunt cumque beatae eos, placeat amet nam
              recusandae fugiat inventore quidem sapiente. Unde, aliquid at
              laborum earum quibusdam molestias possimus fugiat quia numquam
              consequatur accusantium molestiae? Molestiae expedita sunt et!
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-disabled"
              role="tabpanel"
              aria-labelledby="v-pills-disabled-tab"
              tabindex="0"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              aliquam quas tempora porro nulla, error similique illum at ad
              voluptatibus cupiditate officia quaerat provident corrupti
              voluptates, aut et blanditiis saepe asperiores, suscipit deserunt.
              Voluptatum rem explicabo dolorem. Quasi, inventore illum! Est
              explicabo adipisci delectus deleniti obcaecati aliquid voluptatum,
              nam dolore vero fugiat unde minima, id aperiam sequi veritatis vel
              fugit ipsam exercitationem! Maxime et omnis velit officiis porro
              impedit ea, deserunt cumque beatae eos, placeat amet nam
              recusandae fugiat inventore quidem sapiente. Unde, aliquid at
              laborum earum quibusdam molestias possimus fugiat quia numquam
              consequatur accusantium molestiae? Molestiae expedita sunt et!
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
              tabindex="0"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              aliquam quas tempora porro nulla, error similique illum at ad
              voluptatibus cupiditate officia quaerat provident corrupti
              voluptates, aut et blanditiis saepe asperiores, suscipit deserunt.
              Voluptatum rem explicabo dolorem. Quasi, inventore illum! Est
              explicabo adipisci delectus deleniti obcaecati aliquid voluptatum,
              nam dolore vero fugiat unde minima, id aperiam sequi veritatis vel
              fugit ipsam exercitationem! Maxime et omnis velit officiis porro
              impedit ea, deserunt cumque beatae eos, placeat amet nam
              recusandae fugiat inventore quidem sapiente. Unde, aliquid at
              laborum earum quibusdam molestias possimus fugiat quia numquam
              consequatur accusantium molestiae? Molestiae expedita sunt et!
            </div>
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabindex="0"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              aliquam quas tempora porro nulla, error similique illum at ad
              voluptatibus cupiditate officia quaerat provident corrupti
              voluptates, aut et blanditiis saepe asperiores, suscipit deserunt.
              Voluptatum rem explicabo dolorem. Quasi, inventore illum! Est
              explicabo adipisci delectus deleniti obcaecati aliquid voluptatum,
              nam dolore vero fugiat unde minima, id aperiam sequi veritatis vel
              fugit ipsam exercitationem! Maxime et omnis velit officiis porro
              impedit ea, deserunt cumque beatae eos, placeat amet nam
              recusandae fugiat inventore quidem sapiente. Unde, aliquid at
              laborum earum quibusdam molestias possimus fugiat quia numquam
              consequatur accusantium molestiae? Molestiae expedita sunt et!
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script setup>
import LeftIconsList from "../components/LeftIconsList.vue";
import RightEmail from "../components/RightEmail.vue";

import { ref } from "vue";

const is_loading = ref(true);
setTimeout(() => {
  is_loading.value = false;
}, 6000);
</script>