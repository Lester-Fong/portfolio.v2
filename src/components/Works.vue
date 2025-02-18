<template>
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
            <p class="range">April 2022 - Present</p>

            <div>
              <ul class="ambag-list">
                <li>
                  Developed a custom Content Management System (CMS) and an
                  Ecommerce CMS from scratch, that streamline the process of
                  building and deploying client projects.
                </li>
                <li>
                  Provide leadership within engineering and coding department
                  through close collaboration, knowledge shares, and mentorship.
                </li>
                <li>
                  Conducted code reviews and provided constructive feedback to
                  ensure code quality and adherence to coding standards.
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
            <h3>
              <span>Web Developer</span>
              <span class="company"
                >&nbsp;&nbsp;@
                <a class="inline-link" href="https://www.switchconnect.co/"
                  >Switch Connect</a
                >
              </span>
            </h3>
            <p class="range">April 2022 - Present</p>

            <div>
              <ul class="ambag-list">
                <li>
                  Deliver high-quality, robust production code for a diverse
                  array of projects for clients in various industries at
                  Australia.
                </li>
                <li>
                  Created and implemented scalable API endpoints for the
                  projects of the company.
                </li>
                <li>
                  Optimized application performance on both the server and
                  client-side.
                </li>
                <li>
                  Communicated with clients to understand their needs and
                  convert their requirements into technical specifications.
                </li>
              </ul>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-disabled"
            role="tabpanel"
            aria-labelledby="v-pills-disabled-tab"
            tabindex="0"
          >
            <h3>
              <span>Associate Software Engineer</span>
              <span class="company"
                >&nbsp;&nbsp;@
                <a class="inline-link" href="https://www.pocketdevs.ph/"
                  >PocketDevs</a
                >
              </span>
            </h3>
            <p class="range">July 2021 - March 2022</p>

            <div>
              <ul class="ambag-list">
                <li>
                  Developed a Project Management Web Application to be used by
                  the company exclusively, it helps their team to manage their
                  projects efficiently.
                </li>
                <li>
                  Applied as Associate Software Developer at Pocketdevs in my
                  Sophomore Year of College. I learned a lot from this
                  experience and absorbed everything I can learn such as
                  Teamwork, Agile, Git, Collaboration with Senior Devs and more.
                </li>
              </ul>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
            tabindex="0"
          >
            <h3>
              <span>Mobile Developer</span>
              <span class="company"
                >&nbsp;&nbsp;@
                <a class="inline-link" href="https://primesolutions.com.ph/"
                  >LaGona</a
                >
              </span>
            </h3>
            <p class="range">Nov 2024 - Feb 2025</p>

            <div>
              <ul class="ambag-list">
                <li>
                  Developed a mobile application for the company which is a
                  Delivery Management System that helps merchant, drivers, and
                  customers to manage their deliveries.
                </li>
                <li>
                  Work alongside CEO, investors to help the research,
                  development, and architecture of technical solutions to
                  fulfill business requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>