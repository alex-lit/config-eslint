<script lang="ts">
  /* eslint-disable vuejs-accessibility/mouse-events-have-key-events */
  const Auth = (a) => a;

  /**
   * @param z
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  function Component(z) {
    return z;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const foos = /\S[4-6]/;

  /**
   *
   */
  function ax() {
    return false;
  }

  ax();

  /**
   * Шапка приложения
   */
  @Component<Test>({
    components: {
      SelectUser: () => import('src/components/select-user'),
      MenuUser: () => import('src/components/menu-user'),
    },
  })
  export default class Test {
    @Auth('selectedUserId')
    #selectedUserId;

    @Auth('user')
    user;

    @Auth('clearUserInfo')
    clearUserInfo;

    @Auth('setSelectedUserId')
    setSelectedUserId;

    private _selectedUserId = 0;

    /**
     * Выход из приложения
     */
    logout() {
      this.$router.push('/login');
      this.clearUserInfo();
    }

    /**
     * Идентификатор выбранного пользователя (геттер)
     */
    get selectedUserId() {
      return this._selectedUserId;
    }

    /**
     * Идентификатор выбранного пользователя (сеттер)
     */
    set selectedUserId(id: number) {
      this.setSelectedUserId(id);
    }

    /**
     * При смене пользователя прокидывает его идентификатор в url
     *
     * @param selectedUserId Идентификатор пользователя
     */
    onSelectedUserChange(selectedUserId: number) {
      if (
        [
          '/gates/dashboard',
          '/gates/gates',
          '/gates/gates-2fa',
          '/gates/addresses',
          '/gates/transactions',
          '/gates/transfer',
          '/gates/transfer-2fa',
          '/gates/logs',
        ].includes(this.$route.path)
      ) {
        (this.$router as any).push({
          hash: this.$route.hash,
          params: this.$route.params,
          query: {
            ...this.$route.query,
            filter: {
              ...(this.$route.query.filter as Record<string, any>),
              user_id: selectedUserId || undefined,
            },
          },
        });
      }
    }
  }
</script>

<template>
  <q-header class="app-header">
    <q-toolbar class="app-header__toolbar">
      <button @mouseover="setAsideVisibility(!isShowAside)">ddd</button>
      <q-btn flat no-caps stretch style="pointer-events: none">
        <q-toolbar-title> {{ title }} </q-toolbar-title>
      </q-btn>

      <br />

      <select-user></select-user>
      <select-user
        v-if="user.is_admin"
        v-model="selectedUserId"
        class="[ q-mr-md ]"
        :select-options="{
          clearable: true,
          dense: true,
          emitValue: true,
          outlined: true,
          mapOptions: true,
          label: 'User',
          optionLabel: 'name',
          optionValue: 'id',
        }"
        :variables="{
          perPage: 1000,
          fields: {
            users: 'id,name',
          },
        }"
        @input="(value) => onSelectedUserChange(value)"
      ></select-user>

      <menu-user></menu-user>
    </q-toolbar>

    <p></p>
  </q-header>
</template>

<style lang="scss" scoped>
  .app-header {
    background-color: white;
    color: $grey-10;

    @at-root .body--dark & {
      background-color: var(--q-color-dark);
      color: white;
    }
  }

  .app-header__toolbar {
    height: 4rem;
  }
</style>
