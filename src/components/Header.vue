<template>
  <header class="d-flex align-items-center justify-content-between py-3 px-5">
    <router-link to="/" class="logo">
      <img
        src="/public/assets/Logo Lester.png"
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
        <button class="fng-resumeBtn">Resume</button>
      </div>
    </div>
  </header>
</template>