<template>
  <component :is="type" :class="['slide-component', variation]">
    <div class="container">
      <div class="slide"><slot name="title" /> <slot name="content" /> <slot /></div>
    </div>
  </component>
</template>

<script>
/**
 * Apresenta um slide padrão
 */
export default {
  /**
   * Component names should be short, pronounceable and Capitalized.
   */
  name: "Slide",
  /**
   * Components in the system are labelled with status labels that reflect their
   * state of completion. See example below. All available statuses are:
   *
   * STATUS:        COLOR:     DESCRIPTION:
   *
   * deprecated     Red        Component is deprecated
   * prototype      Blue       Prototype, do not implement!
   * under-review   Yellow     Component is currently being reviewed
   * ready          Green      Ready to be used
   */
  status: "prototype",
  /**
   * Release indicates when this component was added into the system.
   * (in which design system version)
   */
  release: "1.5.0",
  /**
   * Prop definitions should be as detailed as possible, specifying at least
   * type(s). See examples below:
   */
  props: {
    /**
     * The html element name used for the container of Slide component.
     */
    type: {
      type: String,
      default: "div",
    },
    /**
     * Style variation to give additional meaning.
     * `default, strong, positive, negative`
     */
    variation: {
      type: String,
      default: "default",
      validator: value => {
        return value.match(/(default|strong|positive|negative)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
/**
 * Styles in a top-level App component and in layout components may be global,
 * but all other components should always be scoped (using either scoped
 * attribute or class based scoping).
 */
.slide-component {
  @include reset;
  @include stack-space($space-m);

  color: set-text-color($color-white, $color-white);
  background: $color-green-0;
  background: linear-gradient(-45deg, $color-green-0, $color-green-1 100%);

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .slide {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 120px 100px;
  }

  h2 {
    margin-bottom: 60px;
  }

  p,
  h2 {
    color: $color-white;
    text-align: center;
    display: block;
    width: 100%;
  }

  .button {
    color: $color_green_0;
    background-color: $color_green_2;
    margin-top: 40px;
  }

  @media #{$media-query-m} {
    @include stack-space($space-xl);
  }
}
</style>

<docs>
  ```jsx
  <Slide>
    <template v-slot:title>
      <Heading level="h2">Slide Title</Heading>
    </template>

    <template v-slot:content>
      <Paragraph variation="intro">
        Slide text content, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim totam quidem at, modi voluptatem recusandae asperiores debitis placeat quibusdam, quo eum quam ipsam eos laudantium dolor, harum quia quis aut!
      </Paragraph>
    </template>
    <Button type="a" href="https://docs.google.com/presentation/d/1bZ06JHLoOoTwlfvcT6Dpwxge_rTVB8HnkQ_senAyZwM/edit#slide=id.g6c6532119b_0_75" target="_blank" variation="primary" size="large">Link</Button>
  </Slide>
  ```
</docs>
