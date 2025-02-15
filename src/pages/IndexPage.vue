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
    <AboutMe />

    <!------------- Where I've Worked --------------->
    <Works />

    <!------------- Projects --------------->
    <Projects />

    <!-- Other Noteworthy Projects -->
    <div class="fng-noteworthy">
      <h2 class="fng-noteworthy-title">Other Noteworthy Projects</h2>
      <a href="javascript:void(0)" class="fng-noteworthy-archive"
        >view all archives</a
      >

      <ul class="fng-noteworthy-grid">
        <li v-for="i in 6" :key="i">
          <div class="fng-noteworthy-grid-inner">
            <header class="w-100">
              <div class="fng-noteworthy-grid-inner-top">
                <div class="fng-noteworthy-grid-inner-top-folder">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-folder"
                  >
                    <title>Folder</title>
                    <path
                      d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                    ></path>
                  </svg>
                </div>
                <div class="fng-noteworthy-grid-inner-top-links">
                  <a
                    href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"
                    aria-label="External Link"
                    class="external"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-external-link"
                    >
                      <title>External Link</title>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line></svg
                  ></a>
                </div>
              </div>
              <h3 class="fng-noteworthy-grid-inner-title">
                <a
                  href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Sample Project 1</a
                >
              </h3>
              <div class="fng-noteworthy-grid-inner-description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam aut minus distinctio nobis illo cumque suscipit unde
                  similique temporery.
                </p>
              </div>
            </header>
            <footer>
              <ul class="fng-noteworthy-grid-inner-tech-list">
                <li>Vuejs</li>
                <li>Laravel</li>
                <li>Graphql</li>
              </ul>
            </footer>
          </div>
        </li>
      </ul>
      <div class="mt-5">
        <button class="btn-default">See More</button>
      </div>
    </div>

    <!-------- Contact --------->
    <section class="fng-contact"></section>
  </main>
</template>


<script setup>
import LeftIconsList from "../components/LeftIconsList.vue";
import RightEmail from "../components/RightEmail.vue";
import Works from "@/components/Works.vue";
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";

import { ref } from "vue";

const is_loading = ref(true);
setTimeout(() => {
  is_loading.value = false;
}, 6000);
</script>