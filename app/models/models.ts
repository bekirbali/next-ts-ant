export interface Urun {
  urun_adi: string;
  adet: number;
  id: number;
}

export interface GunlukRapor {
  tarih: string;
  toplam_satis: number;
  urunler: Urun[];
}

export interface DummyData {
  gunluk_raporlar: GunlukRapor[];
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
