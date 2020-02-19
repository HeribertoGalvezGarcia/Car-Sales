import {REMOVE_FEATURE, ADD_FEATURE} from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

function reducer(state = initialState, {payload, type}) {
  const newState = {...state};
  switch(type) {
    case REMOVE_FEATURE:
      newState.additionalFeatures = [...newState.additionalFeatures, payload];
      newState.car.features = newState.car.features.filter(({id}) => id !== payload.id);
      newState.additionalPrice = newState.car.features.reduce((acc, {price}) => acc + price, 0);
      return newState;
    case ADD_FEATURE:
      newState.additionalFeatures = newState.additionalFeatures.filter(({id}) => id !== payload.id);
      newState.car.features = [...newState.car.features, payload];
      newState.additionalPrice = newState.car.features.reduce((acc, {price}) => acc + price, 0);
      return newState;
    default:
      return newState;
  }
}

export {initialState, reducer};
