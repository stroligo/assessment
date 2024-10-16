<!-- component layoutNav -->
<template>
  <div>
    <nav class="fixed top-0 z-50 w-full md:bg-blue">
      <!-- Barra topo -->
      <div
        class="relative z-20 h-16 w-full bg-blue shadow-default md:h-[88px] md:bg-transparent"
      >
        <div
          class="container relative z-50 mx-auto flex h-full items-center justify-between gap-6 px-6 md:flex-row md:px-0"
        >
          <a href="/">
            <div class="logo relative z-40 cursor-pointer font-bold text-white">
              PrimeIT | JD e Assessment
            </div>
          </a>
          <!-- Desktop Menu -->
          <div class="flex gap-8">
            <div>
              <ul class="menutop">
                <a href="https://github.com/stroligo/assessment"
                  ><li>Github</li></a
                >
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
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
