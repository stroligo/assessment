<template>
  <div class="flex items-center gap-4">
    <uiIcon custom="primary" @click="go('<', $event)">
      <SvgoAngleleft />
    </uiIcon>
    <!--  <span class="text-blue-dark"> {{ currentSlide }} / {{ totalSlides }} </span> -->
    <uiIcon custom="primary" @click="go('>', $event)">
      <SvgoAngleright />
    </uiIcon>
  </div>
</template>

<script>
export default {
  props: {
    splideInstance: {
      type: Object,
      default: null,
    },
    currentSlide: {
      type: Number,
      required: true,
    },
    totalSlides: {
      type: Number,
      required: true,
    },
  },
  methods: {
    go(direction, event) {
      if (event) {
        event.preventDefault();
      }
      if (this.splideInstance) {
        if (direction === '<') {
          this.splideInstance.go('<');
        } else if (direction === '>') {
          this.splideInstance.go('>');
        }
      }
    },
  },
};
</script>
