export const INITIAL = {
  headers: [
    { text: 'ID', value: 'id' },
    { text: 'Primary', value: 'primary' },
    { text: 'Accent', value: 'accent' },
    { text: 'Actions', value: 'actions' },
  ],

  dataset: [
    { id: 1, primary: 'Vanilla', accent: 'MobX' },
    { id: 2, primary: 'Angular', accent: 'NgRx' },
    { id: 3, primary: 'React', accent: 'Redux' },
    { id: 4, primary: 'Vue', accent: 'Vuex' },
  ],

  addData: { primary: '', accent: '' },
};

export const ADD_ITEM = '[Basic] ADD_ITEM';
export const SEARCH_ITEM = '[Basic] SEARCH_ITEM';
export const EDIT_ITEM = '[Basic] EDIT_ITEM';
export const DELETE_ITEM = '[Basic] DELETE_ITEM';
