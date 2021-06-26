const validateDeveloper = function(data){
  let error = ''
  console.log(data.developer)
  if(data.developer.devName === ""){
    error = 'Name is required field';
    return error;
  }
  if(data.developer.email ===''){
    error = 'Email is required field';
    return error;

  }
  if(data.developer.phone ==='' || data.developer.phone.match(/[a-z]/i)){
    error = 'Phone number is required field and must not contain alpha characters.';
    return error;

  }
  if(data.developer.location ===''){
    error = 'Location is required field';
    return error;

  }
  if(data.developer.price === '' || data.developer.price < 0  || isNaN(data.developer.price)){
    error = 'Price per hour is required field and must be non-negative value.';
    return error;

  }
  if(data.developer.tehnology ===''){
    error = 'Tehnology is required field';
    return error;

  }
  if(data.developer.experiance === '' || data.developer.experiance <0  || isNaN(data.developer.experiance)){
    error = 'Experiance is required field and must be non-negative value';
    return error;

  }
  if(data.developer.language ===''){
    error = 'Native language is required field';
    return error;
  }
  return error;
}

export const state = () => ({
  developers:[
    {
      id:1,
      devName: 'Pera Peric',
      email: 'pera@test.com',
      phone: '064123123',
      location: 'Krusevac',
      picture: 'https://unsplash.com/photos/ZHvM3XIOHoE',
      price: 10,
      tehnology: 'Javascript',
      desc: 'lorem ipsum dummy data',
      experiance: 4,
      language: 'Serbian',
      linkedIn: 'linkedin.com/user1'
    },
    {
      id:2,
      devName: 'Mika Mikic',
      email: 'mika@test.com',
      phone: '064890123',
      location: 'Beograd',
      picture: 'https://unsplash.com/photos/C8Ta0gwPbQg',
      price: 12,
      tehnology: 'Python',
      desc: 'lorem ipsum dummy data',
      experiance: 10,
      language: 'Serbian',
      linkedIn: 'linkedin.com/user2'
    }
  ]
})

export const mutations = {
  addDeveloper(state, developer){
    console.log(developer)
    developer.data.id = state.developers.length + 1;
    state.developers.push(developer.data)
  },
  deleteDeveloper(state, data){
    state.developers = state.developers.filter(developer => developer.id !== data.id)
  },
  updateDeveloper(state, data){

  }
}

export const actions = {
  addDeveloper(context, payload){
    const error = validateDeveloper(payload)
    if(error !== 0){
      return {error: error}
    }
    context.commit('addDeveloper', {data:payload.developer})
  },
  deleteDeveloper(context, payload){
    context.commit('deleteDeveloper', {id: payload.id})
  },
  updateDeveloper(context, payload){
    const error = validateDeveloper(payload);
    if(error !== 0){
      return {error: error};
    }
    context.commit('updateDeveloper',{data: payload.developer})

  }
}
export const getters = {
  developers : (state) => state.developers,
}
