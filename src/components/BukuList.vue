<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="bukuList"
      item-key="id"
      :search="search"
    >
    <v-btn
      slot="item.actions"
      small
      @click="editItem(item)"
      class="mx-2"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn
      slot="item.actions"
      small
      @click="deleteItem(item)"
      class="mx-2"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="500px">
      <buku-form @save="saveItem" @close="closeDialog" :editedItem="editedItem"></buku-form>
    </v-dialog>
    <v-btn @click="showDialog" color="primary">Tambah Buku</v-btn>
  </div>
</template>

<script>
import BukuForm from "./BukuForm.vue";
import BukuService from "../services/BukuService";

export default {
  components: {
    BukuForm,
  },
  data() {
    return {
      bukuList: [],
      headers: [
        { text: "Judul", value: "judul" },
        { text: "Penulis", value: "penulis" },
        { text: "Tahun Terbit", value: "tahunTerbit" },
        { text: "Aksi", value: "actions", sortable: false },
      ],
      dialog: false,
      editedItem: null,
      search: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      BukuService.getAll()
        .then((response) => {
          this.bukuList = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    },
    editItem(item) {
      this.editedItem = item;
      this.dialog = true;
    },
    deleteItem(item) {
      if (confirm("Apakah Anda yakin ingin menghapus buku ini?")) {
        BukuService.delete(item.id)
          .then(() => {
            this.fetchData();
          })
          .catch((error) => {
            console.error("Error deleting item: ", error);
          });
      }
    },
    showDialog() {
      this.editedItem = null;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    saveItem(item) {
      if (item.id) {
        BukuService.update(item.id, item)
          .then(() => {
            this.fetchData();
          })
          .catch((error) => {
            console.error("Error updating item: ", error);
          });
      } else {
        BukuService.create(item)
          .then(() => {
            this.fetchData();
          })
          .catch((error) => {
            console.error("Error creating item: ", error);
          });
      }
      this.dialog = false;
    },
  },
};
</script>
