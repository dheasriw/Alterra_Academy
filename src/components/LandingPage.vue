<template>
    <v-app>
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card elevation="2">
                <v-card-title>
                  <h2>Selamat Datang di Perpustakaan XYZ</h2>
                </v-card-title>
                <v-card-text>
                  <p>Tempat yang luar biasa untuk mengeksplorasi dunia melalui kata-kata dan pengetahuan.</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" @click="exploreLibrary">Jelajahi Koleksi Kami</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
  
          <v-row>
            <v-col cols="12">
              <v-card elevation="2">
                <v-card-title>
                  <h2>Tentang Kami</h2>
                </v-card-title>
                <v-card-text>
                  <p>
                    Perpustakaan XYZ adalah tempat di mana Anda dapat mengeksplorasi ribuan buku dan sumber daya referensi. 
                    Kami berkomitmen untuk memberikan akses ke pengetahuan dan pemahaman yang tak terbatas melalui bacaan. 
                    Tim kami siap membantu Anda menemukan buku yang sesuai dengan minat dan kebutuhan Anda.
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
  
          <v-row>
            <v-col cols="12">
              <v-card elevation="2">
                <v-card-title>
                  <h2>Layanan Kami</h2>
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li>Koleksi buku yang beragam</li>
                    <li>Peminjaman buku online</li>
                    <li>Konsultasi dan rekomendasi buku</li>
                    <li>Acara dan lokakarya</li>
                    <li>Ruang baca yang nyaman</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      exploreLibrary() {
        // Tambahkan navigasi ke halaman koleksi buku jika diperlukan
      },
    },
  };
  </script>
  
  <style>
  /* Gaya CSS tambahan jika diperlukan */
  </style>
  