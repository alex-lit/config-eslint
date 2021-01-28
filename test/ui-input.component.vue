<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  import UiTransition from '@/components/ui-transition';
  import {
    UI_ICON_NAMES,
    UI_INPUT_PREFIX_ICON_SIZES,
    UI_INPUT_SIZES,
  } from '@/consts';
  import { mask } from '@/directives';
  import { checkSlot, get, nanoid } from '@/utils';

  /**
   * Инпут
   */
  @Component<UiInput>({
    inheritAttrs: false,

    props: {
      /* ✓ GOOD */
      greetingText: String,

      /* ✗ BAD */
      'greeting-text': String,
      greeting_text: String,
    },

    directives: {
      mask,
    },

    components: {
      UiTransition,
    },

    created() {
      this.uid = this.$attrs.id || `ID-${nanoid()}`;
    },
  })
  export default class UiInput extends Vue {
    /**
     * Значение
     */
    @Prop({ default: '' })
    value!: any;

    /**
     * Невалидное состояние
     */
    @Prop({ type: Boolean, default: false })
    invalid!: boolean;

    /**
     * Размер
     *
     * @example
     * ```html
     * <ui-input size="large"></ui-input>
     * ```
     */
    @Prop({
      type: String,
      default: 'default',
      validator(value) {
        return UI_INPUT_SIZES.includes(value);
      },
    })
    size!: typeof UI_INPUT_SIZES[number];

    /**
     * Иконка слева
     *
     * @example
     * ```html
     * <ui-input prefix-icon="account"></ui-input>
     * ```
     */
    @Prop({
      type: String,
      validator(value) {
        return UI_ICON_NAMES.includes(value);
      },
    })
    readonly prefixIcon!: typeof UI_ICON_NAMES[number];

    /**
     * Размер префиксной иконки
     *
     * @example
     * ```html
     * <ui-input prefix-icon-size="large"></ui-input>
     * ```
     */
    @Prop({
      type: String,
      default: 'default',
      validator(value) {
        return UI_INPUT_PREFIX_ICON_SIZES.includes(value);
      },
    })
    prefixIconSize!: typeof UI_INPUT_PREFIX_ICON_SIZES[number];

    /**
     * Маска
     *
     * @example
     * ```html
     * <ui-input
     *   v-model.number="value"
     *   :mask="{
     *     alias: 'decimal',
     *     radixPoint: '.',
     *     placeholder: '',
     *     rightAlign: false,
     *   }"
     * ></ui-input>
     * ```
     */
    @Prop({
      type: [String, Object],
    })
    mask!: string | Record<string, any>;

    /**
     * Показать прароль?
     */
    isShowPassword = false;

    /**
     * Уникальный идентификатор
     *
     * @description
     * При создании компонента принимает значение атрибута "id" или генерирует
     * новый
     */
    uid: string = '';

    checkSlot = checkSlot;

    get = get;

    /**
     * Тип инпута
     */
    get type(): HTMLInputElement['type'] {
      return this.isShowPassword || this.$attrs.mask
        ? 'text'
        : this.$attrs.type || 'text';
    }

    /**
     * Устанавливает фокус на инпуте
     */
    focus(): void {
      (document.activeElement as any)?.blur?.();
      (this.$refs.INPUT as HTMLInputElement).focus();
      (this.$refs.INPUT as HTMLInputElement).selectionEnd = 0;
    }

    /**
     * При вставке в поле эммитит событие с полученным значением (а не с
     * предыдущим до вставки)
     */
    onPaste(): void {
      setTimeout(() => {
        this.$emit('input', (this.$refs.INPUT as HTMLInputElement).value);
      }, 0);
    }
  }
</script>

<template>
  <section
    v-show="!$attrs.hidden"
    :class="{
      'ui-input': true,
      [`ui-input--invalid`]: invalid,
      [`ui-input--prefix-icon--${prefixIcon}`]: Boolean(prefixIcon),
      [`ui-input--prefix-icon-size--${prefixIconSize}`]: true,
      [`ui-input--size--${size}`]: true,
    }"
    :sdf="[1, 3]"
    @click="onPaste()"
  >
    <!-- label -->
    <label v-show="$slots['label']" class="ui-input__label" :for="uid">
      <!-- @slot label -->
      <slot name="label"></slot>
      <!-- /@slot label -->
    </label>
    <!-- /label -->

    <!-- field -->
    <div class="ui-input__field-wrap">
      <!-- field:prefix -->
      <figure
        v-if="checkSlot($slots, 'prefix') || prefixIcon"
        class="ui-input__prefix"
      >
        <div v-if="prefixIcon" class="ui-input__prefix-icon-wrap">
          <ui-icon
            class="ui-input__prefix-icon"
            :name="prefixIcon"
            :sdfsfd="8"
            size="var(--ui-input-prefix-icon-size)"
          ></ui-icon>
        </div>
        <span v-if="checkSlot($slots, 'prefix')" class="ui-input__prefix-text">
          <!-- @slot prefix -->
          <slot name="prefix"></slot>
          <!-- /@slot prefix -->
        </span>
      </figure>
      <!-- /field:prefix -->

      <input
        :id="uid"
        ref="INPUT"
        v-bind="$attrs"
        v-mask="mask"
        :class="{
          'ui-input__field': true,
          'ui-input__field--2fa-code': get(mask, 'alias') === '2fa-code',
        }"
        :type="type"
        :value="value"
        @input="
          (event) => {
            $emit('input', event.target.value);
          }
        "
        @paste="onPaste()"
      />

      <!-- field:show-password -->
      <button
        v-if="$attrs.type === 'password'"
        class="ui-input__password-show"
        tabindex="-1"
        type="button"
        @click="isShowPassword = !isShowPassword"
      >
        <ui-icon
          color="secondary"
          :name="isShowPassword ? 'hide' : 'show'"
          size="24px"
        ></ui-icon>
      </button>
      <!-- /field:show-password -->
    </div>
    <!-- /field -->

    <!-- messages -->
    <footer
      v-if="
        checkSlot($slots, 'prefix-message') ||
        checkSlot($slots, 'suffix-message')
      "
      class="ui-input__messages"
    >
      <span
        v-if="checkSlot($slots, 'prefix-message')"
        class="ui-input__prefix-message"
      >
        <!-- @slot prefix-message -->
        <slot name="prefix-message"></slot>
        <!-- /@slot prefix-message -->
      </span>
      <span
        v-if="checkSlot($slots, 'suffix-message')"
        class="ui-input__suffix-message"
      >
        <!-- @slot prefix-message -->
        <slot name="suffix-message"></slot>
        <!-- /@slot prefix-message -->
      </span>
    </footer>
    <!-- /messages -->

    <div id="foo" class="bar">
      <img />
      <br />
      <sdfsfsdf />

      <!-- On the same line with the last attribute. -->
    </div>
    <div id="foo" class="bar"><!-- On the next line. --></div>
    <my-component />
    <!-- rules -->
    <ui-transition name="expand">
      <div v-if="checkSlot($slots, 'rules')" class="ui-input__rules">
        <div class="ui-input__rules-wrap">
          <!-- @slot rules -->
          <slot name="rules"></slot>
          <!-- /@slot rules -->
        </div>
      </div>
    </ui-transition>
    <!-- rules -->
  </section>
</template>
