<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-lg">
      <div class="row justify-center">
        <q-btn
          icon="mdi-dock-window"
          label="Launch modal"
          color="primary"
          @click="openModal"
        />
      </div>
      <div class="row justify-center">
        <q-btn
          color="red"
          icon="mdi-alert-circle"
          label="Display Error"
          @click="error"
        />
      </div>
      <div class="row justify-center">
        <q-btn
          class="row"
          color="primary"
          icon="mdi-comment"
          label="Notify"
          @click="notify"
        />
      </div>
      <div class="row justify-center">
        <q-btn
          icon="mdi-alarm"
          label="Loading bar"
          color="primary"
          @click="loadingBar"
        />
      </div>
      <div class="row justify-center">
        <q-btn
          icon="mdi-autorenew"
          label="Loading"
          color="primary"
          @click="loader"
        />
      </div>
      <div class="row justify-center">
        <q-btn label="Vue Alert" color="primary" @click="vueAlert" />
      </div>
      <div class="row justify-center">
        <q-btn label="Universal Alert" color="primary" @click="universalAlert" />
      </div>
      <div class="row justify-center">
        <q-btn label="App Aert" color="primary" @click="appAlert" />
      </div>
      <div class="row justify-center">
        <q-btn label="Open" color="primary" @click="appOpen" />
      </div>
      <div class="row justify-center">
        <q-btn label="Open Explorer" color="primary" @click="appOpenExplorer" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  computed: {
    app() {
      return this.$root.$children[0];
    }
  },
  methods: {
    notify() {
      this.app.notify(`Hello!`);
    },
    error() {
      this.app.error(`I'm an error message`);
    },
    loadingBar() {
      this.app.loadingBar.trigger();
    },
    loader() {
      this.app.loading = true;
      setTimeout(() => {
        this.app.loading = false;
      }, 1000);
    },
    openModal() {
      this.app.launchModal();
    },
    vueAlert(message) {
      message = "Hello from vueAlert!";
      this.app.csInterface.evalScript(`passData("${message}")`, (result) =>
      {
        alert(result);
      });
    },
    universalAlert(message) {
      message = "Called from Tab2.vue";
      this.app.csInterface.evalScript(`console.alert("${message}")`);
      this.error("universalAlert", "Message");
    },
    appAlert(message) {
      message = "Called from Tab2.vue";
      this.app.csInterface.evalScript(`PHXS.alert("${message}")`);
      this.error("appAlert", "Message");
    },
    appOpen() {
      window.cep.fs.showOpenDialog(true, false, "Import File:", "C:\\");
    },
    appOpenExplorer() {
      var exec = require("child_process").exec;
      var child = exec("C:\\Windows\\explorer.exe");
    }
  }
};
</script>

<style></style>
