<!-- Componente Footer -->
<script setup>
const props = defineProps(['footer']);
</script>
<template>
  <footer>
    <!--  Content Footer -->
    <div class="bg-blue text-white">
      <div class="container mx-auto flex flex-col gap-12 px-5 md:px-0 py-10">
        <div class="flex flex-col gap-12 md:flex-row md:gap-8">
          <!-- Col1 -->
          <div class="flex flex-col gap-6 md:w-6/12">
            <div
              class="logo relative z-40 text-3xl cursor-pointer font-bold text-white"
            >
              About: Gabriel Stroligo
            </div>
            <div>
              <p class="text-white">
                I specialise in web development with over 15 years' experience,
                focusing on creating innovative, high-impact digital solutions.
                My expertise includes JavaScript, NUXT/Vue.js, Tailwind, CSS and
                WordPress, allowing me to create agile, responsive and visually
                appealing interfaces. I'm committed to continuous learning and
                keeping up to date with industry best practices and trends.
              </p>
              <p class="text-white">
                I'm passionate about working on projects that have a positive
                social impact, using clean and efficient code to deliver real
                value to users.
              </p>
              <p class="text-white pb-0">
                My academic background includes courses in Web Development from
                Ironhack and Full-Stack Development from FLAG.PT in Portugal, as
                well as a Bachelor's Degree in Arts and a Master's Degree in
                Computational Modelling from the Federal University of
                Tocantins.
              </p>
            </div>
          </div>
          <!-- Col 2 -->
          <div
            class="flex justify-between gap-6 md:w-6/12 md:justify-normal md:gap-16"
          >
            <div class="flex w-full flex-col gap-8">
              <!-- Redes Sociais -->
              <div class="flex flex-col justify-end gap-4">
                <div
                  class="font-slab text-sm font-bold md:text-base text-right"
                >
                  Access to other things related
                </div>
                <div class="flex gap-4 justify-end text-blue-dark">
                  <a
                    href="https://www.linkedin.com/in/gabrielstroligo/"
                    target="_blank"
                  >
                    <uiIcon custom="primary"> <SvgoLinkedin /></uiIcon>
                  </a>
                  <a
                    href="https://github.com/stroligo/assessment"
                    target="_blank"
                  >
                    <uiIcon custom="primary">
                      <SvgoGithub />
                    </uiIcon>
                  </a>
                  <a
                    href="https://assessment-stroligo.vercel.app/"
                    target="_blank"
                  >
                    <uiIcon custom="primary">
                      <SvgoVercel class="-translate-y-0.5" />
                    </uiIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  CopyRight Footer -->
    <div class="bg-blue-70 text-white">
      <div class="container mx-auto px-5 py-2.5 md:px-0">
        <div
          class="flex flex-wrap justify-center gap-4 md:flex-row md:justify-between"
        >
          <div>2024© Assessment for PrimeIT</div>

          <div>
            Design and creative code:
            <a class="https://github.com/stroligo"
              ><button class="font-bold hover:text-orange">
                Gabriel Stroligo
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      conteudo: [
        'item1',
        'item2',
        'item3',
        'item4',
        'item1',
        'item2',
        'item3',
        'item4',
      ],
    };
  },
  computed: {
    baseURL() {
      return this.$config.public.baseUrl;
    },
  },
};
</script>
<style>
.menu_footer {
  @apply flex flex-col justify-between font-slab font-bold md:text-xl;
  li {
    @apply cursor-pointer hover:text-orange;
  }
}
.menu_footer2 {
  @apply flex flex-col gap-4 font-slab text-sm md:text-xl;
  li {
    @apply cursor-pointer hover:text-yellow;
  }
}
</style>
