<template>
  <!-- Você também pode se interessar por -->
  <section>
    <!--  SVG Curva -->
    <div>
      <!--  SVG Curva Desktop -->
      <div class="hidden w-full md:flex">
        <svg
          width="100%"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="translate-y-[1px] fill-[#dcf2fe]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 48C227.773 16.7871 469.574 0 720 0C970.426 0 1212.23 16.7871 1440 48L0 48Z"
          />
        </svg>
      </div>
      <!--  SVG Curva Mobile -->
      <div class="-mt-[1px] flex h-full w-full translate-y-[1px] md:hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 360 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-[#dcf2fe]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 56C56.9433 19.585 117.394 0 180 0C242.606 0 303.057 19.585 360 56H0Z"
          />
        </svg>
      </div>
    </div>
    <!--  Conteudo -->
    <div class="sectionBluetoWhite">
      <div class="flex flex-col">
        <slot></slot>
      </div>
    </div>
  </section>
</template>
<script></script>
<style scoped>
.sectionBluetoWhite {
  @apply relative z-0;
  background: linear-gradient(180deg, #dcf2fe 0%, #fff 100%);
}
</style>
