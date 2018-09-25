import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions';

const initialState = {
  notes: [
    {
      id: 1,
      title: 'Note title1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      title: 'Note title2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 3,
      title: 'Note title3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]
}

let index = 4;

export const noteReducers = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOTE:
      const newNote = {...action.payload, id: index };
      index++;
      return {notes: [
        ...state.notes,
        {
          ...newNote
        }
      ]};

    case DELETE_NOTE:
      let position = state.notes.findIndex(note => note.id === action.payload.id);
      return { notes: [
        ...state.notes.slice(0, position),
        ...state.notes.slice(position + 1)
      ]}

      case EDIT_NOTE:
        let editPosition = state.notes.findIndex(note => note.id === action.payload.id);
        console.log(action.payload.description);
        return { notes: [
          ...state.notes.slice(0, editPosition),
          {id: action.payload.id, title: action.payload.title, description: action.payload.description},
          ...state.notes.slice(editPosition + 1)
        ]};

    default:
      return state;
  }
}