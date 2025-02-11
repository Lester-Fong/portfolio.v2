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
    </div>
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