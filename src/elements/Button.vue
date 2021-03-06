<template>
  <component :is="type" :href="href" :type="submit" :class="['button', size, state, variation]">
    <slot />
  </component>
</template>

<script>
/**
 * Buttons are generally used for interface actions. Suitable for all-purpose use.
 * Defaults to appearance that has white background with grey border.
 * Primary style should be used only once per view for main call-to-action.
 */
export default {
  name: "Button",
  status: "prototype",
  release: "3.5.0",
  props: {
    /**
     * The html element used for the button.
     * `button, a`
     */
    type: {
      type: String,
      default: "button",
      validator: value => {
        return value.match(/(button|a)/)
      },
    },
    /**
     * The size of the button. Defaults to medium.
     * `small, medium, large`
     */
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return value.match(/(small|medium|large)/)
      },
    },
    /**
     * When setting the button’s type to a link, use this option to give a href.
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * Set the button’s type to “submit”.
     */
    submit: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(null|submit)/)
      },
    },
    /**
     * Manually trigger various states of the button.
     * `hover, active, focus`
     */
    state: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(hover|active|focus)/)
      },
    },
    /**
     * Style variation to give additional meaning.
     * `primary, secondary`
     */
    variation: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(primary|secondary)/)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  @include reset;
  @include stack-space($space-m);
  @include inline-space($space-xs);
  will-change: transform;
  transition: all 0.2s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: $weight-semi-bold;
  font-size: $size-m;
  font-family: $font-text;
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  box-shadow: inset 0 0 0 2px $color-bleu-de-france;
  border-radius: $radius-button;
  background: transparent;
  color: $color-bleu-de-france;
  min-width: 200px;
  text-align: center;
  padding: 0 50px;
  display: inline-block;
  cursor: pointer;
  &:hover,
  &.hover {
    color: $color-white;
    background: $color-bleu-de-france;
    box-shadow: $shadow-s;
  }
  &:active,
  &.active {
    transition: none;
    background: $color-bleu-de-france-dark;
    box-shadow: none;
    color: $color-white;
    box-shadow: $shadow-m;
  }

  &:focus,
  &.focus {
    background: $color-bleu-de-france-darker;
    color: $color-white;
    outline: 0;
    box-shadow: $shadow-m;
  }

  // For icons inside buttons
  .icon {
    float: right;
    margin: -#{$space-xs} -#{$space-xs} -#{$space-s} $space-xs/2;
    color: $color-bleu-de-france;
  }

  // Various button sizes
  &.large {
    @include inset-squish-space($space-s);
    font-size: $size-l;
  }
  &.medium {
    @include inset-squish-space($space-s);
    font-size: $size-m;
    min-width: 150px;
  }
  &.small {
    @include inset-squish-space($space-xs);
    font-size: $size-s;
    min-width: 50px;
  }

  // Primary button
  &.primary {
    background: $color-bleu-de-france;
    color: $color-white;
    box-shadow: none;
    &:hover,
    &.hover {
      filter: brightness(90%);
      box-shadow: $shadow-s;
    }
    &:active,
    &.active {
      filter: brightness(80%);
      transition: none;
      box-shadow: $shadow-m;
    }
    &:focus {
      outline: 0;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <Button variation="primary" size="large">Primary Button</Button>
    <Button variation="primary" size="medium">Medium</Button>
    <Button variation="primary" size="small">Small</Button>
    <br />
    <Button>Default Button</Button>
    <Button state="hover">:hover</Button>
    <Button state="active">:active</Button>
    <Button state="focus">:focus</Button>
  </div>
  ```
</docs>
