import { create } from 'zustand';
import type { List } from '@/components/search/advanced-search';


interface FiltersState {
  language: string;
  area: string;
  seniority: string;
  expanded: boolean;
  langList: List[] | undefined;
  areaList: List[] | undefined;
  seniorityList: List[] | undefined;
  setLanguage: (language: string) => void;
  setArea: (area: string) => void;
  setSeniority: (seniority: string) => void;
  setExpanded: (expanded: boolean) => void;
  setLangList: (langList: List[] | undefined) => void;
  setAreaList: (areaList: List[] | undefined) => void;
  setSeniorityList: (seniorityList: List[] | undefined) => void;
}

const useFiltersStore = create<FiltersState>((set) => ({
  language: '',
  area: '',
  seniority: '',
  expanded: false,
  langList: undefined,
  areaList: undefined,
  seniorityList: undefined,
  setLanguage: (language) => set({ language }),
  setArea: (area) => set({ area }),
  setSeniority: (seniority) => set({ seniority }),
  setExpanded: (expanded) => set({ expanded }),
  setLangList: (langList) => set({ langList }),
  setAreaList: (areaList) => set({ areaList }),
  setSeniorityList: (seniorityList) => set({ seniorityList }),
}));

export default useFiltersStore;