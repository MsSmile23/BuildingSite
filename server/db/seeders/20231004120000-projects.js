'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Projects',
      [
        {
          name: 'Блэк',
          price: '9.4',
          floor: 'Мансарда',
          size: 187,
          material: 'Дерево',
          about:
            'Просторный загородный дом Блэк для ценителей современных тенденций. Коттедж привлекает большое внимание своим необычным экстерьером. Проект идеально подойдет тем, кто любит интересные архитектурные решения и ноу-хау. ' +
            'В доме предусмотрены большие окна, что позволит наполнить внутреннее пространство коттеджа естественным освещением. Несмотря на экстравагантный внешний вид, планировка хорошо продумана и дом прекрасно подойдет для постоянного комфортного проживания за городом. ' +
            'Коттедж подходит для большой семьи и включает в себя: большую гостиную-кухню-столовую, 3 спальни, 2 санузла и гардеробную комнату. Одну из спален можно использовать как кабинет. В гостиной можно расположить камин и тепло проводить время в кругу родных и друзей. Гости и сами хозяева придут в восторг от террасы, на которой можно разместить обеденный стол и ужинать на улице, вкушая все прелести загородной жизни.',
          wardrobe: 1,
          bathroom: 2,
          bedroom: 3,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Black-plan1.jpg',
            'http://localhost:5173/plansImg/Black-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Эктор',
          price: '11.2',
          floor: '2',
          size: 257,
          material: 'Кирпич',
          about:
            'Просторный коттедж с максимально продуманной планировкой.' +
            'Загородный дом в светло-бежевых оттенках в сочетании с кровлей цвета темное бордо – самое беспроигрышное решение для любителей эстетики и современности.' +
            'Этот коттедж отлично подойдет для семейного проживания: проект дома предполагает просторную кухню-гостиную, пять спален и три санузла, но главная особенность дома – это сауна, в которой можно расслабиться на выходных или после тяжелого рабочего дня одному или в компании приятелей.' +
            'Дополнительным комфортом для жильцов послужит терраса, а большие окна наполняют комнаты естественным освещением и уютом.',
          wardrobe: 4,
          bathroom: 4,
          bedroom: 5,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Ektor-plan1.jpg',
            'http://localhost:5173/plansImg/Ektor-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Эльба',
          price: '7.8',
          floor: 'Мансарда',
          size: 164,
          material: 'Кирпич',
          about:
            'Проект дома Эльба специально для тех, кто любит дневной свет и простор.' +
            'В этом загородном доме большие окна в пол и вместительные комнаты. На втором этаже три спальни и очень большой совмещенный санузел с окном. Принимать ванну и смотреть на падающие листья или снег мечта романтиков. Порадует и кладовая, в которую после праздников можно спрятать, например, новогоднюю елку или детские игрушки.' +
            'Первый этаж такой же светлый и продуманный. Компактную комнату со встроенным шкафом можно использовать как спальню или кабинет. Кухня-гостиная несомненно станет любимым местом всей семьи. Простые формы, большой метраж и панорамные окна с выходом на свежий воздух. Ваш сад станет естественным продолжением дома. Зимой камин добавит уюта и сделает каждый вечер семейным торжеством. А летом вся жизнь переместится на открытую террасу. Компактный санузел удобно расположен рядом с входом. Подсобное помещение и прихожая образуют единое пространство с двумя выходами на небольшую террасу с навесом. Дом для постоянного проживания должен быть удобен со всех сторон.',
          wardrobe: 1,
          bathroom: 2,
          bedroom: 4,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Elba-plan1.jpg',
            'http://localhost:5173/plansImg/Elba-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Эрика',
          price: '9.85',
          floor: '2',
          size: 303,
          material: 'Кирпич',
          about:
            'Загородный дом в стиле минимализм.' +
            'Великолепный вариант для поклонников современности и авторского дизайна. Этот проект имеет необычный внешний вид, а также нестандартный фасад и по комфорту ничем не уступает классическому загородному жилью.' +
            'Панорамное остекление делает коттедж еще более привлекательным, позволяя обогатить внутреннее пространство дома солнечным светом.' +
            'Проект дома предполагает большую гостиную, объединенную с кухней, шесть спален, гардеробную и кладовую, три санузла и подсобные помещения, просторную террасу и балкон. Если вы творческий человек, для которого нестандартность – это стиль жизни, тогда этот дом идеально вам подойдет. Здесь можно устроить большую площадку для творчества: организовывать фотосессии внутри и снаружи коттеджа, а можно на мольберте нарисовать авторский пейзаж с домом, который будет красоваться на стене в гостиной.' +
            'Бесспорно, этот дом для постоянного проживания полюбит тот, кто предпочитает нетривиальную архитектуру и дизайнерский решения.',
          wardrobe: 3,
          bathroom: 4,
          bedroom: 4,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Erikka-plan1.jpg',
            'http://localhost:5173/plansImg/Erikka-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Фора',
          price: '7.3',
          floor: '1',
          size: 205,
          material: 'Дерево',
          about:
            'Современный коттедж Фора для большой семьи.' +
            'Этот дом создан для любителей уютных и атмосферных финских одноэтажных построек. Он оснащен системой «Безопасный дом», есть центральное водоснабжение и канализация. Проведены благоустройство территории и ландшафтные работы. Отопление — водяные тёплые полы, установлена система рекуперации воздуха.' +
            'С просторного крыльца мы попадаем в прихожую. Из коридора выход на две комнаты, напротив санузел с душевой — очень удобно. Дом оборудован сауной.' +
            'Кухня-столовая соединена с гостиной — здесь высокие потолки создают огромное воздушное помещение! Прямо из кухни вы попадёте на крытую террасу, где можно уютно посидеть утром с чашечкой кофе. Хозяйская спальня — полностью приватная зона со своей ванной комнатой и гардеробной.' +
            'В общее пространство дома входит и гаражное место с навесом и внушительный хозяйственный блок, где поместятся не только бытовые мелочи, но и садовые принадлежности и спортивный инвентарь.',
          wardrobe: 2,
          bathroom: 2,
          bedroom: 3,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Fora-plan1.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Карелия',
          price: '6.2',
          floor: 'Мансарда',
          size: 163,
          material: 'Дерево',
          about:
            'Проект Карелия - просторный дом, в котором есть все необходимое для постоянного проживания.' +
            'Второй этаж – это две комнаты и просторный холл, который при желании можно превратить в родительскую спальню с большой гардеробной. Совмещенный санузел и балкон на всю ширину дома. Что может быть лучше утренней чашки кофе, когда все домашние еще спят?' +
            'На первом этаже еще одна комната. Возможно, это спальня бабушки и дедушки, а может - кабинет, мастерская или спортзал. Угловая кухня с мойкой у окна, разве не чудесно смотреть на свой ухоженный ландшафт пока вы занимаетесь домашними делами? И просторная гостиная, в которой так уютно собираться семейными вечерами, играть в «Мафию» или смотреть хороший фильм. И, конечно, терраса станет вашим любимым местом летними днями. В хорошую погоду она превращается в центр дома. Сделать барбекю или почитать детям книжку, поболтать с подругой или устроить мужской серьезный разговор.',
          wardrobe: 1,
          bathroom: 2,
          bedroom: 3,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Karelia-plan1.jpg',
            'http://localhost:5173/plansImg/Karelia-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Лори',
          price: '5.6',
          floor: '1',
          size: 145,
          material: 'Дерево',
          about:
            'Одноэтажный проект загородного дома Лори – воплощение мечты любителей скандинавской классики.' +
            'Строгие линии, большие окна, естественные оттенки в оформлении фасадов.' +
            'Центр этого финского дома – огромная гостиная-столовая-кухня. Камин вечерами соберет вокруг себя всю семью. Хозяйка оценит рабочую поверхность у большого окна, а гости придут в восторг от панорамного выхода на террасу, которая по размеру равна самой гостиной. Комфорт этого скандинавского дома в использовании экологически чистых материалов и новейших технологий энергосбережения.' +
            'Из центрального помещения дома можно попасть в две просторные комнаты, это могут быть спальни или кабинет с библиотекой. А также в хозяйскую спальню с отдельным санузлом и гардеробной комнатой. Дом предназначен для постоянного проживания и удивительно органично вписывается в ландшафт в любое время года.',
          wardrobe: 1,
          bathroom: 1,
          bedroom: 2,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Lorry-plan1.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Модо',
          price: '9.8',
          floor: '2',
          size: 264,
          material: 'Кирпич',
          about:
            'Комфорт, стиль, дизайн.' +
            'Этот роскошный коттедж удовлетворит самые изысканные предпочтения. Проект дома был создан с дизайнерским подходом: он совместил в себе оптимальную структуру жизненного пространства и комфортные условия загородной жизни.' +
            'Первый этаж совмещает просторную кухню-столовую и гостиную, так же здесь расположен санузел и вместительное подсобное помещение. Второй этаж подарит своим жильцам качественный отдых и здоровый сон. Здесь расположились две детские комнаты и огромная хозяйская спальня, в которую включены: индивидуальная гардеробная и отдельный санузел, а так же полноценный крытый балкон. Несмотря на то, что дети «под боком», родители будут иметь достаточно личного пространства.' +
            'Проект дома выполнен не только с точки зрения эстетики, но и спроектирован максимально рационально и удобно. В коттедже предусмотрен навес для автомобиля, чтобы всем в загородном доме было хорошо.',
          wardrobe: 2,
          bathroom: 3,
          bedroom: 4,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Modo-plan1.jpg',
            'http://localhost:5173/plansImg/Modo-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Норв',
          price: '12.1',
          floor: '1',
          size: 251,
          material: 'Дерево',
          about:
            'Ультра современный коттедж.' +
            'Комфортный дом в стиле барн-хаус, который сегодня находится на пике популярности. Отличный вариант для ценителей современного дизайна. Строгий минималистичный фасад и панорамные окна станут поводом влюбляться в этот дом снова и снова.' +
            'Главное помещение дома - просторная кухня-гостиная с высоким потолком и большой площадью остекления. Здесь мы предусмотрели зону второго света - довольно редкое решение для одноэтажных коттеджей. Два ряда окон обеспечат великолепную панораму приусадебного участка, наполнят дом естественным светом и придадут пространству дополнительный объем.' +
            'Кухня-гостиная - самое семейное место в доме. Здесь можно готовить еду, устраивать совместные ужины за большим столом, собираться за просмотром фильмов, играть в настольные игры, принимать гостей.',
          wardrobe: 2,
          bathroom: 3,
          bedroom: 3,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Norv-plan1.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Риетти',
          price: '9.1',
          floor: '2',
          size: 180,
          material: 'Кирпич',
          about:
            'Уютный дом в современном стиле для молодой семьи.' +
            'Продуманный проект дома Риетти позволяет реализовать коттедж максимально комфортным для постоянного проживания. На верхнем этаже могут располагаться: удобная спальня, где хозяева будут отдыхать, кабинет и две детские комнаты, внизу размещается гостевая зона, в которую входят кухня-столовая, гостиная, спальня и подсобное помещение.' +
            'В силу того, что по своим размерам дом весьма компактный – это уменьшит расходы на эксплуатацию дома, и это является неоспоримым плюсом для хозяев. Коттедж подарит своим домашним заботу, тепло и тишину.По желанию можно поставить небольшой камин в кухню-столовую или гостиную, где холодными зимними вечерами всей семьей можно пить вкуснейший, с фруктами и пряностями, глинтвейн собственного приготовления.',
          wardrobe: 3,
          bathroom: 3,
          bedroom: 3,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Rieti-plan1.jpg',
            'http://localhost:5173/plansImg/Rieti-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Сканди-1',
          price: '9.1',
          floor: '2',
          size: 149,
          material: 'Дерево',
          about:
            'Современный коттедж Сканди-1 - воплощение норвежского стиля.' +
            'Просторный загородный дом для постоянного проживания будет в радость тем, кто прагматично подходит к вопросу покупки жилья, ценит практичность и скандинавские технологии. Коттедж идеально подойдет для семьи с двумя и более детьми, основное преимущество проекта - большая семейная зона. Такая планировка позволит собирать всех домочадцев за ежедневным завтраком, настольными играми и теплыми беседами вечерами.' +
            'Планировочное решение кухни-гостиной-столовой позволяет отделить зону кухни, а также сделать отдельную стойку для завтраков. На первом этаже есть комната, которую можно использовать как гостевую или кабинет. На втором этаже есть две полноценные спальни, санузел и большой холл, который можно разделить перегородкой и легко создать ещё одну комнату, например, свою мастерскую.',
          wardrobe: 1,
          bathroom: 2,
          bedroom: 4,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Scandy1-plan1.jpg',
            'http://localhost:5173/plansImg/Scandy1-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Сканди-2',
          price: '8.3',
          floor: '1',
          size: 182,
          material: 'Дерево',
          about:
            'Стильный и просторный коттедж Сканди-2 - воплощение европейских тенденций.' +
            'Комфортный дом в финском стиле с функциональной планировкой. Великолепный вариант для поклонников одноэтажных коттеджей. Планировка дома продумана до мелочей. Каждый квадратный метр функционален и работает на комфорт жильцов.' +
            'Центральное помещение коттеджа - большая гостиная с панорамным остеклением и высоким потолком. Здесь будет приятно собраться семейным кругом или провести время с друзьями. Треск дров в камине и тепло живого огня помогут создать здесь неповторимую атмосферу. Рядом с гостиной располагается очень светлая кухня-столовая с выходом на террасу. Здесь легко поместится кухонный гарнитур, бытовая техника и стол.' +
            'В коттедже три спальни, каждая из которых оснащена собственной гардеробной для удобного хранения одежды и других вещей. Еще одна гардеробная расположена в прихожей.' +
            'В Сканди учтен один из главных трендов европейских коттеджей - наличие окон в каждом помещении. Это обеспечивает хорошее естественное освещение и помогает экономить на электроэнергии.' +
            'Проектом предусмотрена просторная крытая терраса. Здесь можно поставить обеденный стол и кресло для чтения, создав тем самым уютное пространство на свежем воздухе.',
          wardrobe: 1,
          bathroom: 2,
          bedroom: 3,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Scandy2-plan1.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шале',
          price: '9.1',
          floor: '2',
          size: 244,
          material: 'Кирпич',
          about:
            'Роскошный скандинавский дом в стиле шале, идеально подойдет для большой семьи.' +
            'Коттедж не только привлекает внимание своей стильной архитектурой, он очень функционален и комфортабелен внутри. Первый этаж спроектирован в классической манере стиля шале, где основную часть площади занимает гостиная, соединенная в единое пространство со столовой зоной приготовления пищи.' +
            'Наверху расположены четыре просторные и светлые комнаты, их назначение может быть абсолютно любым - на усмотрение владельцев. Изюминкой проекта является крытая терраса с камином, который позволит уютно провести вечер в кругу близких и родных людей.',
          wardrobe: 2,
          bathroom: 3,
          bedroom: 2,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Shale-plan1.jpg',
            'http://localhost:5173/plansImg/Shale-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Стоун',
          price: '9.1',
          floor: 'Мансарда',
          size: 292,
          material: 'Дерево',
          about:
            'Загородный дом в классическом скандинавском стиле, выглядит очень основательно и солидно.' +
            'Терраса очень просторная, и это большой плюс, т.к. при таком метраже ее можно обустроить как захочется: тюфяки положить, диванчики, стол или качели можно уютно расположить на летнее время. Навес надежно защищает от снега и дождя.' +
            'Окна во всю высоту украшают гостиную и просторный холл на втором этаже. Чем больше света – тем ярче дом снаружи и внутри. Такой дом идеально подойдет для большой и дружной семьи.' +
            'В проекте предусмотрена просторная столовая, где будет комфортно не только домашним, но и гостям. Поверьте: каждый, кто придет в ваш уютный и одновременно - просторный дом, будет восхищен.',
          wardrobe: 3,
          bathroom: 3,
          bedroom: 5,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Stone-plan1.jpg',
            'http://localhost:5173/plansImg/Stone-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Суоми',
          price: '8.1',
          floor: 'Мансарда',
          size: 204,
          material: 'Дерево',
          about:
            'Загородный дом в лучших скандинавских традициях.' +
            'Сразу две спальни, кабинет и холл с панорамными окнами на втором этаже. Вечерами оттуда очень хорошо видно звезды. Света от окон хватит и для зимнего сада. При желании вместо холла можно оборудовать детскую или еще одну спальню. Удобный компактный санузел расположен рядом с лестницей. И сразу под ним большой СПА-комплекс с туалетом, душевыми и сауной. Ваши гости оценят, ведь рядом на первом этаже угловая гостевая комната, где они смогут отдохнуть.' +
            'Проект дома сделан так, что кухня-столовая плавно переходит в уютную гостиную с камином, которая несомненно станет местом притяжения для всей семьи. По вечерам в ней удобно собираться, чтобы поиграть, а летом центр дома переместится на просторную террасу, где можно устраивать семейные обеды или встречать гостей с барбекю. В шкафах большой прихожей хватит места для всех вещей. А просторное крыльцо не даст намокнуть под дождем пока открываете дверь.',
          wardrobe: 1,
          bathroom: 2,
          bedroom: 4,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Suomi-plan1.jpg',
            'http://localhost:5173/plansImg/Suomi-plan2.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Викинг',
          price: '8.7',
          floor: '1',
          size: 197,
          material: 'Дерево',
          about:
            'Стильный коттедж Викинг со вторым светом - комфорт и простор.' +
            'Викинг  - отличный вариант для поклонников просторных одноэтажных домов с функциональными планировками.' +
            'Сердце коттеджа - гостиная с высоким потолком и большой площадью остекления в два ряда. За счет такого решения здесь всегда много естественного света и открывается великолепный обзор на участок. Идеальное место для досуга с семьей и встреч с друзьями. Особую атмосферу гостиной придает камин.' +
            'Кухня-столовая - пространство для кулинарных экспериментов и совместных трапез за большим столом. А на случай если вы захотите выпить кофе на свежем воздухе, мы предусмотрели удобный выход на террасу. Чтобы хозяйка смогла сэкономить место в шкафах,  в кухне есть  кладовая. Здесь удобно хранить крупы, овощи и соления, а также технику, которой не пользуетесь каждый день.' +
            'Проектом предусмотрены три просторные спальни, в каждой их которых  своя гардеробная. В  хозяйской спальне есть также собственный  санузел с душевой.',
          wardrobe: 1,
          bathroom: 3,
          bedroom: 3,
          plan: JSON.stringify([
            'http://localhost:5173/plansImg/Viking-plan1.jpg',
          ]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
