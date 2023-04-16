import { defineStore } from "pinia";

export const useCarStore = defineStore('carStore', {
   state: () => ({
      listCars: [
         {
            id: 1,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/Porsche/1.jpg', import.meta.url),
               2: new URL('@/img/CarsCatalog/Porsche/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/Porsche/3.webp', import.meta.url),
               4: new URL('@/img/CarsCatalog/Porsche/4.jpeg', import.meta.url),
               5: new URL('@/img/CarsCatalog/Porsche/5.jpg', import.meta.url),
            },
            imgInterior: {
               1: new URL('@/img/CarsCatalog/Porsche/1i.jpg', import.meta.url),
               2: new URL('@/img/CarsCatalog/Porsche/2i.jpg', import.meta.url),
               3: new URL('@/img/CarsCatalog/Porsche/3i.jpg', import.meta.url),
               4: new URL('@/img/CarsCatalog/Porsche/4i.jpg', import.meta.url),
               5: new URL('@/img/CarsCatalog/Porsche/5i.jpg', import.meta.url),
            },
            wathcing: 8,
            make: 'Porsche',
            model: 'Panamera',
            title: 'Porsche Panamera II Turbo S E-Hybrid',
            link: 'car',
            price: 150000,
            year: '2012',
            bodyType: 'Sedan',
            transmission: 'Manual',
            kilometres: '1 000 kilometres',
            detail: [
               'Rear wheel drive',
               '6 cylinders',
               '11 l. per 100 km.',
               '2500-4000 rpm',
               '0-100 in 2.7 s.',
               'Seats 4 - 5',
               '325 - 690 horsepower',
               'Power steering'
            ],
            description: [
               'Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.',
               'The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model.'
            ]
         },
         {
            id: 2,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/Audi-A7/1.jpg', import.meta.url),
               2: new URL('@/img/CarsCatalog/Audi-A7/2.jpg', import.meta.url),
               3: new URL('@/img/CarsCatalog/Audi-A7/3.jpg', import.meta.url),
            },
            make: 'Audi',
            model: 'A7',
            title: 'Audi A7 I (4G) S-tronic',
            price: '23 500',
            year: '2015',
            bodyType: 'Trucks',
            transmission: 'Automatic',
            kilometres: '150 000 Kilometres'
         },
         {
            id: 3,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/AudiA7Sportback2017/1.webp', import.meta.url),
               2: new URL('@/img/CarsCatalog/AudiA7Sportback2017/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/AudiA7Sportback2017/3.webp', import.meta.url),
            },
            make: 'Audi',
            model: 'A7',
            title: 'Audi A7 Sportback 3.0 TDI quattro/S-Line',
            price: '35 500',
            year: '2014',
            bodyType: 'SUV',
            transmission: 'Automatic',
            kilometres: '96 800 kilometres',
         },
         {
            id: 4,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/AudiQ5/1.webp', import.meta.url),
               2: new URL('@/img/CarsCatalog/AudiQ5/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/AudiQ5/3.webp', import.meta.url),
            },
            make: 'Audi',
            model: 'Q5',
            title: 'Audi Q5 2.0 TFSI quattro',
            price: '65 000',
            year: '2012',
            bodyType: 'Hatchback',
            transmission: 'Manual',
            kilometres: '145 000 kilometres',
         },
         {
            id: 5,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/AudiQ52017/1.webp', import.meta.url),
               2: new URL('@/img/CarsCatalog/AudiQ52017/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/AudiQ52017/3.webp', import.meta.url),
            },
            make: 'Audi',
            model: 'Q5',
            title: 'Audi Q5 S Line TDi Quattro S-A 2.0',
            price: '35 000',
            year: '2017',
            bodyType: 'Coupe',
            transmission: 'Manual',
            kilometres: '105 000 kilometres',
         },
         {
            id: 6,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/Mercedes-BenzCLAI/1.jpg', import.meta.url),
               2: new URL('@/img/CarsCatalog/Mercedes-BenzCLAI/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/Mercedes-BenzCLAI/3.webp', import.meta.url),
               4: new URL('@/img/CarsCatalog/Mercedes-BenzCLAI/4.webp', import.meta.url),
            },
            make: 'Mercedes-Benz',
            model: 'CLAI',
            title: 'Mercedes-Benz CLA I (C117, X117) 200 More information',
            price: '150 000',
            year: '2018',
            bodyType: 'Convertiable',
            transmission: 'Automatic',
            kilometres: '20 000 kilometres',
         },
         {
            id: 7,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/Mercedes-BenzMercedes-BenzE-ClassIII/1.jpg', import.meta.url),
               2: new URL('@/img/CarsCatalog/Mercedes-BenzMercedes-BenzE-ClassIII/2.jpeg', import.meta.url),
               3: new URL('@/img/CarsCatalog/Mercedes-BenzMercedes-BenzE-ClassIII/3.jpg', import.meta.url),
            },
            make: 'Mercedes-Benz',
            model: 'Class III',
            title: 'Mercedes-Benz E-Class III (W211, S211) Restyling 230',
            price: '125 000',
            year: '2012',
            bodyType: 'Sedan',
            transmission: 'Automatic',
            kilometres: '50 000 kilometres',
         },
         {
            id: 8,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/Mercedes-BenzW124-420/1.jpg', import.meta.url),
               2: new URL('@/img/CarsCatalog/Mercedes-BenzW124-420/2.jpg', import.meta.url),
               3: new URL('@/img/CarsCatalog/Mercedes-BenzW124-420/3.jpg', import.meta.url),
            },
            make: 'Mercedes-Benz',
            model: 'W124',
            title: 'Mercedes-Benz W124 420',
            price: '3 500',
            year: '1987',
            bodyType: 'Sedan',
            transmission: 'Manual',
            kilometres: '550 000 kilometres',
         },
         {
            id: 9,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/MitsubishiOutlander/1.jpg', import.meta.url),
               2: new URL('@/img/CarsCatalog/MitsubishiOutlander/2.jpg', import.meta.url),
               3: new URL('@/img/CarsCatalog/MitsubishiOutlander/3.jpg', import.meta.url),
               4: new URL('@/img/CarsCatalog/MitsubishiOutlander/4.jpg', import.meta.url),
            },
            make: 'Mitsubishi',
            model: 'Outlander',
            title: 'Mitsubishi Outlander PHEV',
            price: '18 000',
            year: '2018',
            bodyType: 'SUV',
            transmission: 'Automatic',
            kilometres: '68 000 kilometres',
         },
         {
            id: 10,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/MitsubishiOutlander2.0/1.webp', import.meta.url),
               2: new URL('@/img/CarsCatalog/MitsubishiOutlander2.0/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/MitsubishiOutlander2.0/3.webp', import.meta.url),
            },
            make: 'Mitsubishi',
            model: 'Outlander',
            title: 'MITSUBISHI OUTLANDER 2.0 CVT INVITE',
            price: '17 000',
            year: '2018',
            bodyType: 'SUV',
            transmission: 'Automatic',
            kilometres: '91 000 kilometres',
         },
         {
            id: 11,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/MitsubishiOutlanderBlack/1.webp', import.meta.url),
               2: new URL('@/img/CarsCatalog/MitsubishiOutlanderBlack/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/MitsubishiOutlanderBlack/3.webp', import.meta.url),
            },
            make: 'Mitsubishi',
            model: 'Outlander',
            title: 'Mitsubishi Outlander (ZK MY16) LS wagon',
            price: '18 200',
            year: '2019',
            bodyType: 'SUV',
            transmission: 'Manual',
            kilometres: '91 000 kilometres',
         },
         {
            id: 12,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/Porsche-Cayenne/2.webp', import.meta.url),
               2: new URL('@/img/CarsCatalog/Porsche-Cayenne/1.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/Porsche-Cayenne/3.webp', import.meta.url),
            },
            make: 'Porsche',
            model: 'Cayenne',
            title: 'Porsche Cayenne V8 Turbo',
            price: '102 000',
            year: '2021',
            bodyType: 'SUV',
            transmission: 'Manual',
            kilometres: '22 000 kilometres',
         },
         {
            id: 13,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/Porsche/1.jpg', import.meta.url),
               2: new URL('@/img/CarsCatalog/Porsche/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/Porsche/3.webp', import.meta.url),
               4: new URL('@/img/CarsCatalog/Porsche/4.jpeg', import.meta.url),
            },
            make: 'Porsche',
            model: 'Panamera',
            title: 'Porsche Panamera II Turbo S E-Hybrid  ',
            price: '38 000',
            year: '2012',
            bodyType: 'Sedan',
            transmission: 'Automatic',
            kilometres: '550 000 kilometres',
         },
         {
            id: 14,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/Porsche911Targa/1.webp', import.meta.url),
               2: new URL('@/img/CarsCatalog/Porsche911Targa/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/Porsche911Targa/3.webp', import.meta.url),
            },
            make: 'Porsche',
            model: '911',
            title: 'Porsche 911 Targa 4 GTS ',
            price: '88 000',
            year: '2016',
            bodyType: 'Sedan',
            transmission: 'Automatic',
            kilometres: '125 000 kilometres',
         },
         {
            id: 15,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/PorscheMacan/1.webp', import.meta.url),
               2: new URL('@/img/CarsCatalog/PorscheMacan/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/PorscheMacan/3.webp', import.meta.url),
            },
            make: 'Porsche',
            model: 'Macan',
            title: 'PORSCHE MACAN GTS',
            price: '90 300',
            year: '2022',
            bodyType: 'SUV',
            transmission: 'Manual',
            kilometres: '5 000 kilometres',
         },
         {
            id: 16,
            imgExterior: {
               1: new URL('@/img/CarsCatalog/PorscheMacanBlue/1.webp', import.meta.url),
               2: new URL('@/img/CarsCatalog/PorscheMacanBlue/2.webp', import.meta.url),
               3: new URL('@/img/CarsCatalog/PorscheMacanBlue/3.webp', import.meta.url),
            },
            make: 'Porsche',
            model: 'Macan',
            title: '	Porsche Macan (95B) ',
            price: '92 000',
            year: '2022',
            bodyType: 'SUV',
            transmission: 'Manual',
            kilometres: '10 000 kilometres',
         },
      ],
      activeCarId: 0,
      showingCar: false,
   }),
   actions: {
      showCar(param) {
         this.showingCar = param;
      },
   },

}) 