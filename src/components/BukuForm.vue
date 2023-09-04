<template>
    <v-card>
      <v-card-title>
        {{ editedItem ? "Edit Buku" : "Tambah Buku" }}
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="localEditedItem.judul"
            label="Judul"
            required
          ></v-text-field>
          <v-text-field
            v-model="localEditedItem.penulis"
            label="Penulis"
            required
          ></v-text-field>
          <v-text-field
            v-model="localEditedItem.tahunTerbit"
            label="Tahun Terbit"
            required
            type="number"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="closeForm">Batal</v-btn>
        <v-btn color="blue darken-1" text @click="save">Simpan</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      editedItem: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        valid: true,
        localEditedItem: Object.assign({}, this.editedItem),
      };
    },
    methods: {
      closeForm() {
        this.$emit("close");
      },
      save() {
        if (this.$refs.form.validate()) {
          this.$emit("save", this.localEditedItem);
        }
      },
    },
  };
  </script>
  