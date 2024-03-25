import { DummyData } from "../models/models";

export const dummyData: DummyData = {
  haftalik_raporlar: [
    {
      hafta: 1,
      toplam_satis: 1500,
      urunler: [
        { id: 1, urun_adi: "Ürün 1", adet: 20 },
        { id: 2, urun_adi: "Ürün 2", adet: 30 },
        { id: 3, urun_adi: "Ürün 3", adet: 15 },
      ],
    },
    // Diğer haftalık raporlar...
  ],
  gunluk_raporlar: [
    {
      tarih: "2024-02-24",
      toplam_satis: 300,
      urunler: [
        { id: 4, urun_adi: "Ürün 1", adet: 5 },
        { id: 5, urun_adi: "Ürün 2", adet: 8 },
        { id: 6, urun_adi: "Ürün 3", adet: 3 },
      ],
    },
    // Diğer günlük raporlar...
  ],
  aylik_raporlar: [
    {
      ay: "Şubat 2024",
      toplam_satis: 6500,
      urunler: [
        { id: 7, urun_adi: "Ürün 1", adet: 100 },
        { id: 8, urun_adi: "Ürün 2", adet: 150 },
        { id: 9, urun_adi: "Ürün 3", adet: 80 },
      ],
    },
    // Diğer aylık raporlar...
  ],
};
