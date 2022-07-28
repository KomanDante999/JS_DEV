const arrayStudentDefault = [
  {name: 'Артемьев', surname: 'Андрей', middleName: 'Юрьевич', birthDate: new Date('1995-2-15'), yearAdmission: new Date('2015-9'), faculty: 'физика-математика'},
  {name: 'Арефьев', surname: 'Петр', middleName: 'Виниаминович', birthDate: new Date('1985-3-1'), yearAdmission: new Date('2000-9'), faculty: 'физика-математика'},
  {name: 'Бабаев', surname: 'Дмитрий', middleName: 'Иванович', birthDate: new Date('1998-12-18'), yearAdmission: new Date('2019-9'), faculty: 'физика-математика'},
  {name: 'Букина', surname: 'Ольга', middleName: 'Владимировна', birthDate: new Date('2000-5-5'), yearAdmission: new Date('2020-9'), faculty: 'физика-математика'},
  {name: 'Бабаян', surname: 'Динара', middleName: 'Отар оглы', birthDate: new Date('1999-9-25'), yearAdmission: new Date('2018-9'), faculty: 'физика-математика'},
  {name: 'Бармалейкин', surname: 'Денис', middleName: 'Прокопьевич', birthDate: new Date('2001-6-8'), yearAdmission: new Date('2021-9'), faculty: 'физика-математика'},
  {name: 'Вархамов', surname: 'Антон', middleName: 'Денисович', birthDate: new Date('1995-11-3'), yearAdmission: new Date('2016-9'), faculty: 'физика-математика'},
  {name: 'Гейт', surname: 'Ольга', middleName: 'Раисовна', birthDate: new Date('1994-4-19'), yearAdmission: new Date('2014-9'), faculty: 'физика-математика'},
  {name: 'Дегтярев', surname: 'Василий', middleName: 'Афанасьевич', birthDate: new Date('2000-7-22'), yearAdmission: new Date('2020-9'), faculty: 'физика-математика'},
  {name: 'Штурм', surname: 'Галина', middleName: 'Васильевна', birthDate: new Date('2001-2-4'), yearAdmission: new Date('2021-9'), faculty: 'физика-математика'},
  {name: 'Яковлева', surname: 'Мария', middleName: 'Семеновна', birthDate: new Date('1999-12-6'), yearAdmission: new Date('2019-9'), faculty: 'физика-математика'},
  {name: 'Зенкова', surname: 'Наталья', middleName: 'Владимировна', birthDate: new Date('1997-1-4'), yearAdmission: new Date('2018-9'), faculty: 'физика-математика'},
  {name: 'Огарков', surname: 'Петр', middleName: 'Васильевич', birthDate: new Date('1996-9-28'), yearAdmission: new Date('2017-9'), faculty: 'физика-математика'},
  {name: 'Витте', surname: 'Виктор', middleName: 'Оттович', birthDate: new Date('1999-11-27'), yearAdmission: new Date('2018-9'), faculty: 'филология'},
  {name: 'Гильберт', surname: 'Анна', middleName: 'Михайловна', birthDate: new Date('1974-6-12'), yearAdmission: new Date('2000-9'), faculty: 'филология'},
  {name: 'Дудко', surname: 'Елена', middleName: 'Артемьевна', birthDate: new Date('2000-3-16'), yearAdmission: new Date('2020-9'), faculty: 'филология'},
  {name: 'Ежова', surname: 'Олеся', middleName: 'Владимировна', birthDate: new Date('1998-3-19'), yearAdmission: new Date('2019-9'), faculty: 'филология'},
  {name: 'Астахова', surname: 'Ксения', middleName: 'Яковлевна', birthDate: new Date('1996-4-27'), yearAdmission: new Date('2016-9'), faculty: 'филология'},
  {name: 'Яковлева', surname: 'Зинаида', middleName: 'Терентьевна', birthDate: new Date('1994-10-10'), yearAdmission: new Date('2014-9'), faculty: 'филология'},
  {name: 'Джафаров', surname: 'Даниил', middleName: 'Мухамедкамильевич', birthDate: new Date('2000-10-11'), yearAdmission: new Date('2021-9'), faculty: 'филология'},
  {name: 'Камрадов', surname: 'Илья', middleName: 'Петрович', birthDate: new Date('1991-7-20'), yearAdmission: new Date('2010-9'), faculty: 'филология'},
  {name: 'Леманская', surname: 'Анастасия', middleName: 'Викторовна', birthDate: new Date('1997-3-22'), yearAdmission: new Date('2015-9'), faculty: 'филология'},
  {name: 'Зент', surname: 'Виктория', middleName: 'Генриховна', birthDate: new Date('1999-6-14'), yearAdmission: new Date('2019-9'), faculty: 'филология'},
  {name: 'Астафьева', surname: 'Эливира', middleName: 'Иммануиловна', birthDate: new Date('1993-8-2'), yearAdmission: new Date('2013-9'), faculty: 'психология'},
  {name: 'Бакланов', surname: 'Кирилл', middleName: 'Динилович', birthDate: new Date('1999-3-15'), yearAdmission: new Date('2020-9'), faculty: 'психология'},
  {name: 'Тарутин', surname: 'Владимир', middleName: 'Иванович', birthDate: new Date('1993-7-11'), yearAdmission: new Date('2015-9'), faculty: 'психология'},
  {name: 'Комлев', surname: 'Павел', middleName: 'Аркадьевич', birthDate: new Date('2000-12-25'), yearAdmission: new Date('2021-9'), faculty: 'психология'},
  {name: 'Семигорская', surname: 'Наталья', middleName: 'Павловна', birthDate: new Date('1981-5-3'), yearAdmission: new Date('2001-9'), faculty: 'психология'},
  {name: 'Цзян', surname: 'Айдар', middleName: 'Фалеутович', birthDate: new Date('1995-1-19'), yearAdmission: new Date('2016-9'), faculty: 'психология'},
  {name: 'Фиц', surname: 'Антон', middleName: 'Михайлович', birthDate: new Date('1998-9-20'), yearAdmission: new Date('2019-9'), faculty: 'психология'},
  {name: 'Данаев', surname: 'Константин', middleName: 'Федорович', birthDate: new Date('1995-10-17'), yearAdmission: new Date('2016-9'), faculty: 'психология'},
  {name: 'Секретная', surname: 'Антонина', middleName: 'Геннадиевна', birthDate: new Date('1999-11-8'), yearAdmission: new Date('2020-9'), faculty: 'психология'},
  {name: 'Смоляр', surname: 'Ирина', middleName: 'Антоновна', birthDate: new Date('1997-4-30'), yearAdmission: new Date('2017-9'), faculty: 'психология'},
  {name: 'Житомерская', surname: 'Дарья', middleName: 'Константиновна', birthDate: new Date('1994-6-29'), yearAdmission: new Date('2014-9'), faculty: 'психология'},
  {name: 'Мирских', surname: 'Серафим', middleName: 'Прокопьевич', birthDate: new Date('1999-12-31'), yearAdmission: new Date('2019-9'), faculty: 'психология'},
];

export { arrayStudentDefault };
