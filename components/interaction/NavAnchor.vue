<template>
  <div class="absolute right-5 top-0 flex h-full justify-end">
    <div class="relative">
      <nav>
        <button @click="scrollTo('parte1')" class="botao">
          <span class="texto-botao">Incidência</span>
        </button>
        <button @click="scrollTo('parte2')" class="botao">
          <span class="texto-botao">Mortalidade</span>
        </button>
        <button @click="scrollTo('parte3')" class="botao">
          <span class="texto-botao">Tratamento</span>
        </button>
        <button @click="scrollTo('parte4')" class="botao">
          <span class="texto-botao">Monitoramento</span>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(id) {
      const elemento = document.getElementById(id);
      const rect = elemento.getBoundingClientRect();
      const offset = rect.top + window.scrollY - 150;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
nav {
  @apply sticky right-0 top-[40vh] z-50 flex flex-col items-end justify-end;
}

.botao {
  @apply flex scale-x-[.3] scale-y-[.4] flex-row items-center justify-center gap-2 rounded-full bg-yellow px-5 py-2 font-bold text-yellow opacity-100 transition-all duration-300 ease-in-out hover:bg-orange hover:text-white active:bg-yellow disabled:pointer-events-none disabled:text-white disabled:opacity-40;
  opacity: 1;

  transform-origin: right center;
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.botao:hover {
  transform: scale(1);
}

.texto-botao {
  @apply w-20 opacity-0 transition-all duration-300 ease-in-out;
}

.botao:hover .texto-botao {
  @apply w-fit opacity-100;
}
</style>
