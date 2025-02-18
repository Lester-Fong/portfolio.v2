<template>
  <header
    ref="header"
    class="d-flex align-items-center justify-content-between py-3 px-5"
  >
    <router-link to="/" class="logo">
      <img
        src="/src/assets/Logo-Lester.png"
        alt="Lester Fong Logo"
        width="80"
      />
    </router-link>
    <div class="d-flex align-items-center">
      <ol class="d-flex align-items-center fng-links">
        <li><a href="#about" class="fng-link">About</a></li>
        <li>
          <a href="#experience" class="fng-link">Experience</a>
        </li>
        <li>
          <a href="#work" class="fng-link">Work</a>
        </li>
        <li>
          <a href="#contact" class="fng-link">Contact</a>
        </li>
      </ol>
      <div>
        <a
          href="/src/assets/lester-fong-resume.pdf"
          target="_blank"
          class="fng-resumeBtn"
          >Resume</a
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

let lastScrollTop = 0;
const header = ref(null);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.value.classList.add("hidden");
  } else {
    header.value.classList.remove("hidden");
  }

  if (scrollTop <= 0) {
    header.value.classList.add("box-shadow-none");
  } else {
    header.value.classList.remove("box-shadow-none");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>