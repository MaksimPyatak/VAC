<template>
   <div class="car-catalog">
      <div class="car-catalog__container _container">
         <div class="car-catalog__filters-box" :class="{'_active': isActive}">
            <div class="car-catalog__title-box">
               <div class="car-catalog__title">
                  <div class="car-catalog__criss-cross" @click="menuStore.close()">
                     <img src="../img/icons/Close.svg" alt="Close">
                  </div>
                  <p> Detailed search</p>
               </div>
               <div v-if="true" class="car-catalog__clear" @click="">
                  Clear filters
               </div>
            </div>
            <div class="car-catalog__filters">
               <div class="car-catalog__make-model">
                  <Accordeon @openAccordeon="openMakeModel = !openMakeModel">
                     <template v-slot:title>  
                        Make, Model
                     </template>
                     <template v-slot:tag>
                        <div class="car-catalog__used-filters">
                           <Tag v-if="!openMakeModel" :filters="makeFilter">
                              {{ makeFilter }}
                           </Tag>
                           <Tag v-if="!openMakeModel" :filters="makeFilter">
                              {{ makeFilter }}
                           </Tag>
                        </div>
                     </template>
                     <template v-slot:content>
                        <label class="car-catalog__label label__make" for="make">
                           Make
                        </label>
                        <div class="car-catalog__input-box">
                           <img src="../img/icons/Search.svg" alt="Search" class="car-catalog__input-icon">
                           <input class="car-catalog__input-text input__make" 
                              type="text" 
                              name="make" 
                              id="make" 
                              v-model="makeValue" 
                              placeholder="Search Make..."
                              autocomplete="off"
                              >
                           <div v-if="activeMake" class="car-catalog__input-select">
                              <div class="car-catalog__select-item">Pensil</div>
                              <div class="car-catalog__select-opacity "></div>
                           </div>
                        </div>
                        <div class="car-catalog__selectid-in-input">
                           <Tag v-if="openMakeModel">
                              {{ makeFilter}}
                           </Tag>
                           <Tag v-if="openMakeModel">
                              {{ makeFilter}}
                           </Tag>
                           <Tag v-if="openMakeModel">
                              {{ makeFilter}}
                           </Tag>   
                        </div>  
                        <label class="car-catalog__label label__model" for="model">
                           Model
                        </label>
                        <div class="car-catalog__input-box">
                           <img src="../img/icons/Search.svg" alt="Search" class="car-catalog__input-icon">
                           <input class="car-catalog__input-text input__model" 
                              type="text" 
                              name="model" 
                              id="model" 
                              v-model="makeValue" placeholder="Search Model..."
                              autocomplete="off"
                           >
                           <div v-if="activeModel" class="car-catalog__input-select">
                              <div class="car-catalog__select-item">Pensil</div>

                              <div class="car-catalog__select-opacity "></div>
                           </div>
                        </div> 
                        <div class="car-catalog__selectid-in-input">
                           <Tag v-if="openMakeModel">
                              {{ makeFilter}}
                           </Tag>
                        </div>  
                     </template>
                  </Accordeon>
               </div>
               <div class="car-catalog__body-type">
                  <Accordeon @openAccordeon="openBodyType = !openBodyType">
                     <template v-slot:title>
                        Body type
                     </template>
                     <template v-slot:tag >
                        <div class="car-catalog__used-filters">
                           <Tag v-if="!openBodyType" :filters="makeFilter">
                              {{ makeFilter }}
                           </Tag>
                        </div>
                     </template>
                     <template v-slot:content>
                        <fieldset>
                           <div class="car-catalog__checkbox">
                              <label class="car-catalog__label-checkbox" for="trucks">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox" 
                                    id="trucks" 
                                    name="body-type" 
                                    value="trucks" 
                                    v-model='checkbox.trucks' 
                                 />
                                 <img src="../img/icons/TruckIcon.svg" alt="Truck icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    Trucks
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox">
                              <label class="car-catalog__label-checkbox" for="suv">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox"
                                    id="suv" 
                                    name="body-type" 
                                    value="suv" 
                                    v-model='checkbox.suv' 
                                 />
                                 <img src="../img/icons/SUVIcon.svg" alt="SUV icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    SUV
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox">
                              <label class="car-catalog__label-checkbox" for="sedan">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox"
                                    id="sedan" 
                                    name="body-type" 
                                    value="sedan" 
                                    v-model='checkbox.sedan' 
                                 />
                                 <img src="../img/icons/SedanIcon.svg" alt="Sedan icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    Sedan
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox">
                              <label class="car-catalog__label-checkbox" for="hatchback">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox"
                                    id="hatchback" 
                                    name="body-type" 
                                    value="hatchback" 
                                    v-model='checkbox.hatchback' 
                                 />
                                 <img src="../img/icons/HatchbackIcon.svg" alt="Hatchback icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    Hatchback
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox">
                              <label class="car-catalog__label-checkbox" for="coupe">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox"
                                    id="coupe" 
                                    name="body-type" 
                                    value="coupe" 
                                    v-model='checkbox.coupe' 
                                 />
                                 <img src="../img/icons/CoupeIcon.svg" alt="Coupe icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    Coupe
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox">
                              <label class="car-catalog__label-checkbox" for="convertiable">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox"
                                    id="convertiable" 
                                    name="body-type" 
                                    value="convertiable" 
                                    v-model='checkbox.convertiable' 
                                 />
                                 <img src="../img/icons/ConvertiableIcon.svg" alt="Convertiable icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    Convertiable
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox">
                              <label class="car-catalog__label-checkbox" for="van">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox"
                                    id="van" 
                                    name="body-type" 
                                    value="van" 
                                    v-model='checkbox.van' 
                                 />
                                 <img src="../img/icons/VANIcon.svg" alt="VAN icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    VAN
                                 </div> 
                              </label>
                           </div>
                        </fieldset>
                        <div class="car-catalog__selectid-in-input">
                           <Tag v-if="openBodyType">
                              {{ checkboxSuv }}
                           </Tag>
                           <Tag v-if="openBodyType">
                              {{ checkbox.sunValue}}
                           </Tag>
                           <Tag v-if="openBodyType">
                              {{ makeFilter}}
                           </Tag>
                        </div>
                     </template>
                  </Accordeon>
               </div>
               <div class="car-card__transmission">
                  <Accordeon @openAccordeon="openTransmission = !openTransmission">
                     <template v-slot:title>
                        Transmission
                     </template>
                     <template v-slot:tag>
                        <div class="car-catalog__used-filters">
                           <Tag v-if="!openTransmission" :filters="makeFilter">
                              {{ makeFilter }}
                           </Tag>
                        </div>
                     </template>
                     <template v-slot:content>
                        <fieldset>
                           <div class="car-catalog__checkbox">
                              <label class="car-catalog__label-checkbox" for="automatic">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox" 
                                    id="automatic" 
                                    name="transmission" 
                                    value="automatic" 
                                 />
                                <div class="car-catalog__label-text">
                                    Automatic
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox">
                              <label class="car-catalog__label-checkbox" for="manual">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox"
                                    id="manual" 
                                    name="transmission" 
                                    value="manual" 
                                 />
                                <div class="car-catalog__label-text">
                                    Manual
                                 </div> 
                              </label>
                           </div>
                        </fieldset>
                        <div class="car-catalog__selectid-in-input">
                           <Tag v-if="openTransmission">
                              {{ checkboxSuv }}
                           </Tag>
                           <Tag v-if="openTransmission">
                              {{ checkbox.sunValue}}
                           </Tag>
                           <Tag v-if="openTransmission">
                              {{ makeFilter}}
                           </Tag>
                        </div>
                     </template>
                  </Accordeon>
               </div>
               <div class="car-catalog__price">
                  <Accordeon @openAccordeon="openPrice = !openPrice">
                     <template v-slot:title>
                        Price
                     </template>
                     <template v-slot:tag v-if="!openPrice && activePrice">
                        <div class="car-catalog__used-filters">
                           <Tag v-if="!openPrice && activePrice" @closeTag="resetPriceValue">
                              $ {{ selectedValue(price, 0) }} - $ {{ selectedValue(price, 1) }}
                           </Tag>
                        </div>
                     </template>
                     <template v-slot:content>
                        <div class="car-catalog__values-box">
                           <div class="car-catalog__price-value">
                              $ {{ selectedValue(price, 0) }}
                           </div>
                           <div class="car-catalog__price-value">
                              $ {{ selectedValue(price, 1) }}
                           </div>
                        </div>
                        <Slider  
                           v-model="price.value" 
                           :min="computePropertyArray.minPrice"
                           :max="computePropertyArray.maxPrice"
                           :step="100"
                           :tooltips="false"
                           :lazy="false"
                           @update="closePriceTag"
                        />
                        <div class="car-catalog__selectid-in-input">
                           <Tag v-if="openPrice && activePrice" @closeTag="resetPriceValue">
                              $ {{ selectedValue(price, 0) }} - $ {{ selectedValue(price, 1) }}
                           </Tag>
                        </div>
                     </template>
                  </Accordeon>
               </div>
               <div class="car-catalog__year">
                  <Accordeon @openAccordeon="openYear = !openYear">
                     <template v-slot:title>
                        Year
                     </template>
                     <template v-slot:tag v-if="!openYear && activeYear">
                        <div class="car-catalog__used-filters">
                           <Tag v-if="!openYear && activeYear" @closeTag="resetYearValue">
                              {{ year.value[0] }} - {{ year.value[1] }}
                           </Tag>
                        </div>
                     </template>
                     <template v-slot:content>
                        <div class="car-catalog__values-box">
                           <div class="car-catalog__price-value">
                              {{ year.value[0] }}
                           </div>
                           <div class="car-catalog__price-value">
                              {{ year.value[1] }}
                           </div>
                        </div>
                        <Slider  
                           v-model="year.value" 
                           :min="computePropertyArray.minYear"
                           :max="computePropertyArray.maxYear"
                           :tooltips="false"
                           :lazy="false"
                           @update="closeYearTag"
                        />
                        <div class="car-catalog__selectid-in-input">
                           <Tag v-if="openYear && activeYear" @closeTag="resetYearValue">
                              {{ year.value[0] }} - {{ year.value[1] }}
                           </Tag>
                           
                        </div>
                     </template>
                  </Accordeon>

               </div>
               <div class="car-catalog__kilometres">
                  <Accordeon @openAccordeon="openKilometres = !openKilometres">
                     <template v-slot:title>
                        Kilometres
                     </template>
                     <template v-slot:tag v-if="!openKilometres && activeKilometres">
                        <div class="car-catalog__used-filters">
                           <Tag v-if="!openKilometres && activeKilometres" @closeTag="resetKilometresValue">
                              {{ selectedValueKilometres(kilometres, 0)}}
                           </Tag>
                        </div>
                     </template>
                     <template v-slot:content>
                        <div class="car-catalog__values-box">
                           <div class="car-catalog__price-value">
                              {{ selectedValueKilometres(kilometres, 0) }} or less
                           </div>
                        </div>
                        <Slider  
                           v-model="kilometres.value" 
                           :min="computePropertyArray.minKilometres"
                           :max="computePropertyArray.maxKilometres"
                           :step="100"
                           :tooltips="false"
                           :lazy="false"
                           @update="closeKilometresTag"
                        />
                        <div class="car-catalog__selectid-in-input">
                           <Tag v-if="openKilometres && activeKilometres" @closeTag="resetKilometresValue">
                              {{ selectedValueKilometres(kilometres, 0) }} 
                           </Tag>
                        </div>
                     </template>
                  </Accordeon>
               </div>
               <Button  
                  class="car-catalog__button"
                  text="Apply" 
                  :width=137 
                  tabletWidth="100%"
               />
            </div>
         </div>
         <div class="car-catalog__catalog">
            <div class="car-catalog__search-sorting">
               <div class="car-catalog__search-box">
                  <div class="car-catalog__search-icon-box">
                     <div class="car-catalog__search-icon" @click="">
                        <img src="../img/icons/FilterIcon.svg" alt="Filter Icon" class="car-catalog__search-icon-img">
                     </div>
                     <div class="car-catalog__text">
                        Search Filter
                     </div>
                  </div>
                  <div class="car-catalog__input-box">
                     <img src="../img/icons/Search.svg" alt="Search" class="car-catalog__input-icon">
                     <input 
                        class="car-catalog__input-text input__search" 
                        type="text" 
                        name="search" 
                        id="search" 
                        v-model="makeValue" 
                        placeholder="Find a dream car..."
                        autocomplete="off"
                     >
                     <div v-if="activeMake" class="car-catalog__input-select">
                        <div class="car-catalog__select-item">Pensil</div>
                        <div class="car-catalog__select-opacity "></div>
                     </div>
                  </div>
                  <div class="car-catalog__share-icon">
                     <img src="../img/icons/Share.svg" alt="Share icon" class="car-catalog__share-icon-img">
                  </div>
               </div>
               <div class="car-catalog__sorted-box">
                  <div class="car-catalog__sorted-box-heading">
                     Sorted by 
                  </div>
                  <div class="car-catalog__sorted-box-content">
                     <div class="car-catalog__active-field" @click="activeSortList = !activeSortList">
                        <div class="car-catalog__active-field-text">
                           Recommendations
                        </div>
                        <div class="car-catalog__active-field-icon">
                           <img src="../img/icons/Arrow-Bottom.svg" alt="" class="car-catalog__arrow-bottom">
                        </div>
                     </div>
                     <ul class="car-catalog__sort-selection-list" v-if="activeSortList">
                        <li
                           v-for="item in sortList"
                           class="car-catalog__sort-item"
                        >
                           {{ item }}
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="car-catalog__car-cards">
               <CarCard class="car-catalog__car-card" v-for="car in createdPage" :cardData="car">
               </CarCard>
               <Card v-if="false" class="car-catalog__no-matches">
                  <div class="car-catalog__icon-box">
                     <img src="../img/icons/SedanIconForCatalogPage.svg" alt="Sedan icon" class="car-catalog__icon">
                  </div>
                  <div class="car-catalog__title-no-matches">
                     Unfortunately there are no matches for your query.
                  </div>
                  <div class="car-catalog__subtitle-no-matches">
                     Try using other filter settings or request a car of your choice.
                  </div>
                  <router-link to="/src/views/Quiz.vue" class="car-catalog__link-request">
                     Request a car
                  </router-link>
               </Card>
            </div>
            <div class="car-catalog__pagination-box">
               <div 
                  v-for="n in pagination" 
                  class="car-catalog__pagination" 
                  :class="{'car-catalog__pagination-active': pagination[(n - 1)] == nowPage}"
                  @click="createPage(pagination[(n - 1)])">
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Slider  from '@vueform/slider';

import CarCard from '../components/CarCard.vue';
import Accordeon from '../components/Accordeon.vue';
import Tag from '../components/Tag.vue';
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';

import {useMenuStore} from "../stores/MenuStore.js"
import { createPagination } from "../assets/js/create-pagination.js";

import { hasOwn } from '@vue/shared';

   export default {
      components: {
         CarCard,
         Accordeon,
         Tag,
         Button,
         Card,
         Slider,
      },
      data() {
         return {

            listCars: [
               {id: 1,
                  img: {
                     1: new URL('@/img/CarsCatalog/Porsche/1.jpg', import.meta.url),
                     2: new URL('@/img/CarsCatalog/Porsche/2.webp', import.meta.url), 
                     3: new URL('@/img/CarsCatalog/Porsche/3.webp', import.meta.url), 
                     4: new URL('@/img/CarsCatalog/Porsche/4.jpeg', import.meta.url),
                  },
                  make: 'Porsche',
                  model: '',
                  title: 'Porsche Panamera II Turbo S E-Hybrid',
                  price: 150000,
                  year: '2012',
                  bodyType: 'Sedan',
                  transmission: 'Manual',
                  kilometres: '1 000 kilometres',
               },
               {id: 2,
                  img: {
                     1:  new URL('@/img/CarsCatalog/Audi-A7/1.jpg', import.meta.url),
                     2:  new URL('@/img/CarsCatalog/Audi-A7/2.jpg', import.meta.url), 
                     3:  new URL('@/img/CarsCatalog/Audi-A7/3.jpg', import.meta.url), 
                  },
                  make: 'Audi',
                  model: 'A7',
                  title: 'Audi A7 I (4G) S-tronic',
                  price: '23 500',
                  year: '2015',
                  bodyType: 'Trucks',
                  transmission: 'Automatic',
                  kilometres: '150 000 Kilometres',
               },
               {id: 3,
                  img: {
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
               {id: 4,
                  img: {
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
               {id: 5,
                  img: {
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
               {id: 6,
                  img: {
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
               {id: 7,
                  img: {
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
               {id: 8,
                  img: {
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
               {id: 9,
                  img: {
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
                  bodyType: 'Crossover',
                  transmission: 'Automatic',
                  kilometres: '68 000 kilometres',
               },
               {id: 10,
                  img: {
                     1: new URL('@/img/CarsCatalog/MitsubishiOutlander2.0/1.webp', import.meta.url),
                     2: new URL('@/img/CarsCatalog/MitsubishiOutlander2.0/2.webp', import.meta.url), 
                     3: new URL('@/img/CarsCatalog/MitsubishiOutlander2.0/3.webp', import.meta.url), 
                  },
                  make: 'Mitsubishi',
                  model: 'Outlander',
                  title: 'MITSUBISHI OUTLANDER 2.0 CVT INVITE',
                  price: '17 000',
                  year: '2018',
                  bodyType: 'Crossover',
                  transmission: 'Automatic',
                  kilometres: '91 000 kilometres',
               },
               {id: 11,
                  img: {
                     1: new URL('@/img/CarsCatalog/MitsubishiOutlanderBlack/1.webp', import.meta.url),
                     2: new URL('@/img/CarsCatalog/MitsubishiOutlanderBlack/2.webp', import.meta.url), 
                     3: new URL('@/img/CarsCatalog/MitsubishiOutlanderBlack/3.webp', import.meta.url),
                  },
                  make: 'Mitsubishi',
                  model: 'Outlander',
                  title: 'Mitsubishi Outlander (ZK MY16) LS wagon',
                  price: '18 200',
                  year: '2019',
                  bodyType: 'Crossover',
                  transmission: 'Manual',
                  kilometres: '91 000 kilometres',
               },
               {id: 12,
                  img: {
                     1: new URL('@/img/CarsCatalog/Porsche-Cayenne/2.webp', import.meta.url),
                     2: new URL('@/img/CarsCatalog/Porsche-Cayenne/1.webp', import.meta.url), 
                     3: new URL('@/img/CarsCatalog/Porsche-Cayenne/3.webp', import.meta.url), 
                  },
                  make: 'Porsche',
                  model: 'Cayenne',
                  title: 'Porsche Cayenne V8 Turbo',
                  price: '102 000',
                  year: '2021',
                  bodyType: 'Crossover',
                  transmission: 'Manual',
                  kilometres: '22 000 kilometres',
               },
               {id: 13,
                  img: {
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
               {id: 14,
                  img: {
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
               {id: 15,
                  img: {
                     1: new URL('@/img/CarsCatalog/PorscheMacan/1.webp', import.meta.url),
                     2: new URL('@/img/CarsCatalog/PorscheMacan/2.webp', import.meta.url), 
                     3: new URL('@/img/CarsCatalog/PorscheMacan/3.webp', import.meta.url), 
                  },
                  make: 'Porsche',
                  model: 'Macan',
                  title: 'PORSCHE MACAN GTS',
                  price: '90 300',
                  year: '2022',
                  bodyType: 'Crossover',
                  transmission: 'Manual',
                  kilometres: '5 000 kilometres',
               },
               {id: 16,
                  img: {
                     1: new URL('@/img/CarsCatalog/PorscheMacanBlue/1.webp', import.meta.url),
                     2: new URL('@/img/CarsCatalog/PorscheMacanBlue/2.webp', import.meta.url), 
                     3: new URL('@/img/CarsCatalog/PorscheMacanBlue/3.webp', import.meta.url), 
                  },
                  make: 'Porsche',
                  model: 'Macan',
                  title: '	Porsche Macan (95B) ',
                  price: '92 000',
                  year: '2022',
                  bodyType: 'Crossover',
                  transmission: 'Manual',
                  kilometres: '10 000 kilometres',
               },
               //{id: 2,
               //   img: {
               //      1: new URL('@/img/CarsCatalog', import.meta.url),
               //      2: new URL('@/img/CarsCatalog', import.meta.url), 
               //      3: new URL('@/img/CarsCatalog', import.meta.url), 
               //      4: new URL('@/img/CarsCatalog', import.meta.url),
               //   },
               //   title: '',
               //   price: '',
               //   year: '',
               //   bodyType: '',
               //   transmission: 'Manual',
               //   kilometres: '150 000 Kilometres',
               //},
            ],
            isFilter: false,
            makeValue: '',
            activeMake: '',
            activeModel: '',
            makeFilter: 'Porse',
            modelFilter: 'Panamero',
            openMakeModel: false,
            openBodyType: false,
            openTransmission: false,

            openPrice: false,
            price:{
               value: ['', '']
            },
            activePrice: false,

            year: {
               value: [' ', ' ']
            },
            openYear: false,
            activeYear: false,
            
            kilometres: {
               value:''
            },
            openKilometres: false,
            activeKilometres: false,

            propertyCars: {
               price: [],
               year: [],
               kilometres: []
            },
            
            isOpenAccordeon: false,
            checkbox: {
               trucks: '',
               suv: false,
               sunValue: this.checkboxSuv,
               sedan: '',
               hatchback: '',
               coupe: '',
               convertiable: '',
               van: '',
            },
            checkboxValues: {
               trucks: '',
               suv: '',
               sedan: '',
               hatchback: '',
               coupe: '',
               convertiable: '',
               van: '',
            }, 
            sortList: [
               'Recommendations',
               'Newest inventory',
               'Lowest price',
               'Highest prices',
            ],
            activeSortList: false,

            nowPage: 1,
            numberOfCards: 6,
            createdPage: [],
            pagination: [],
         }
      },
      methods: {
         resetPriceValue() {
            this.price.value[0] = this.computePropertyArray.propertys.price[0];
            this.price.value[1] = this.computePropertyArray.propertys.price[this.computePropertyArray.propertys.price.length - 1];
         },
         resetYearValue() {
            this.year.value[0] = this.computePropertyArray.propertys.year[0];
            this.year.value[1] = this.computePropertyArray.propertys.year[this.computePropertyArray.propertys.year.length - 1];
         },
         resetKilometresValue() {
            this.kilometres.value = this.computePropertyArray.propertys.kilometres[0];
         },
         closePriceTag() {
            if (this.price.value[0] === this.propertyCars.price[0] && this.price.value[1] === this.propertyCars.price[this.propertyCars.price.length - 1]) {
               this.activePrice = false;
            } else {
               this.activePrice = true;
            }
         },
         closeYearTag() {
            if (this.year.value[0] === this.propertyCars.year[0] && this.year.value[1] === this.propertyCars.year[this.propertyCars.year.length - 1]) {
               this.activeYear = false;
            } else {
               this.activeYear = true;
            }
         },
         closeKilometresTag() {
            if (this.kilometres.value[0] === this.propertyCars.kilometres[0]) {
               this.activeKilometres = false;
            } else {
               this.activeKilometres = true;
            }
         },
         selectedValue(array, index) {
            return new Intl.NumberFormat('uk-UA').format(array.value[index])
         },
         selectedValueKilometres(array, index) {
            return new Intl.NumberFormat('uk-UA').format(array.value)
         },
         createPage(n) {
            this.nowPage = n;
            const first = ((this.nowPage - 1) * this.numberOfCards);
            const last = (this.nowPage * this.numberOfCards);
            this.createdPage = this.listCars.slice(first, last);
         },
         //computePropertyArray(propertys, dataObject) {
         //   if (dataObject.length != 0) {
         //      for (const property of Object.keys(propertys)) {

         //                  //console.log(property);

         //            //let priceArray = [];
         //            for (let object = 0; object < dataObject.length; object++) {

         //                  //console.log(dataObject[object]);

         //               if (hasOwn(dataObject[object], property)) {
         //                  let price = dataObject[object][property];
         //                  if (typeof price === 'string') {
         //                     price = parseFloat(price.split(' ').join(''));
         //                  }   
         //                  propertys[property].push(price);
         //               }
         //            }
         //            function compareNumbers(a, b) {
         //               return a - b;
         //            }
         //            propertys[property].sort(compareNumbers);
         //            console.log(this.propertyCars.price[0]);
         //      }
         //   }
         //},
      },
      computed: {
         computePropertyArray() {
            let propertys = this.propertyCars;
            let dataObject = this.listCars;
            if (dataObject.length != 0) {
               for (const property of Object.keys(propertys)) {
                     for (let object = 0; object < dataObject.length; object++) {
                        if (hasOwn(dataObject[object], property)) {
                           let price = dataObject[object][property];
                           if (typeof price === 'string') {
                              price = parseFloat(price.split(' ').join(''));
                           }   
                           propertys[property].push(price);
                        }
                     }
                     function compareNumbers(a, b) {
                        return a - b;
                     }
                  propertys[property].sort(compareNumbers);
               }
            }
            let minPrice = propertys.price[0];
            let maxPrice = propertys.price[propertys.price.length - 1];
            let minYear = propertys.year[0];
            let maxYear = propertys.year[propertys.year.length - 1];
            let minKilometres = propertys.kilometres[0];
            let maxKilometres = propertys.kilometres[propertys.kilometres.length - 1];
            return {propertys, minPrice, maxPrice, minYear, maxYear, minKilometres, maxKilometres}
         },
         checkboxSuv() {
            this.checkbox.suv ? this.checkbox.sunValue = 'SUV' : this.checkbox.sunValue = ''
         },
      },
      mounted() {
         this.resetPriceValue();
         this.resetYearValue();
         this.resetKilometresValue();
         this.createPage(this.nowPage);
         this.createPagination(this.listCars, this.numberOfCards);
      },
      setup() {
         createPagination;
         const menuStore = useMenuStore();
         return { 
            createPagination, 
            menuStore
         }
      }
   }
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss" scoped>
.car-catalog {
   width: 100%;
   padding: 40px 0;

   &__container {
      //width: 100%;
      display: grid;
      grid-template-columns: minmax(230px, 25%) 71.67%;
      gap: 3.33%;
      @media (max-width: 1024px) {
         display: block;
      }
   }

   &__filters-box {
      //max-width: 230px;
      width: 100%;
      @media (max-width: 1024px) {
         display: none;
         position: absolute;
         left: 0;
         padding: 0 var(--pdng-conteiner);
         z-index: 10;
         background: var(--color-white);
      //transform: translate(100%, 0px);
      ////overflow: scroll;
      //transition: all 0.9s ease 0s;
      //overflow-y: auto;
      //overflow-x: hidden;
      }
   }

   &__title-box {
      margin: 9px 0 31px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 1024px) {
         max-width: 420px;
         margin: 9px auto 31px;
      }
   }

   &__criss-cross {
      position: absolute;
      left: var(--pdng-conteiner);
      top: 0;
      cursor: pointer;
      @media (max-width: 550px) {
         position: static;
         margin-right: 10px;
      }
   }

   &__title {
      @include medium_16;
      color: var(--color-content);
      @media (max-width: 550px) {
         display: flex;
      }  
   }

   &__clear {
      @include medium_16;
      color: var(--color-accent);
      cursor: pointer;
   }

   &__filters {
      & > div:not(:last-child) {
         margin-bottom: 10px;
      }
      @media (max-width: 1024px) {
         max-width: 420px;
         margin: 0 auto;
         margin-bottom: 10px;
      }
   }

   &__make-model {
      .label__make {
         margin-top: 0;
      }
   }

   &__body-type {}

   &__checkbox {
      display: flex;
   }

   &__label-checkbox {
      display: flex;
      align-items: center;
      cursor: pointer;
   }

   &__input-car-icon {
      margin: 0 0 0 10px;
   }

   &__label-text {
      margin: 0 0 0 10px;
   }

   &__price, &__year, &__kilometres {
      :deep(.slider-handle) {
         width: 18px;
         height: 18px;
         background: var(--color-accent);
         border: 1px solid var(--color-white);
         border-radius: 2px;
         box-shadow: none;
      }
      :deep(.slider-horizontal) {
         height: 8px;
         border-radius: 2px;
         background: #D7D7D7;
      }
      :deep(.slider-base, .slider-connects) {
         border-radius: 2px;
         cursor: pointer;
         //-------
         //Змісив повзунки від краю щоб вони не виступали за межі контейнера 
         //--------
         width: calc(100% - 16px);
         margin-left: auto;
         margin-right: auto;
      }
      :deep(.slider-connect) {
         background: var(--color-accent);
      }
   }
   
   &__price-value {
   }

   &__year {}

   &__kilometres {
      :deep(.slider-connects) {
         border-radius: 2px;
         cursor: pointer;
         //-------
         //Змісив повзунки від краю щоб вони не виступали за межі контейнера 
         //--------
         width: calc(100%);
         margin-left: -8px;
         margin-right: auto;
      }
   }

   &__values-box {
      width: 100%;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      @include semibold_20;
   }

   &__used-filters {
      grid-column: 1/3;
      display: flex;
      flex-wrap: wrap;
      margin-left: -24px;
      margin-bottom: -10px;
      & > div {
         margin-left: 24px;
         margin-bottom: 10px;
      }
   }
   
   &__label {
      @include semibold_16;
      color: var(--color-content);
      display: inline-block;
      margin-top: 20px;
   }

   &__input-box {
      width: 100%;
      position: relative;
   }

   &__input-icon {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 10px;
      right: 20px;
   }

   &__input-text {
      width: 100%;
      height: 45px;
      padding-left: 20px;
      border: 1px solid #D7D7D7;
      border-radius: 2px;
      &::placeholder {
         @include medium_16;
         color: var(--color-secondary);
      }
   }

      &__input-select {
         width: 100%;
         max-height: 155px;
         margin-top: -1px;
         border: 1px solid #D7D7D7;
         border-radius: 2px;
         padding: 20px;
         overflow-y: auto;
         overflow-x: hidden;
         position: relative;   
         scrollbar-width: thin;
         scrollbar-color: #D7D7D7 rgba(215, 215, 215, 0.3);
   
         &::-webkit-scrollbar {
            width: 4px;
         }
   
         &::-webkit-scrollbar-track {
            background: rgba(215, 215, 215, 0.3);
         }
   
         &::-webkit-scrollbar-thumb {
            background-color: #D7D7D7;   
            border-radius: 15px;
            border: 3px solid rgba(215, 215, 215, 0.3);
         }
      }

   &__select-item {
      @include semibold_16;
      height: 15px;
      color: var(--color-content);
      &:not(:last-child) {
         margin-bottom: 10px;
      }
   }

   &__select-opacity {
      width: 245px;
      height: 37px;
      position: sticky;
      left: -20px;
      bottom: -20px;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
      border-radius: 1px;
   }

   &__selectid-in-input {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      margin-left: -24px;
      margin-bottom: -10px;
      & > div {
         margin-left: 24px;
         margin-bottom: 10px;
      }
   }

   &__button {
      display: none;
      @media (max-width: 768px) {
         display: flex;
      }
   }

   &__catalog {
      width: 100%;
   }

   &__search-sorting {
      width: 100%;
      //height: 45px;
      margin-bottom: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: start;
      & > div {
         margin-bottom: 10px;
      }
      @media (max-width: 766px) {
         display: block;
      }
   }
      
   &__search-box {
      width: 45.58%;
      min-width: 210px;
      margin-right: 20px;
      display: flex;
      align-items: center;
      @media (max-width: 1024px) {
         width: auto;
      }
      @media (max-width: 766px) {
         width: 100%;
      }
      .car-catalog__input-box {
         width: 100%;
         min-width: 210px;
         margin-right: 20px;
         @media (max-width: 1024px) {
            width: 240px;
         }
         @media (max-width: 766px) {
            flex: 1 1 auto;
         }
      }
   }

   &__search-icon-box {
      margin-right: 20px;
      display: none;
      align-items: center;
      @media (max-width: 1024px) {
         display: flex;
      }
      .car-catalog__text {
         @include regular_16;
         width: max-content;
         color: var(--color-content);
         @media (max-width: 766px) {
            display: none;
         }
      }
   }

   &__search-icon {
      width: 26px;
      height: 22px;
      margin-right: 10px;
   }

   &__search-icon-img {
      width: 100%;
   }


   &__share-icon {
   }

   &__share-icon-img {
   }

   &__sorted-box {
      height: 45px;
      display: flex;
      //align-items: center;
      @media (max-width: 766px) {
         width: 100%;
      }
   }

   &__sorted-box-heading {
      @include regular_16;
      margin-right: 20px;
      color: var(--color-content);
      align-self: center;
      @media (max-width: 1024px) {
         display: none;
      }
   }

   &__sorted-box-content {
      width: 240px;
      height: max-content;
      box-sizing: border-box;
      border: 1px solid var(--color-secondary);
      border-radius: 2px;
      padding: 9px 20px;
      background: var(--color-white);
      z-index: 2;
      @media (max-width: 766px) {
         width: 100%;
      }
   }

   &__active-field {
      height: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
   }

   &__active-field-text {
      @include medium_16;
      color: var(--color-content);
   }

   &__active-field-icon {
   }

   &__arrow-bottom {
   }

   &__sort-selection-list {
      @include medium_16;
      margin-top: 10px;
      color: var(--color-content);
   }

   &__sort-item {
      cursor: pointer;
      &:not(:first-child) {
         margin-top: 5px;
      }
   }

   &__car-cards {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      //grid-template-columns: 1fr;
      @media (max-width: 766px) {
         display: block;
      }
   }

   &__car-card {
      width: 48.83%;
      margin-bottom: 20px;
      &:nth-child(2n+1) {
         margin-right: 2.32%;
      }
      @media (max-width: 1024px) {
         width: 100%;
         margin-right: 0;
      }
   }

   &__no-matches {
      width: 100%;
      padding: 60px;
   }

   &__icon-box {
      margin-bottom: 20px;
   }

   &__icon {
   }

   &__title-no-matches {
      @include semibold_20;
      margin-bottom: 10px;
      color: var(--color-content);
   }

   &__subtitle-no-matches {
      @include regular_16;
      margin-bottom: 20px;
      color: var(--color-content);
   }

   &__link-request {
      @include bold_16;
      color: var(--color-accent);
      text-transform: uppercase;
   }

   &__pagination-box {
      width: 50px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
   }

   &__pagination {
      width: 10px;
      height: 10px;
      margin: 20px 0 0;
      border-radius: 50%;
      background: var(--color-text);
      opacity: 0.3;
      &:hover {
         cursor: pointer;
      }
      @media (max-width: 425px) {
         margin: 30px 0;
      }
   }
   &__pagination-active {
      opacity: 1;
   }
}

.car-card {

&__transmission {
}
}

.label {

&__make {
}

&__model {
}
}
.input {

&__make {
}

&__model {
}

&__search {
}
}

:deep(.accordeon__content) {
      width: 100%;
      grid-column: 1/3;
   }

:deep(.accordeon) {
   padding: 10px 17px 10px 20px;
   border-radius: 2px;
   row-gap: 14px;
   .accordeon__title {
      @include medium_16;
      min-height: 25px;
   }
}
._active {
      transform: translate(0px, 0px);
      transition: all 0.9s ease 0s;
   }

</style>