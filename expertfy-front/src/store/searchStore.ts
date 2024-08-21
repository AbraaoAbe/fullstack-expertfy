import { create } from 'zustand';
import { Expert } from '@/components/search/search-table';
import { Competence } from '@/lib/search/search';


interface SearchState {
  experts: Expert[];
  filteredExperts: Expert[];
  competence: Competence | null;
  suggestions: Competence[];
  
  setExperts: (experts: Expert[]) => void;
  setFilteredExperts: (filteredExperts: Expert[]) => void;
  setCompetence: (competence: Competence | null) => void;
  setSuggestions: (suggestions: Competence[]) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  experts: [],
  filteredExperts: [],
  competence: null,
  suggestions: [],

  setExperts: (experts) => set({ experts }),
  setFilteredExperts: (filteredExperts) => set({ filteredExperts }),
  setCompetence: (competence) => set({ competence }),
  setSuggestions: (suggestions) => set({ suggestions}),
}));

export default useSearchStore;
