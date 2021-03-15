<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Topo/>
    </v-app-bar>

    <v-main>
      <Corpo/>
    </v-main>
  </v-app>
</template>

<script>
import Corpo from './components/Corpo';
import Topo from './components/Topo';

export default {
  name: 'App',

  components: {
    Corpo,
    Topo
  },

  data: () => ({
    //
  }),
};
</script>
