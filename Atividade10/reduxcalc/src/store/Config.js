import { createStore, combineReducers } from 'redux'


const reducers = combineReducers({

  soma: function (state, action) {
    switch (action.type) {
      case 'NOVO_VALOR':

        return {
          soma: action.payload
        }
      default:
        return {
          soma: 0
        }
    }
  },

  maior: function (state, action) {
    switch (action.type) {
      case 'NOVO_VALOR':
        return {
          maior: action.payload
        }
      default:
        return {
          maior: 0
        }
    }
  },

  mult: function (state, action) {
    switch (action.type) {
      case 'NOVO_VALOR':
        return {
          mult: action.payload
        }
      default:
        return {
          mult: 0
        }
    }
  },

  num1: function (state, action) {
    return {
      num1: 2
    }
  },

  num2: function (state, action) {
    return {
      num2: 5
    }
  }

}

)

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig