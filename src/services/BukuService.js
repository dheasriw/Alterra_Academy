// Simulasi Data Buku
const bukuList = [
  { id: 1, judul: "Buku 1", penulis: "Penulis 1", tahunTerbit: 2020 },
  { id: 2, judul: "Buku 2", penulis: "Penulis 2", tahunTerbit: 2021 },
  // Tambahkan buku lainnya di sini
];

export default {
  getAll() {
    return new Promise((resolve) => {
      // Simulasikan pengambilan data dari server dengan jeda 1 detik
      setTimeout(() => {
        resolve({ data: bukuList });
      }, 1000);
    });
  },
  create(item) {
    return new Promise((resolve) => {
      // Simulasikan penambahan data buku dengan jeda 1 detik
      setTimeout(() => {
        item.id = bukuList.length + 1;
        bukuList.push(item);
        resolve();
      }, 1000);
    });
  },
  update(id, item) {
    return new Promise((resolve) => {
      // Simulasikan pembaruan data buku dengan jeda 1 detik
      setTimeout(() => {
        const index = bukuList.findIndex((buku) => buku.id === id);
        if (index !== -1) {
          bukuList[index] = item;
        }
        resolve();
      }, 1000);
    });
  },
  delete(id) {
    return new Promise((resolve) => {
      // Simulasikan penghapusan data buku dengan jeda 1 detik
      setTimeout(() => {
        const index = bukuList.findIndex((buku) => buku.id === id);
        if (index !== -1) {
          bukuList.splice(index, 1);
        }
        resolve();
      }, 1000);
    });
  },
};
