<template>
  <q-drawer :value="leftDrawerOpen" show-if-above bordered>
    <q-list>
      <q-item-label header>Essential Links</q-item-label>
      <q-item clickable tag="a" @click.native="openURL('https://quasar.dev')">
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Docs</q-item-label>
          <q-item-label caption>quasar.dev</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
        <q-item-section avatar>
          <q-icon name="code" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Github</q-item-label>
          <q-item-label caption>github.com/quasarframework</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
        <q-item-section avatar>
          <q-icon name="chat" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Discord Chat Channel</q-item-label>
          <q-item-label caption>chat.quasar.dev</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
        <q-item-section avatar>
          <q-icon name="record_voice_over" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Forum</q-item-label>
          <q-item-label caption>forum.quasar.dev</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
        <q-item-section avatar>
          <q-icon name="rss_feed" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Twitter</q-item-label>
          <q-item-label caption>@quasarframework</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
        <q-item-section avatar>
          <q-icon name="public" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Facebook</q-item-label>
          <q-item-label caption>@QuasarFramework</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  computed: {
    app() {
      return this.$root.$children[0];
    },
  },
  methods: {
    openURL(url) {
      try {
        cep.util.openURLInDefaultBrowser(url);
      } catch (error) {
        alert("Could not open URL: " + error);
        console.error("Could not open URL:", error);
      }
    },
  },
  props: {
    leftDrawerOpen: Boolean,
  },
};
</script>

<style></style>
