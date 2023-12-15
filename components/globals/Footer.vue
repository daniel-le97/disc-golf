<script lang="ts" setup>
import SignUpModal from './SignUpModal.vue';


</script>

<template>
  <footer class="bg-gray-100  ">




 <!-- CALL TO ACTION -->
    <div class="bg-zinc-800 relative pt-32 lg:pt-16 ">
        <div class="absolute top-0 lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8   ">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                <span class="block">
                    Want to be be part of the community ?
                </span>
                <span class="block text-emerald-500">
                    Sign up to help contribute!
                </span>
            </h2>
            <div class="mt-5 lg:mt-0 lg:flex-shrink-0">
                <div class=" inline-flex rounded-md shadow">
                  <SignUpModal/>
                </div>
            </div>
        </div>
        <div class="bottom-0  bg-cover left-0 w-full h-44  bg-emerald-400 clip-triangle bg-[url('https://images.unsplash.com/photo-1569075319321-f73e651c2c7a?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          
        </div>
    </div>
<!-- ~ CALL TO ACTION -->













    <div class="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div class="flex justify-center text-emerald-600 sm:justify-start items-center font-bold text-3xl space-x-4B">
          <Icon name="icon-park-twotone:record-disc" class="text-4xl"/>
          <p>LOGO</p>
          </div>

          <p class="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
            cum itaque neque.
          </p>

          <ul class="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                class=" "
              >
              <Icon name="logos:facebook" class="text-3xl hover:-translate-y-1.5 transition-transform duration-150" />
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                class=""
              >
             <Icon name="skill-icons:instagram" class="text-3xl hover:-translate-y-1.5 transition-transform duration-150" />
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                class=" "
              >
              <Icon name="line-md:twitter-x" class="text-3xl hover:-translate-y-1.5 transition-transform duration-150 text-black" />
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                class=""
              >
                   <Icon name="logos:youtube-icon" class="text-3xl hover:-translate-y-1.5 transition-transform duration-150" />
              </a>
            </li>

          
          </ul>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
          <div class="text-center sm:text-left">
            <p class="text-lg font-extrabold text-gray-900">
              About Us
            </p>

            <ul class="mt-8 space-y-4 text-sm">
              <li>
                <a class="" href="/">
                  Company History
                </a>
              </li>

              <li>
                <a class="" href="/">
                  Meet the Team
                </a>
              </li>

              <li>
                <a class="" href="/">
                  Employee Handbook
                </a>
              </li>

              <li>
                <a class="" href="/"> Careers </a>
              </li>
            </ul>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-lg font-extrabold text-gray-900">
              Our Services
            </p>

            <ul class="mt-8 space-y-4 text-sm">
              <li>
                <a class="" href="/">
                  Web Development
                </a>
              </li>

              <li>
                <a class="" href="/"> Web Design </a>
              </li>

              <li>
                <a class="" href="/"> Marketing </a>
              </li>

              <li>
                <a class="" href="/"> Google Ads </a>
              </li>
            </ul>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-lg font-extrabold text-gray-900">
              Helpful Links
            </p>

            <ul class="mt-8 space-y-4 text-sm">
              <li>
                <a class="" href="/"> FAQs </a>
              </li>

              <li>
                <a class="" href="/"> Support </a>
              </li>

            
            </ul>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-lg font-extrabold text-gray-900">
              Contact Us
            </p>

            <ul class="mt-8 space-y-4 text-sm">
              <li>
                <a
                  class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span class="flex-1 text-gray-700">john@doe.com</span>
                </a>
              </li>

              <li>
                <a
                  class="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span class="flex-1 text-gray-700">0123456789</span>
                </a>
              </li>

              <li
                class="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <address class="-mt-0.5 flex-1 not-italic text-gray-700">
                  213 Lane, London, United Kingdom
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-100 pt-6">
        <div class="text-center sm:flex sm:justify-between sm:text-left">
          <p class="text-sm text-gray-500">
            <span class="block sm:inline">All rights reserved.</span>

            <a
              class="inline-block text-emerald-600 underline transition hover:text-emerald-600/75"
              href="/"
            >
              Terms & Conditions
            </a>

            <span>&middot;</span>

            <a
              class="inline-block text-emerald-600 underline transition hover:text-emerald-600/75"
              href="/"
            >
              Privacy Policy
            </a>
          </p>

          <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            &copy; 2022 Company Name
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.clip-triangle{
  clip-path: polygon(100% 40%, 0 100%, 100% 100%);
}

a{
  position: relative;
}

a:before{
  @apply bg-emerald-800 absolute w-0 h-[2px] -bottom-[6px] transition-all duration-500 ease-in-out; 
  content: "";
 
}

a:hover:before{
  @apply w-full 
 
}
a:hover{
  @apply text-emerald-500  transition-colors duration-300;
}
</style>
