const arrayStudentDefault = [
  {surname: 'Артемьев', name: 'Андрей', middleName: 'Юрьевич', birthDate: new Date('1910-2-15'), yearAdmission: 2015, faculty: 'физика-математика'},
  {surname: 'Бармалейкин', name: 'Денис', middleName: 'Прокопьевич', birthDate: new Date('2001-6-8'), yearAdmission: 2021, faculty: 'физика-математика'},
  {surname: 'Букина', name: 'Ольга', middleName: 'Владимировна', birthDate: new Date('2000-5-5'), yearAdmission: 2020, faculty: 'физика-математика'},
  {surname: 'Вархамов', name: 'Антон', middleName: 'Денисович', birthDate: new Date('1995-11-3'), yearAdmission: 2016, faculty: 'физика-математика'},
  {surname: 'Гейт', name: 'Ольга', middleName: 'Раисовна', birthDate: new Date('1994-4-19'), yearAdmission: 2014, faculty: 'физика-математика'},
  {surname: 'Дегтярев', name: 'Василий', middleName: 'Афанасьевич', birthDate: new Date('2000-7-22'), yearAdmission: 2020, faculty: 'физика-математика'},
  {surname: 'Штурм', name: 'Галина', middleName: 'Васильевна', birthDate: new Date('2001-2-4'), yearAdmission: 2021, faculty: 'физика-математика'},
  {surname: 'Яковлева', name: 'Мария', middleName: 'Семеновна', birthDate: new Date('1999-12-6'), yearAdmission: 2019, faculty: 'физика-математика'},
  {surname: 'Зенкова', name: 'Наталья', middleName: 'Владимировна', birthDate: new Date('1997-1-4'), yearAdmission: 2018, faculty: 'физика-математика'},
  {surname: 'Арефьев', name: 'Петр', middleName: 'Виниаминович', birthDate: new Date('1980-1-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Арефьев', name: 'Иван', middleName: 'Денисович', birthDate: new Date('1980-4-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Алешин', name: 'Виктор', middleName: 'Абрамович', birthDate: new Date('1980-6-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Штейн', name: 'Кантор', middleName: 'Вольфович', birthDate: new Date('1980-12-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Побратимов', name: 'Сергей', middleName: 'Геннадьевич', birthDate: new Date('1980-10-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Арефьев', name: 'Петр', middleName: 'Савельевич', birthDate: new Date('1980-5-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Корейко', name: 'Трофим', middleName: 'Владимирович', birthDate: new Date('1980-5-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Поддубный', name: 'Михаил', middleName: 'Потапович', birthDate: new Date('1980-5-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Арчевский', name: 'Артур', middleName: 'Измайлович', birthDate: new Date('1980-8-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Книфф', name: 'Илья', middleName: 'Данилович', birthDate: new Date('1980-4-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Войцеховский', name: 'Абрам', middleName: 'Абрамович', birthDate: new Date('1980-4-1'), yearAdmission: 2000, faculty: 'физика-математика'},
  {surname: 'Житомерская', name: 'Дарья', middleName: 'Константиновна', birthDate: new Date('1994-6-29'), yearAdmission: 2014, faculty: 'психология'},
  {surname: 'Огарков', name: 'Петр', middleName: 'Васильевич', birthDate: new Date('1996-9-28'), yearAdmission: 2017, faculty: 'физика-математика'},
  {surname: 'Бабаев', name: 'Дмитрий', middleName: 'Иванович', birthDate: new Date('1998-12-18'), yearAdmission: 2019, faculty: 'физика-математика'},
  {surname: 'Витте', name: 'Виктор', middleName: 'Оттович', birthDate: new Date('1999-11-27'), yearAdmission: 2018, faculty: 'филология'},
  {surname: 'Гильберт', name: 'Анна', middleName: 'Михайловна', birthDate: new Date('1974-6-12'), yearAdmission: 2000, faculty: 'филология'},
  {surname: 'Дудко', name: 'Елена', middleName: 'Артемьевна', birthDate: new Date('2000-3-16'), yearAdmission: 2020, faculty: 'филология'},
  {surname: 'Ежова', name: 'Олеся', middleName: 'Владимировна', birthDate: new Date('1998-3-19'), yearAdmission: 2019, faculty: 'филология'},
  {surname: 'Астахова', name: 'Ксения', middleName: 'Яковлевна', birthDate: new Date('1996-4-27'), yearAdmission: 2016, faculty: 'филология'},
  {surname: 'Яковлева', name: 'Зинаида', middleName: 'Терентьевна', birthDate: new Date('1994-10-10'), yearAdmission: 2014, faculty: 'филология'},
  {surname: 'Джафаров', name: 'Даниил', middleName: 'Мухамедкамильевич', birthDate: new Date('2000-10-11'), yearAdmission: 2021, faculty: 'филология'},
  {surname: 'Камрадов', name: 'Илья', middleName: 'Петрович', birthDate: new Date('1991-7-20'), yearAdmission: 2010, faculty: 'филология'},
  {surname: 'Бабаян', name: 'Динара', middleName: 'Отар оглы', birthDate: new Date('1999-9-25'), yearAdmission: 2018, faculty: 'физика-математика'},
  {surname: 'Леманская', name: 'Анастасия', middleName: 'Викторовна', birthDate: new Date('1997-3-22'), yearAdmission: 2015, faculty: 'филология'},
  {surname: 'Зент', name: 'Виктория', middleName: 'Генриховна', birthDate: new Date('1999-6-14'), yearAdmission: 2019, faculty: 'филология'},
  {surname: 'Астафьева', name: 'Эливира', middleName: 'Иммануиловна', birthDate: new Date('1993-8-2'), yearAdmission: 2013, faculty: 'психология'},
  {surname: 'Бакланов', name: 'Кирилл', middleName: 'Динилович', birthDate: new Date('1999-3-15'), yearAdmission: 2020, faculty: 'психология'},
  {surname: 'Тарутин', name: 'Владимир', middleName: 'Иванович', birthDate: new Date('1993-7-11'), yearAdmission: 2015, faculty: 'психология'},
  {surname: 'Комлев', name: 'Павел', middleName: 'Аркадьевич', birthDate: new Date('2000-12-25'), yearAdmission: 2021, faculty: 'психология'},
  {surname: 'Семигорская', name: 'Наталья', middleName: 'Павловна', birthDate: new Date('1981-5-3'), yearAdmission: 2001, faculty: 'психология'},
  {surname: 'Цзян', name: 'Айдар', middleName: 'Фалеутович', birthDate: new Date('1995-1-19'), yearAdmission: 2016, faculty: 'психология'},
  {surname: 'Фиц', name: 'Антон', middleName: 'Михайлович', birthDate: new Date('1998-9-20'), yearAdmission: 2019, faculty: 'психология'},
  {surname: 'Данаев', name: 'Константин', middleName: 'Федорович', birthDate: new Date('1995-10-17'), yearAdmission: 2016, faculty: 'психология'},
  {surname: 'Секретная', name: 'Антонина', middleName: 'Геннадиевна', birthDate: new Date('1999-11-8'), yearAdmission: 2020, faculty: 'психология'},
  {surname: 'Смоляр', name: 'Ирина', middleName: 'Антоновна', birthDate: new Date('1997-4-30'), yearAdmission: 2017, faculty: 'психология'},
  {surname: 'Мирских', name: 'Серафим', middleName: 'Прокопьевич', birthDate: new Date('1999-12-31'), yearAdmission: 2019, faculty: 'психология'},
];

export { arrayStudentDefault };
