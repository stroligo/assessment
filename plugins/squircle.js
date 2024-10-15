// plugins/squircle.js
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const config = useRuntimeConfig();
    const scriptPath = `${config.public.baseUrl}squircle.js`;
    // Adiciona o Paint Worklet se disponível
    if (typeof CSS !== 'undefined' && CSS.paintWorklet) {
      CSS.paintWorklet.addModule(scriptPath);
    } else {
      console.warn('CSS.paintWorklet is not supported in this browser.');
    }
  });
});
