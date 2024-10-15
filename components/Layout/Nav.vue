<!-- component layoutNav -->
<template>
  <div
    :class="{ 'scroll-on': isScrolled, 'scroll-up': isScrollUp }"
    @click="handleOutsideClick"
  >
    <nav class="fixed top-0 z-50 w-full md:bg-blue">
      <!-- Barra topo -->
      <div
        class="relative z-20 h-16 w-full bg-blue shadow-default md:h-[88px] md:bg-transparent"
      >
        <div
          class="container relative z-50 mx-auto flex h-full items-center justify-between gap-6 px-6 md:flex-row md:px-0"
        >
          <!-- Logo -->
          <a href="/">
            <div class="logo relative z-40 cursor-pointer">
              <SvgoPanorama
                class="w-[173.5px] md:w-[230px]"
                :fontControlled="false"
                filled
              />
            </div>
          </a>
          <!-- Desktop Menu -->
          <div class="flex gap-8">
            <div class="hidden md:flex">
              <ul class="menutop">
                <a href="#"><li>Panorama Brasil</li></a>
                <a href="#"><li>Metodologia</li></a>
                <a href="atualizacoes"><li>Atualizações</li></a>
              </ul>
            </div>
            <!-- Botão Search -->
            <div
              class="hidden cursor-pointer items-center text-2xl text-white hover:text-orange md:flex"
              @click="toggleSearch"
            >
              <SvgoSearch />
            </div>
          </div>

          <!-- Botão Responsivo -->
          <div
            class="flex rotate-180 items-center text-3xl text-white md:hidden"
            @click="toggleMenu"
          >
            <SvgoMenu v-if="!menuOpen" />
            <SvgoClose v-if="menuOpen" />
          </div>
        </div>
      </div>

      <!-- Barra Search -->
      <div
        class="absolute left-0 top-0 z-40 h-[60px] w-full bg-blue transition-all duration-300 md:h-full"
        :class="{
          'opacity-1 h-full': searchOpen,
          'invisible h-0 opacity-0': !searchOpen,
        }"
        v-show="searchOpen || searchOpen === false"
      >
        <div class="container mx-auto flex h-full items-center gap-6 px-5 md:px-0">
          <!-- InputSearch -->
          <div class="relative w-full">
            <div class="absolute left-0 top-1/2 -translate-y-1/2 text-lg text-white">
              <SvgoSearch />
            </div>
            <input type="search" placeholder="Buscar por..." class="inputnavbar" />
          </div>
          <!-- Controller -->
          <div class="flex gap-2">
            <!--  Botao de buscar -->
            <UiButton class="large hidden md:flex">Buscar</UiButton>
            <!-- Botao de Fechar -->
            <uiIcon
              custom="secondary large   text-base"
              link="#"
              @click="toggleSearch"
              class="hidden md:flex"
            >
              <SvgoClose />
            </uiIcon>
            <uiIcon
              custom="secondary small  text-base"
              link="#"
              @click="toggleSearch"
              class="flex md:hidden"
            >
              <SvgoClose />
            </uiIcon>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url_base: '',
      isScrolled: false,
      isScrollUp: false,
      menuOpen: false,
      searchOpen: false,
      isSubMenuVisible: {
        sobre: false,
        trabalho: false,
      },
      scrollPos: 0,
    };
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
    toggleMenu() {
      console.log('Botão de hambúrguer clicado!');
      this.menuOpen = !this.menuOpen;
    },
    toggleSearch() {
      console.log('Botão de search clicado!');
      this.searchOpen = !this.searchOpen;
    },
    toggleSubMenu(subMenu) {
      console.log('Botão de submenu clicado!');
      Object.keys(this.isSubMenuVisible).forEach((key) => {
        if (key !== subMenu) {
          this.isSubMenuVisible[key] = false;
        }
      });
      this.isSubMenuVisible[subMenu] = !this.isSubMenuVisible[subMenu];
    },
    closeSubMenus() {
      this.isSubMenuVisible.sobre = false;
      this.isSubMenuVisible.trabalho = false;
    },

    handleScroll() {
      this.isScrolled = window.scrollY > 100;
      this.isScrollUp = window.scrollY < this.scrollPos;
      this.scrollPos = window.scrollY;
    },
    checkScreenWidth() {
      const screenWidth = window.innerWidth;
      this.menuOpen = screenWidth >= 768;
    },
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.closeSubMenus();
      }
    },
  },
  mounted() {
    this.scrollPos = window.scrollY;
    this.url_base = window.location.href;
    window.addEventListener('scroll', this.handleScroll);
    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth);
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.checkScreenWidth);
    document.removeEventListener('click', this.handleOutsideClick);
  },
};
</script>

<style scoped>
.scroll-on nav {
  @apply -translate-y-[148px] transition-all duration-1000 ease-in-out;
}
.scroll-up nav {
  @apply translate-y-0 transition-all duration-500 ease-in-out;
}
nav {
  @apply translate-y-0 transition-all duration-500 ease-in-out;
  .logo {
    @apply flex flex-col items-center justify-center;
  }
  .menutop {
    @apply flex cursor-pointer items-center font-semibold md:gap-2 md:text-sm lg:gap-10 lg:text-base;
    li {
      @apply border-white py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:text-orange active:text-blue-dark;
    }
  }

  .menu {
    @apply flex h-full w-full flex-col bg-blue py-10 md:flex md:flex-row md:items-center md:justify-between md:gap-4 md:bg-transparent md:py-0;
    li:not(.language) {
      @apply relative cursor-pointer select-none whitespace-nowrap font-bold text-white hover:text-blue-dark active:text-blue-dark md:text-blue md:hover:text-orange;
    }
    .nivel1 {
      @apply p-5 text-xl md:p-0 md:text-base;
      &.withsubmenu {
        @apply flex items-center gap-2;
      }
      &.withsubmenu:hover:not(.active),
      &.withsubmenu:active {
        @apply text-white md:text-orange;
      }
      &.active {
        @apply text-blue-dark;
      }
    }
    .nivel2 {
      @apply flex w-full flex-col gap-10 overflow-clip whitespace-nowrap bg-blue-70 px-10 py-8 transition-all duration-500 ease-in-out md:absolute md:top-10 md:mt-2 md:w-max md:justify-between md:gap-8 md:rounded-3xl md:bg-white md:px-8 md:py-10;
      &.aberto {
        @apply flex h-fit  opacity-100;
      }
      &.fechado {
        @apply invisible h-0 py-0 opacity-0  md:h-fit  md:py-10;
      }
      &.duascolunas {
        @apply md:flex-row md:gap-20;
      }
      .group {
        @apply flex flex-col gap-10 md:gap-8;
      }
      .title {
        @apply -mb-6 cursor-default text-sm font-normal text-blue-light md:-mb-4 md:text-gray;
      }
    }
  }
}
.inputnavbar {
  @apply w-full border-none  bg-transparent py-1 pl-6 leading-3 text-white placeholder:text-white focus:outline-none focus:ring-0 md:py-4;
  border-bottom: 1px solid #fff;
}
</style>
