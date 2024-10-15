<template>
  <div
    class="left-0 top-0 h-full w-full md:absolute md:ml-20 md:w-fit"
    :class="{ 'scroll-on': isScrolled, 'scroll-up': isScrollUp && !isNearTop }"
  >
    <ul class="barra">
      <!-- Whatsapp -->
      <a :href="`https://wa.me/?text=${baseURL}+Desiderata`" target="_blank">
        <li>
          <SvgoSocialwhatsapp class="text-yellow" />
        </li>
      </a>
      <!-- Telegram -->
      <a
        :href="`https://telegram.me/share/url?url=${baseURL}&text=Desiderata`"
        target="_blank"
      >
        <li>
          <SvgoSocialtelegram class="text-yellow" />
        </li>
      </a>
      <!-- Facebook -->
      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=${baseURL}`"
        target="_blank"
      >
        <li>
          <SvgoSocialfacebook class="text-yellow" />
        </li>
      </a>
      <!-- Linkedin -->
      <a
        :href="`https://www.linkedin.com/shareArticle?url=${baseURL}&title=Desiderata`"
        target="_blank"
        ><li>
          <SvgoSociallinkedin class="text-yellow" />
        </li>
      </a>
      <!-- X -->
      <a
        :href="`https://twitter.com/intent/tweet?url=${baseURL}&text=Desiderata`"
        target="_blank"
      >
        <li><SvgoSocialxTwitter class="text-yellow" /></li>
      </a>
      <!-- Copiar link -->
      <li @click="copiarLink(baseURL)" class="cursor-pointer">
        <SvgoSocialcopy class="text-yellow" />
      </li>
      <div class="texto">
        <div class="girar">Compartilhar</div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isScrollUp: false,
      isNearTop: false,
      scrollPos: 0,
    };
  },
  mounted() {
    this.scrollPos = window.scrollY;
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    copiarLink(url) {
      const inputTemporario = document.createElement('input');
      inputTemporario.value = url;
      document.body.appendChild(inputTemporario);
      inputTemporario.select();
      document.execCommand('copy');
      document.body.removeChild(inputTemporario);
      alert('Link copiado para a área de transferência!');
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 100;
      this.isScrollUp = window.scrollY < this.scrollPos;
      this.isNearTop = window.scrollY < 600; // Define a threshold to consider as near the top
      this.scrollPos = window.scrollY;
      /*    console.log('Scroll position:', window.scrollY); */
    },
  },
  computed: {
    baseURL() {
      return this.$config.public.baseURL;
    },
  },
};
</script>

<style scoped>
.scroll-on .barra {
  @apply transition-all duration-1000 ease-in-out md:mt-0;
}
.scroll-up .barra {
  @apply transition-all duration-500 ease-in-out md:pt-[180px];
}
.barra {
  @apply top-0 z-20 flex flex-row justify-center gap-4 text-2xl md:sticky md:flex-col md:px-0 md:py-4;
  li {
    @apply cursor-pointer transition-all duration-300 ease-in-out hover:scale-110;
  }
}
.texto {
  @apply relative flex w-fit flex-col items-end justify-end md:h-[94px] md:w-6;
}
.girar {
  @apply text-sm text-gray md:origin-left md:translate-x-[86%] md:rotate-[270deg];
}
</style>
