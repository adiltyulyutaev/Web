export interface Product{
  name : string,
  price : number,
  description : string
  link:string,
  img_link:string
  rating:number
  category_id:number;
  id:number;
}
export const products = [
  {
    id:1,
    name: 'Спортивная петля ремешок ',
    price: 3.48,
    description: 'apple watch band 42 мм 38 мм apple watch 4 3 band iwatch band 44 мм 40 мм correa pulseira 42 44 нейлоновый ремешок для часов',
    link:'https://aliexpress.ru/item/32946486146.html?spm=a2g0o.tm75978.4501445670.1.747d7294I6OeuY&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=91f22fbe-c5ec-457b-add4-cf0feba433ab',
    img_link:'https://ae01.alicdn.com/kf/Hc703c77c365441beb087b671c2c705770/apple-watch-band-42-38-apple-watch-4-3.jpg',
    rating:4.5,
    category_id:2
  },
  {
    id:2,
    name: 'DOM красные часы женские',
    price: 19.92,
    description: 'реативные кожаные женские водонепроницаемые часы женские часы Relogio Feminino Montre Femme LP-205',
    link:'https://aliexpress.ru/item/4000379073568.html?spm=a2g0o.tm75978.4501445670.2.747d7294I6OeuY&scm=1007.25281.150765.0&scm_id=1007.25281.150765.0&scm-url=1007.25281.150765.0&pvid=91f22fbe-c5ec-457b-add4-cf0feba433ab',
    img_link:'https://ae01.alicdn.com/kf/H2150f4b4b01440d0823345ac867f0f1fA/DOM.jpg',
    rating:4.7,
    category_id:1
  },
 {
   id:3,
    name: 'Ремешок из натуральной кожи для samsung Galaxy watch 46 мм',
    price: 8.09,
    description: 'Хохлатый кожаный ремешок S3 Frontier для samsung Galaxy watch 46 мм 22 мм',
    link:'https://aliexpress.ru/item/4000540443188.html?spm=a2g0v.12010615.8148356.1.454a61f10GlFdD',
    img_link:'https://ae01.alicdn.com/kf/Hbf45c1ef2e9c44dea8c947f121b68634F/samsung-Galaxy-watch-46-gear-S3.jpg_50x50.jpg',
    rating:4.9,
    category_id:4

  },
  {
    id:4,
    name: 'Хохлатый кожаный ремешок S3 Frontier для samsung Galaxy watch 46 мм 22 мм',
    price: 4.26,
    description: 'реативные кожаные женские водонепроницаемые часы женские часы Relogio Feminino Montre Femme LP-205',
    link:'https://aliexpress.ru/item/32812017338.html?spm=a2g0v.12010615.8148356.3.454a61f1Jmgr0E',
    img_link:'https://ae01.alicdn.com/kf/HTB19sDjjBDH8KJjSspnq6zNAVXaS/S3-Frontier-samsung-Galaxy-watch-46-22.jpg_50x50.jpg',
    rating:3.8,
    category_id:3
  },
  {
    id:5,
    name: 'Kuulee фигня громкоговоритель ',
    price: 3.74 ,
    description: 'Кнопка музыкальная шкатулка фигурка забавная игрушка в подарок игрушка',
    link:'https://aliexpress.ru/item/4000259391703.html?spm=a2g0o.productlist.0.0.516769502i9Otd&algo_pvid=32207f47-41e9-494b-b4ed-f25babea2fbd&algo_expid=32207f47-41e9-494b-b4ed-f25babea2fbd-16&btsid=0ab6f81e15814986416747314e7ff3&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    img_link:'https://ae01.alicdn.com/kf/Hff53e47c8d49441e911e7aa8c5f7e689C/Kuulee.jpg_50x50.jpg',
    rating:5.0,
    category_id:2
  },
  {
    id:6,
    name: 'Корпус задняя Батарея крышка с Камера объектив',
    price: 5.99,
    description: '(FIG-LX1 FIG-LA1 FIG-LX2 FIG-LX3)',
    link:'https://aliexpress.ru/item/4000495729388.html?spm=a2g0o.productlist.0.0.516769502i9Otd&algo_pvid=32207f47-41e9-494b-b4ed-f25babea2fbd&algo_expid=32207f47-41e9-494b-b4ed-f25babea2fbd-21&btsid=0ab6f81e15814986416747314e7ff3&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    img_link:'https://ae01.alicdn.com/kf/H11e3666f0e7e4b5cb56f7ea5d10ae7885/huawei-P-Smart-Enjoy-7S.jpg_50x50.jpg',
    rating:4.57,
    category_id:1
  },
  {
    id:7,
    name: 'Автомобильный полировщик 1200 Вт',
    price: 94,
    description: 'по хорошей цене Gs, ce, emc Сертифицированный и экспортный качественный оригинал от bosh Factory',
    link:'https://aliexpress.ru/item/32744916554.html?spm=a2g0o.productlist.0.0.447a39eeDkvvZG&algo_pvid=2ca4803c-eb2c-4368-b5a4-7f35ddc89463&algo_expid=2ca4803c-eb2c-4368-b5a4-7f35ddc89463-1&btsid=0ab6fab215814987977507410e9765&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    img_link:'https://ae01.alicdn.com/kf/HTB1vRKbNFXXXXaaXpXXq6xXFXXXQ/1200-Gs-ce-emc.jpg_50x50.jpg',
    rating:4.2,
    category_id:4
  },
  {
    id:8,
    name: 'Walker 30-118',
    price: 45,
    description: 'фильтр с высоким расходом инжектор топлива размер для верхних адаптеров и инжекторов Bosh EV1 EV6',
    link:'https://aliexpress.ru/item/33034027562.html?spm=a2g0o.productlist.0.0.447a39eeDkvvZG&algo_pvid=2ca4803c-eb2c-4368-b5a4-7f35ddc89463&algo_expid=2ca4803c-eb2c-4368-b5a4-7f35ddc89463-10&btsid=0ab6fab215814987977507410e9765&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    img_link:'https://ae01.alicdn.com/kf/HTB1Ndw0bgmH3KVjSZKzq6z2OXXai/Walker-30-118.jpg_50x50.jpg',
    rating:4.12,
    category_id:3
  },
  {
    id:9,
    name: '30 мл Хэллоуин трюки',
    price: 0.01,
    description: 'игрушки новинки жидкость пердит кляп шалость шутка спрей может вонять бомба вонючий газ хрень GK11.27',
    link:'https://aliexpress.ru/item/4000410296091.html?spm=a2g0o.productlist.0.0.3bd2623cCHSIoQ&algo_pvid=3fe28cf2-26c0-40ca-87d8-62e94167600a&algo_expid=3fe28cf2-26c0-40ca-87d8-62e94167600a-1&btsid=0ab6fab215814989430477498e9765&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    img_link:'https://ae01.alicdn.com/kf/H0c7f33d01e924998a6ea3ee5ad7f97bfT/30.jpg_50x50.jpg',
    rating:4.143,
    category_id:2

  },
  {
    id:10,
    name: 'новинка, пердеж, спрей, очень сильный',
    price: 2.65,
    description: 'попа, стример, пердеж, шалость, запах, спрей, кляп, детские игрушки для взрослых',
    link:'https://aliexpress.ru/item/33054389021.html?spm=a2g0o.productlist.0.0.3bd2623cCHSIoQ&algo_pvid=3fe28cf2-26c0-40ca-87d8-62e94167600a&algo_expid=3fe28cf2-26c0-40ca-87d8-62e94167600a-16&btsid=0ab6fab215814989430477498e9765&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    img_link:'https://ae01.alicdn.com/kf/HTB1286vXeP2gK0jSZFoq6yuIVXaU/HBB-1.jpg_50x50.jpg',
    rating:4.21,
    category_id:4
  }
  ];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
