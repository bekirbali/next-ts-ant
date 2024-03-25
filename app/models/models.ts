export interface Urun {
  urun_adi: string;
  adet: number;
  id: number;
}

export interface HaftalikRapor {
  hafta: number;
  toplam_satis: number;
  urunler: Urun[];
}

export interface GunlukRapor {
  tarih: string;
  toplam_satis: number;
  urunler: Urun[];
}

export interface AylikRapor {
  ay: string;
  toplam_satis: number;
  urunler: Urun[];
}

export interface DummyData {
  haftalik_raporlar: HaftalikRapor[];
  gunluk_raporlar: GunlukRapor[];
  aylik_raporlar: AylikRapor[];
}

export interface IDrawerProps {
  open: boolean;
  id: number | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productName: string;
  setProductName: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDataProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number | null;
  setId: React.Dispatch<React.SetStateAction<number | null>>;
}
