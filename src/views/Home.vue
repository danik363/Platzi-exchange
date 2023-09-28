<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <bounce-loader
      :loading="isLoading"
      :color="'#68d391'"
      :size="'100px'"
    ></bounce-loader>
    <px-assets-table v-if="!isLoading" :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import api from "@/api.js";
import PxAssetsTable from "@/components/PxAssetsTable.vue";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: { PxAssetsTable, BounceLoader },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
