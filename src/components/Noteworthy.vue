<template>
  <div class="fng-noteworthy">
    <h2 class="fng-noteworthy-title">Other Noteworthy Projects</h2>
    <a href="javascript:void(0)" class="fng-noteworthy-archive"
      >view all archives</a
    >

    <ul class="fng-noteworthy-grid">
      <li v-for="(a, i) in noteworthyProjectList" :key="i">
        <div class="fng-noteworthy-grid-inner">
          <div class="w-100">
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
                >{{ a.title }}</a
              >
            </h3>
            <div class="fng-noteworthy-grid-inner-description">
              <p>
                {{ a.description }}
              </p>
            </div>
          </div>
          <footer>
            <ul class="fng-noteworthy-grid-inner-tech-list">
              <li v-for="(item, index) in a.techStack">{{ item }}</li>
            </ul>
          </footer>
        </div>
      </li>
    </ul>
    <div class="mt-5">
      <button class="btn-default">See More</button>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";

const noteworthyProjectList = ref([
  {
    title: "Perya Color Game",
    description:
      "A Software Application that is a replica of the popular game Perya Color Game. It is being used by my client which is a wedding host for entertainment purposes.",
    techStack: ["Electron", "Vanillajs", "HTML", "CSS"],
    link: "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c",
  },
  {
    title: "Pocketteams",
    description:
      "A Project Management Web Application that is being used by the company exclusively, it helps their team to manage their projects efficiently.",
    techStack: ["Nodejs", "Expressjs", "MongoDB", "Reactjs"],
    link: "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c",
  },
  {
    title: "Flutter Task Listing Mobile App",
    description:
      "A Mobile Application for listing task to be done. A simple app that helps me to learn Flutter and Dart.",
    techStack: ["Dart", "Flutter"],
    link: "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c",
  },
  {
    title: "Taylor Swift Random Quotes Generator",
    description:
      "A Web Application that generates random quotes from Taylor Swift. It uses an external API to get the quotes and display it to the user.",
    techStack: ["Expressjs", "Vuejs", "CSS"],
    link: "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c",
  },
  {
    title: "Library Management System",
    description:
      "Using Vanilla PHP, I created a simple Library Management System that helps the librarian to manage the books and the students to borrow books.",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "XAMPP"],
    link: "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c",
  },
  {
    title: "Pikaloons Game",
    description:
      "A simple game that I created using Visual Basic .NET, its a game that is being played by my classmates during our free time.",
    techStack: ["VB.NET", "WinForms"],
    link: "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c",
  },
]);
</script>
