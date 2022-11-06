class DataClient {

  constructor(dataClient) {
    this.id = dataClient.id
    this.dateCreation = dataClient.dateCreation
    this.dateChange = dataClient.dateChange
    this.surname = dataClient.perconalData.surname
    this.name = dataClient.perconalData.name
    this.middleName = dataClient.perconalData.middleName
    this.contact = {}

    if (dataClient.contactData) {
      for (const[key, value] of Object.entries(dataClient.contactData)) {
        this.contact[key] = value
      }
    }
  }

  fullName() {
    return `${this.surname} ${this.name} ${this.middleName}`
  }

  dateCreationStr() {
    const year  = this.dateCreation.getFullYear()
    let month  = this.dateCreation.getMonth() +1
    let day  = this.dateCreation.getDate()
    let hours = this.dateCreation.getHours()
    let minutes = this.dateCreation.getMinutes()
    if (month < 10) month = `0${month}`
    if (day < 10) day = `0${day}`
    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`
    return `${day}.${month}.${year}  ${hours}:${minutes}`
  }

  dateChangeStr() {
    const year  = this.dateChange.getFullYear()
    let month  = this.dateChange.getMonth() +1
    let day  = this.dateChange.getDate()
    let hours = this.dateChange.getHours()
    let minutes = this.dateChange.getMinutes()
    if (month < 10) month = `0${month}`
    if (day < 10) day = `0${day}`
    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`
    return `${day}.${month}.${year}  ${hours}:${minutes}`
  }
}

let listClients = [
  {
    id: 001,
    dateCreation: new Date(2019,1,15,9,1),
    dateChange: new Date(2021,5,18,14,20),
    perconalData: {
      surname:'Склодоовская-Кюрии',
      name:'Мария',
      middleName:'Владиславовна'
    },
    contactData: {
      tel: '89134562445',
      email:'simpleMaria@hrundex.ru',
    }
  },
  {
    id: 002,
    dateCreation: new Date(2020,8,4,10,45),
    dateChange: new Date(2021,8,30,15,10),
    perconalData: {
      surname:'Беккереель',
      name:'Антуан Анрии',
      middleName:'Александрович'
    },
    contactData: {
      tel: '89054562335',
      telExtens: '89132864722',
      email:'xrayForeve@kookle.ru',
    }
  },
  {
    id: 003,
    dateCreation: new Date(2022,4,15,10,10),
    dateChange: new Date(2022,4,15,14,20),
    perconalData: {
      surname:'Гегель',
      name:'Георг Вильгельм Фридрих',
      middleName:'Людвигович'
    },
    contactData: {
      tel: '89054921578',
      email:'dialectic@milo.ru',
      vk:'vk.com/id45678921',
    }
  },
  {
    id: 004,
    dateCreation: new Date(2019,1,15,9,1),
    dateChange: new Date(2021,5,18,14,20),
    perconalData: {
      surname:'Ферми',
      name:'Энрико',
      middleName:'Альбертович'
    },
    contactData: {
      tel: '89137561233',
      email:'mumezon@yaaahoo.ru',
      facebook:'facebook.com/id44445555',
    }
  },
  {
    id: 005,
    dateCreation: new Date(2019,1,15,9,1),
    dateChange: new Date(2021,5,18,14,20),
    perconalData: {
      surname:'Брауншвейг-Вольфенбюттельская',
      name:'Юлиана Мария',
      middleName:'Фердинандовна'
    },
    contactData: {
      tel: '89084561256',
      email:'daniaLend@trambler.ru',
      vk:'vk.com/id22223333',
    }
  },
]

let dataClients = []

for (const client of listClients) {
  dataClients.push(new DataClient(client))
}

for (const iterator of dataClients) {
  console.log(iterator.dateChangeStr())

}






