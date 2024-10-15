<template>
  <div class="sticky right-0 top-[calc(100vh-92px)] z-50 flex justify-center">
    <div
      class="sombra relative flex h-[92px] w-fit items-center justify-center gap-8 rounded-t-3xl bg-white px-8 py-6"
    >
      <div class="flex items-center justify-center gap-2">
        <div class="text-gray">Exibir mapas por:</div>
        <!--  UiButtonToogle -->
        <UiButtonToogle
          :buttons="[
            { text: 'Região', active: true },
            { text: 'UF', active: false },
          ]"
        />
      </div>
      <div class="flex items-center justify-center gap-4">
        <uiButton text="Baixar panorama" link="#" custom="iconleft">
          <SvgoPdf class="text-2xl" />
        </uiButton>

        <uiIcon custom="primary" link="#">
          <SvgoShare />
        </uiIcon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.sombra {
  box-shadow: 0px -8px 32px -20px rgba(3, 29, 64, 0.441);
}
</style>
