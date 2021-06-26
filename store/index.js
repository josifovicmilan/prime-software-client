// const getDates = function(startDate, endDate) {
//   let dates = [],
//       currentDate = startDate,
//       addDays = function(days) {
//         let date = new Date(this.valueOf());
//         date.setDate(date.getDate() + days);
//         return date;
//       };
//   while (currentDate <= endDate) {
//     dates.push(currentDate);
//     currentDate = addDays.call(currentDate, 1);
//   }
//   return dates;
// };
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
    },
    {
      id:3,
      devName: 'Zaklina Zikic',
      email: 'zex@test.com',
      phone: '064890123',
      location: 'Beograd',
      picture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      price: 8,
      tehnology: 'Python',
      desc: 'lorem ipsum dummy data',
      experiance: 1,
      language: 'Serbian',
      linkedIn: 'linkedin.com/user3'
    },
    {
      id:4,
      devName: 'Lepojka Lazovic',
      email: 'lepakislika@test.com',
      phone: '064890123',
      location: 'Beograd',
      picture: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 12,
      tehnology: 'Java',
      desc: 'lorem ipsum dummy data',
      experiance: 2,
      language: 'Serbian',
      linkedIn: 'linkedin.com/user2'
    },
    {
      id:5,
      devName: 'Milentije Milentijevic',
      email: 'mile@test.com',
      phone: '064890123',
      location: 'Beograd',
      picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      price: 12,
      tehnology: 'PHP',
      desc: 'lorem ipsum dummy data',
      experiance: 40,
      language: 'Serbian',
      linkedIn: 'linkedin.com/user2'
    }
  ],
  hirings:[
    {
      id: 1,
      developer_id: 1,
      startDate: new Date('July 07, 2021'),
      endDate: new Date('July 22, 2021')
    },
    {
      id: 2,
      developer_id: 1,
      startDate: new Date('August 01, 2021'),
      endDate: new Date('August 10, 2021')
    },
    {
      id: 3,
      developer_id: 2,
      startDate: new Date('August 05, 2021'),
      endDate: new Date('August 21, 2021')
    },
    {
      id: 4,
      developer_id: 2,
      startDate: new Date('August 27, 2021'),
      endDate: new Date('September 01, 2021')
    },
  ],
  searchingForAvailableDev: false,
  busyDevelopers:[],
  availableDevelopers: [],
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
        return data.data;
      }
        return developer;
    });
  },
  showAvailableDevelopers(state, data){
    // console.log(typeof(data.workEndDate))
    // const workDays = new Set(getDates(Date.parse(data.workStartDate), Date.parse(data.workEndDate)));
    // console.log(workDays)
    // const busyDevsIndexes = state.hirings.filter(work => {
    //   if(state.busyDevelopers.includes(work.developer_id)){
    //     return;
    //   }
    //   const busyDates = new Set(getDates(work.startDate, work.endDate))
    //   console.log(busyDates);
    //   const intersection = [...busyDates].filter(date => workDays.has(date))
    //   console.log(intersection)
    // })
    // console.log(state.busyDevelopers)
      state.busyDevelopers = [];
      state.searchingForAvailableDev = true;
      state.hirings.forEach(hiring => {
      console.log('WS' + +Date.parse(data.workStartDate))
      console.log('WE' + +Date.parse(data.workEndDate))
      console.log('HS' +Date.parse(hiring.startDate))
      console.log('HE' +Date.parse(hiring.endDate))
      if(state.busyDevelopers.includes(hiring.developer_id)){
        console.log('usao')
        return;
      }
      if(+Date.parse(hiring.startDate) <= +Date.parse(data.workEndDate) &&  +Date.parse(hiring.endDate) >= +Date.parse(data.workEndDate)){
        console.log(true + "I")
        state.busyDevelopers.push(hiring.developer_id)
      }
      else if(+Date.parse(hiring.endDate) >= +Date.parse(data.workStartDate) && +Date.parse(hiring.startDate) <= +Date.parse(data.workStartDate)){
        console.log(true + "II")
        state.busyDevelopers.push(hiring.developer_id)
      }
      else if(+Date.parse(hiring.startDate) >= +Date.parse(data.workStartDate) && +Date.parse(hiring.endDate) <= +Date.parse(data.workEndDate)){
        console.log(true + "III")
        state.busyDevelopers.push(hiring.developer_id)
      }
      else if(+Date.parse(hiring.startDate) <= +Date.parse(data.workStartDate) && +Date.parse(hiring.endDate) >= +Date.parse(data.workEndDate)){
        console.log(true + "IV")
        state.busyDevelopers.push(hiring.developer_id)
      }
    })
  },
  hireDevelopers(state, data){
    
    data.developerCart.id = Math.max(...state.hirings.map(hiring => hiring.id))+1;
    console.log(data.developerCart)
    state.hirings.push(...data.developerCart)
    console.log(state.hirings)
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
  },
  showAvailableDevelopers(context,payload){
    
    context.commit('showAvailableDevelopers',{
      workStartDate: payload.workStartDate,
      workEndDate: payload.workEndDate
    })
  },
  hireDevelopers(context, payload){
    context.commit('hireDevelopers',{
      developerCart: payload.developerCart
    })
  }
}
export const getters = {
  developers : (state) => state.developers,
  allHirings(state){
    let allHirings = []
    state.hirings.forEach(hiring =>{
      state.developers.forEach(developer =>{
        if(hiring.developer_id === developer.id){
          allHirings.push({
            id: hiring.id,
            devName: developer.devName,
            picture: developer.picture,
            startDate: hiring.startDate,
            endDate: hiring.endDate,
            duration: hiring.endDate - hiring.startDate
          })
        }
      })
    });
    return allHirings;
  },
  availableDevelopers(state){
    if(!state.searchingForAvailableDev){
      return [];
    }
    return state.developers.filter(developer => {
      if(state.busyDevelopers.length === 0 || !state.busyDevelopers.includes(developer.id)){
        return developer;
      }
    })
  }
}
