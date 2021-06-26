const validateDeveloper = function(data){
  let error = ''
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
      picture: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
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
      picture: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
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
    console.log(state.developers.map(developer => developer.id))
    developer.data.id = Math.max(...state.developers.map(developer => developer.id))+1;
    state.developers.push(developer.data)
  },
  deleteDeveloper(state, data){
    state.developers = state.developers.filter(developer => developer.id !== data.id)
  },
  updateDeveloper(state, data){

    state.developers = state.developers.map(developer => {
      if(developer.id === data.data.id){
        return data.data
      }
        return developer
    });
  }
}

export const actions = {
  addDeveloper(context, payload){
    const error = validateDeveloper(payload);
    if(error !== ''){
      return {error: error}
    }
    context.commit('addDeveloper', {data:payload.developer})
    return {message: 'Succesfully added developer'}

  },
  deleteDeveloper(context, payload){
    context.commit('deleteDeveloper', {id: payload.id})
  },
  updateDeveloper(context, payload){
    const error = validateDeveloper(payload);
    if(error !== ''){
      return {error: error};
    }
    context.commit('updateDeveloper',{data: payload.developer});
    return {message: 'Succesfully updated developer'}
  }
}
export const getters = {
  developers : (state) => state.developers,
}
