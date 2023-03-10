<template>
   <div class="car-catalog">
      <div class="car-catalog__container _container">
         <div class="car-catalog__filters-box" :class="[menuStore.isActiveFilter, menuStore.filterUnderMenu]">
            <div class="car-catalog__title-box">
               <div class="car-catalog__title">
                  <div class="car-catalog__criss-cross" @click="menuStore.closeFilter">
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
                        <div 
                           class="car-catalog__used-filters"
                           v-if="!openMakeModel && makeFilters.length > 0" 
                        >
                           <Tag 
                              v-for="filter in makeFilters" 
                              @click="closeMakeTage(makeFilters, filter, selectAllMakeModel.arrayMake)"
                           >
                              {{ filter }}
                           </Tag>
                           <Tag 
                              v-for="filter in modelFilters" 
                              @click="closeTag(modelFilters, filter, selectedModel)"
                           >
                              {{ filter }}
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
                              @focus="activeMake = true"
                              @blur="closeInputSelect()"
                           >
                           <!--<div class="car-catalog__input-select-container">-->
                              <div  v-if="activeMake" class="car-catalog__input-select">
                                 <div 
                                    class="car-catalog__select-item" 
                                    v-if="filterSelectedMake.length > 0" 
                                    v-for="make in filterSelectedMake"
                                    @mousedown="addMakeFilter(make)"
                                 >
                                    {{ make }}
                                 </div>
                                 <div v-if="filterSelectedMake.length < 1" class="car-catalog__select-item">
                                    Not found
                                 </div>
                              </div>
                              <!--<div class="car-catalog__select-opacity "></div>-->
                           <!--</div>-->
                        </div>
                        <div 
                           class="car-catalog__selectid-in-input"
                           v-if="openMakeModel" 
                        >
                        <!--filterSelectedMake.length > 0 && -->
                           <Tag 
                              v-for="filter in makeFilters" 
                              @click="closeMakeTage(makeFilters, filter, selectAllMakeModel.arrayMake)"
                           >
                              {{ filter }}
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
                              v-model="modelValue" 
                              placeholder="Search Model..."
                              autocomplete="off"
                              :disabled="makeFilters.length < 1"
                              @focus="activeModel = true"
                              @blur="activeModel = false"
                           >
                           <div v-if="activeModel" class="car-catalog__input-select">
                              <div 
                              class="car-catalog__select-item" 
                                    v-if="selectedModel.length > 0" 
                                    v-for="model in filterSelectedModel"
                                    @mousedown="addModelFilter(model)"
                                 >
                                    {{ model }}
                                 </div>
                                 <div v-if="filterSelectedModel.length < 1" class="car-catalog__select-item">
                                    Not found
                                 </div>
                           </div>
                        </div> 
                        <div class="car-catalog__selectid-in-input">
                           <Tag 
                              v-for="filter in modelFilters" 
                              @click="closeTag(modelFilters, filter, selectedModel)"
                           >
                              {{ filter }}
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
                        <div class="car-catalog__used-filters"
                           v-if="!openBodyType && bodyTypeFilter.length > 0">
                           <Tag 
                              v-for="filter in bodyTypeFilter" 
                              @click="checkbox[filter] = false"
                           >
                              {{ filter }}
                           </Tag>
                        </div>
                     </template>
                     <template v-slot:content>
                        <fieldset>
                           <div class="car-catalog__checkbox" v-if="!disabledTrucks">
                              <label class="car-catalog__label-checkbox" for="trucks">
                                 <input 
                                    class="car-catalog__checkbox-input"
                                    type="checkbox" 
                                    id="trucks" 
                                    name="body-type" 
                                    value="trucks" 
                                    v-model='checkbox.Trucks' 
                                    :disabled="disabledTrucks"
                                 />
                                 <img src="../img/icons/TruckIcon.svg" alt="Truck icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    Trucks
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox" v-if="!disabledSUV">
                              <label class="car-catalog__label-checkbox" for="suv">
                                 <input 
                                    class="car-catalog__checkbox-input"
                                    type="checkbox"
                                    id="suv" 
                                    name="body-type" 
                                    value="suv" 
                                    v-model='checkbox.SUV' 
                                    :disabled="disabledSUV"
                                 />
                                 <img src="../img/icons/SUVIcon.svg" alt="SUV icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    SUV
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox" v-if="!disabledSedan">
                              <label class="car-catalog__label-checkbox" for="sedan">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox"
                                    id="sedan" 
                                    name="body-type" 
                                    value="sedan" 
                                    v-model='checkbox.Sedan' 
                                    :disabled="disabledSedan"
                                 />
                                 <img src="../img/icons/SedanIcon.svg" alt="Sedan icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    Sedan
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox" v-if="!disabledHatchback">
                              <label class="car-catalog__label-checkbox" for="hatchback">
                                 <input 
                                    class="car-catalog__checkbox-input" 
                                    type="checkbox"
                                    id="hatchback" 
                                    name="body-type" 
                                    value="hatchback" 
                                    v-model='checkbox.Hatchback' 
                                    :disabled="disabledHatchback"
                                 />
                                 <img src="../img/icons/HatchbackIcon.svg" alt="Hatchback icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    Hatchback
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox" v-if="!disabledCoupe">
                              <label class="car-catalog__label-checkbox" for="coupe">
                                 <input 
                                    class="car-catalog__checkbox-input"
                                    type="checkbox"
                                    id="coupe" 
                                    name="body-type" 
                                    value="coupe" 
                                    v-model='checkbox.Coupe' 
                                    :disabled="disabledCoupe"
                                 />
                                 <img src="../img/icons/CoupeIcon.svg" alt="Coupe icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    Coupe
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox" v-if="!disabledConvertiable">
                              <label class="car-catalog__label-checkbox" for="convertiable">
                                 <input 
                                    class="car-catalog__checkbox-input"
                                    type="checkbox"
                                    id="convertiable" 
                                    name="body-type" 
                                    value="convertiable" 
                                    v-model='checkbox.Convertiable' 
                                    :disabled="disabledConvertiable"
                                 />
                                 <img src="../img/icons/ConvertiableIcon.svg" alt="Convertiable icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    Convertiable
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox" v-if="!disabledVAN">
                              <label class="car-catalog__label-checkbox" for="van">
                                 <input 
                                    class="car-catalog__checkbox-input"
                                    type="checkbox"
                                    id="van" 
                                    name="body-type" 
                                    value="van" 
                                    v-model='checkbox.VAN' 
                                    :disabled="disabledVAN"
                                 />
                                 <img src="../img/icons/VANIcon.svg" alt="VAN icon" class="car-catalog__input-car-icon">
                                <div class="car-catalog__label-text">
                                    VAN
                                 </div> 
                              </label>
                           </div>
                        </fieldset>
                        <div class="car-catalog__selectid-in-input">
                           <Tag 
                              v-for="filter in bodyTypeFilter" 
                              @click="checkbox[filter] = false"
                           >
                              {{ filter }}
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
                        <div class="car-catalog__used-filters" v-if="!openTransmission &&transmissionFilter.length > 0">
                           <Tag
                              v-for="filter in transmissionFilter" 
                              @click="checkboxTrans[filter] = false">
                              {{ filter }}
                           </Tag>
                        </div>
                     </template>
                     <template v-slot:content>
                        <fieldset>
                           <div class="car-catalog__checkbox" v-if="!disabledAutomatic">
                              <label class="car-catalog__label-checkbox" for="automatic">
                                 <input 
                                    class="car-catalog__checkbox-input"
                                    type="checkbox" 
                                    id="automatic" 
                                    name="transmission" 
                                    value="automatic" 
                                    v-model='checkboxTrans.Automatic'
                                 />
                                <div class="car-catalog__label-text">
                                    Automatic
                                 </div> 
                              </label>
                           </div>
                           <div class="car-catalog__checkbox" v-if="!disabledManual">
                              <label class="car-catalog__label-checkbox" for="manual">
                                 <input 
                                    class="car-catalog__checkbox-input"
                                    type="checkbox"
                                    id="manual" 
                                    name="transmission" 
                                    value="manual" 
                                    v-model='checkboxTrans.Manual'
                                 />
                                <div class="car-catalog__label-text">
                                    Manual
                                 </div> 
                              </label>
                           </div>
                        </fieldset>
                        <div class="car-catalog__selectid-in-input">
                           <Tag 
                              v-for="filter in transmissionFilter" 
                              @click="checkboxTrans[filter] = false"
                           >
                              {{ filter }}
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
                     <template v-slot:tag  v-if="!openPrice && priceFilters.length > 0">
                        <div class="car-catalog__used-filters" >
                           <Tag @closeTag="cleaningPriceFilters">
                              $ {{ selectedValue(priceFilters, 0) }} - $ {{ selectedValue(priceFilters, 1) }}
                           </Tag>
                        </div>
                     </template>
                     <template v-slot:content>
                        <div class="car-catalog__values-box">
                           <div class="car-catalog__price-value">
                              $ {{ selectedValue(price.value, 0) }}
                           </div>
                           <div class="car-catalog__price-value">
                              $ {{ selectedValue(price.value, 1) }}
                           </div>
                        </div>
                        <Slider  
                           v-model="price.value" 
                           :min="priceMinMax[0]"
                           :max="priceMinMax[1]"
                           :step="100"
                           :tooltips="false"
                           :lazy="false"
                           @change="selectPriceFilter"
                        />
                        <div class="car-catalog__selectid-in-input">
                           <Tag 
                              v-if="openPrice && priceFilters.length > 0 "
                              @closeTag="cleaningPriceFilters()"
                           >
                              $ {{ selectedValue(priceFilters, 0) }} - $ {{ selectedValue(priceFilters, 1) }}
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
                     <template v-slot:tag v-if="!openYear && yearFilters.length > 0">
                        <div class="car-catalog__used-filters">
                           <Tag @closeTag="cleaningYearFilters">
                              {{ yearFilters[0] }} - {{ yearFilters[1] }}
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
                           :min="yearMimMax[0]"
                           :max="yearMimMax[1]"
                           :tooltips="false"
                           :lazy="false"
                           @change="selectYearFilter"
                        />
                           <!--@update="closeYearTag"-->
                        <div class="car-catalog__selectid-in-input">
                           <Tag v-if="openYear &&  yearFilters.length > 0" @closeTag="cleaningYearFilters">
                              {{ yearFilters[0] }} - {{ yearFilters[1] }}
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
                              {{ selectedValue(kilometresFilters, 0)}}
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
                           @change="selectKilometresFilter"
                        />
                        <div class="car-catalog__selectid-in-input">
                           <Tag v-if="openKilometres && activeKilometres" @closeTag="resetKilometresValue">
                              {{ selectedValue(kilometresFilters, 0) }} 
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
                     <div class="car-catalog__search-icon" @click="menuStore.openFilter">
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
                        v-model="searchValue" 
                        placeholder="Find a dream car..."
                        autocomplete="off"
                     >
                     <div v-if="searchValue" class="car-catalog__input-select">
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
                           {{ sortItem }}
                        </div>
                        <div class="car-catalog__active-field-icon">
                           <img src="../img/icons/Arrow-Bottom.svg" alt="" class="car-catalog__arrow-bottom">
                        </div>
                     </div>
                     <ul class="car-catalog__sort-selection-list" v-if="activeSortList">
                        <li
                           v-for="item in currentSortList"
                           class="car-catalog__sort-item"
                           @click="selestSortItem(item)"
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
               <Card v-if="noMatches" class="car-catalog__no-matches">
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
            <div v-if="pagination.length > 1" class="car-catalog__pagination-box">
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
import { selectedValueKilometres } from "../assets/js/formatting-kilometres.js";

import { hasOwn } from '@vue/shared';
import { forEach } from 'lodash';

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
            searchValue: '',//Тимчасово
            listCars: [
               {id: 1,
                  img: {
                     1: new URL('@/img/CarsCatalog/Porsche/1.jpg', import.meta.url),
                     2: new URL('@/img/CarsCatalog/Porsche/2.webp', import.meta.url), 
                     3: new URL('@/img/CarsCatalog/Porsche/3.webp', import.meta.url), 
                     4: new URL('@/img/CarsCatalog/Porsche/4.jpeg', import.meta.url),
                  },
                  make: 'Porsche',
                  model: 'Panamera',
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
                  bodyType: 'SUV',
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
                  bodyType: 'SUV',
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
                  bodyType: 'SUV',
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
                  bodyType: 'SUV',
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
                  bodyType: 'SUV',
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
                  bodyType: 'SUV',
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
            noMatches: false,
            displayedListCars: [],
            isFilter: false,  //не використаний
            
            openMakeModel: false,
            makeValue: '',
            activeMake: false,
            selectedMake: [],
            makeFilters: [],

            modelValue: '',
            selectedModel: [],
            modelFilters: [],
            activeModel: '',

            openBodyType: false,
            bodyTypeFilter: [],
            checkbox: {
               Trucks: false,
               SUV: false,
               Sedan: false,
               Hatchback: false,
               Coupe: false,
               Convertiable: false,
               VAN: false,
            },
            disabledTrucks: false,
            disabledSUV: false,
            disabledSedan: false,
            disabledHatchback: false,
            disabledCoupe: false,
            disabledConvertiable: false,
            disabledVAN: false,

            openTransmission: false,
            transmissionFilter: [],
            checkboxTrans: {
               Automatic: false,
               Manual: false
            },
            disabledAutomatic: false,
            disabledManual: false,

            openPrice: false,
            price:{
               value: ['', '']
            },
            priceMinMax: [],
            priceFilters: [],

            openYear: false,
            year: {
               value: [' ', ' ']
            },
            activeYear: false,//?????
            yearMimMax: [],
            yearFilters: [],
            
            openKilometres: false,
            kilometres: {
               value:''
            },
            activeKilometres: false,
            kilometresFilters: [],

            propertyCars: {
               price: [],
               year: [],
               kilometres: []
            },
            

            sortItem: 'Recommendations',
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

            exampleArray: [],
            listForDisplay: [],
            activeBodyFilters: [],//Ne  potriben
            //Array for filters reactivity
            makeFilterArray: [],
            bodyFilterArray: [],
            transmissionFilterArray: [],
            priceFilterArray: [],
            yearFilterArray: [],
            kilometresFilterArray: [],
         }
      },
      methods: {
         selectAllMake() {
            for (const car of this.listCars) {
               if (!this.selectedMake.includes(car.make)) {
                  this.selectedMake.push(car.make)
               }
            }
         },
         addMakeFilter(make) {
            this.selectAllModel(make);
            if (!this.makeFilters.includes(make)) {
               this.makeFilters.push(make);
            }    
            this.deleteArrayItem(this.selectAllMakeModel.arrayMake, make);//Можливо не потрібно використовувати бо їх там вже не буде після сортування
         },
         closeInputSelect() {
            this.activeMake = false;
            //setTimeout(() => {this.activeMake = false}, 1);
         },
         closeMakeTage(arrayForDelete, filter, arrayForAdd) {
            let that = this;
            function cleanMake(modelOfObject, arrayForCleaning) {
               for (const model of arrayForCleaning) {
                  if (modelOfObject == model) {
                     that.deleteArrayItem(arrayForCleaning, model);
                  }
               }
            }
            this.closeTag(arrayForDelete, filter, arrayForAdd);
            for (const modelOfObject of this.selectAllMakeModel.selectedMakeObject[filter]) {
               cleanMake(modelOfObject, this.selectedModel);
               cleanMake(modelOfObject, this.modelFilters);
            }
         },
         selectAllModel(make) {
            //console.log(this.selectAllMakeModel.selectedMakeObject);
            for (const model of this.selectAllMakeModel.selectedMakeObject[make]) {
               if (!this.selectedModel.includes(model)) {
                     this.selectedModel.push(model);
                  }
            }
         },
         addModelFilter(model) {
            if (!this.modelFilters.includes(model)) {
               this.modelFilters.push(model);
            }     
            this.deleteArrayItem(this.selectedModel, model);
         },
         /**
          * Додавання/видвлення елементів до/з масиву вибраних фільтрів при встановленні/знятті прапорця
          @param checkboxObject Обєкт, де зберігається результат встановлення/зняття прапорця
          @param selectedFiltersArray Масив вибраних фільтрів
         */
         selectCheckboxFilter(checkboxObject, selectedFiltersArray) {
            for (let [key, value] of Object.entries(selectedFiltersArray)) {
               if (value == true && !checkboxObject.includes(key)) {
                  checkboxObject.push(key);
               } else if (value == false && checkboxObject.includes(key)) {
                  this.deleteArrayItem(checkboxObject, key)
               }
            }
         },
         closeTag(arrayForDelete, filter, arrayForAdd) {
            this.deleteArrayItem(arrayForDelete, filter);
            arrayForAdd.push(filter);
         },
         deleteArrayItem(array, filter) {
            let index = array.indexOf(filter);
            if (index > -1) {
               array.splice(index, 1);
            }
         },
         /**
          * При переміщенні повзунка копіює їх значення до масиву priceFilters, з якого значення відображається в Tag
         */
         selectPriceFilter() {
            this.priceFilters = [...this.price.value];
         },
         /**
          * Присвоює повзункам значення, що дорівнює мін та макс
         */
         resetPriceValue() {
            this.price.value[0] = this.computeSliderPropertyArray('price', this.priceFilterArray).minValue;
            this.price.value[1] = this.computeSliderPropertyArray('price', this.priceFilterArray).maxValue;
         },
         /**
          * Присвоює повзункам значення, що дорівнює мін та макс
         */
         cleaningPriceFilters() {
            this.priceFilters.splice(0);
            this.resetPriceValue();
         },
         /**
          * При переміщенні повзунка копіює їх значення до масиву yearFilters, з якого значення відображається в Tag
         */
         selectYearFilter() {
            this.yearFilters = [...this.year.value];
         },
         /**
          * Присвоює повзункам значення, що дорівнює мін та макс
         */
         resetYearValue() {
            this.year.value[0] = this.computeSliderPropertyArray('year', this.yearFilterArray).minValue;
            this.year.value[1] = this.computeSliderPropertyArray('year', this.yearFilterArray).maxValue;
         },
         /**
          * Присвоює повзункам значення, що дорівнює мін та макс
         */
         cleaningYearFilters() {
            this.yearFilters.splice(0);
            this.resetYearValue();
         },
         resetKilometresValue() {
            this.kilometres.value = this.computePropertyArray.propertys.kilometres[0];
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
         /**
          * Метод, що повертає фідформатований елемент масиву у локалі uk-UA
          * @param array Масив, в якому знаходиться елемент
          * @param index індекс елементу масива
         */
         selectedValue(array, index) {
            return new Intl.NumberFormat('uk-UA').format(array[index])
         },
         createPage(n) {
            this.nowPage = n;
            const first = ((this.nowPage - 1) * this.numberOfCards);
            const last = (this.nowPage * this.numberOfCards);
            this.createdPage = this.whatShow.slice(first, last);
            console.log(this.whatShow);
         },
         selestSortItem(item) {
            this.sortItem = item;
            this.sortedCarsList();
            this.activeSortList = false;
         },
         sortedCarsList() {
            this.listCars.sort((a, b) => {
               if (this.sortItem == 'Recommendations') {
                  console.log(this.listCars);
                  console.log(this.sortItem);
                  return a.id - b.id
               } else if (this.sortItem == 'Newest inventory') {
                  console.log(this.listCars);
                  console.log(this.sortItem);
                  return b.year - a.year
               }else if (this.sortItem == 'Lowest price') {
                  return String(a.price).split(' ').join('') - String(b.price).split(' ').join('')
               }else if (this.sortItem == 'Highest prices') {
                  return String(b.price).split(' ').join('') - String(a.price).split(' ').join('')
               }
            })
            this.createPage(this.nowPage);
         },
         /**
          * Вибирає елементи з bodyType, які не підлягають відображенню через їх відсутнність у відфільтрованому масиві 
         */
         selectActiveBodyFilters() {
            let bodyArray = {};
            for (let key in this.checkbox) {
               bodyArray[key] = this.checkbox[key];
            }
            let selectedBodyArray = [];
            let selectonArray = (this.bodyFilterArray.length > 0 ? this.bodyFilterArray : this.listCars);
            for (const car of selectonArray) {
               if (Object.hasOwn(bodyArray, car.bodyType)) {
                  if (!selectedBodyArray.includes(car.bodyType)) {
                     selectedBodyArray.push(car.bodyType);
                  }
               } 
            }
            for (let [key, value] of Object.entries(bodyArray)) {
               if (selectedBodyArray.includes(key)) {
                  bodyArray[key] = false;
               } else {
                  bodyArray[key] = true;
               }
            }

            //this.activeBodyFilters = bodyArray;
            this.disabledTrucks = bodyArray['Trucks'];
            this.disabledSUV = bodyArray['SUV'];
            this.disabledSedan = bodyArray['Sedan'];
            this.disabledHatchback = bodyArray['Hatchback'];
            this.disabledCoupe = bodyArray['Coupe'];
            this.disabledConvertiable = bodyArray['Convertiable'];
            this.disabledVAN = bodyArray['VAN'];
         },
         /**
          * Вибирає елементи з transmission, які не підлягають відображенню через їх відсутнність у відфільтрованому масиві 
         */
         selectActiveTransmission() {
            let transmissionArray = {};
            for (let key in this.checkboxTrans) {
               transmissionArray[key] = this.checkboxTrans[key];
            }
            let selectedtransmissionArray = [];
            let selectonArray = (this.transmissionFilterArray.length > 0 ? this.transmissionFilterArray : this.listCars);
            for (const car of selectonArray) {
               if (Object.hasOwn(transmissionArray, car.transmission)) {
                  if (!selectedtransmissionArray.includes(car.transmission)) {
                     selectedtransmissionArray.push(car.transmission);
                  }
               } 
            }
            for (let [key, value] of Object.entries(transmissionArray)) {
               if (selectedtransmissionArray.includes(key)) {
                  transmissionArray[key] = false;
               } else {
                  transmissionArray[key] = true;
               }
            }
            this.disabledAutomatic = transmissionArray['Automatic'];
            this.disabledManual = transmissionArray['Manual'];
         },
         filtersReplacement(filter) {
            let ourList = [];
            for (let key in this.listCars) {
               ourList[key] = this.listCars[key];
            }
            if (!(filter == this.makeFilters || filter == this.modelFilters)) {
            let temporaryArray = [];
               for (const car of ourList) {
                  if (this.makeFilters.includes(car.make)) {
                     temporaryArray.push(car);
                  }
               }
               if (temporaryArray.length > 0) {
                  ourList.splice(0, ourList.length);
                  for (let key in temporaryArray) {
                     ourList[key] = temporaryArray[key];
                  }
               }
               if (this.modelFilters.length > 0) {
                  let temporaryArray = [];
                  for (const car of ourList) {
                     if (this.modelFilters.includes(car.model)) {
                        temporaryArray.push(car);
                     }
                  }
                  if (temporaryArray.length > 0) {
                     ourList.splice(0, ourList.length);
                     for (let key in temporaryArray) {
                        ourList[key] = temporaryArray[key];
                     }
                  }
               }
            } 
            if (!(filter == this.bodyTypeFilter)) {
               let temporaryArray = [];
               for (const car of ourList) {
                  if (this.bodyTypeFilter.includes(car.bodyType)) {
                     temporaryArray.push(car);
                  }
               }
               if (temporaryArray.length > 0) {
                  ourList.splice(0, ourList.length);
                  for (let key in temporaryArray) {
                     ourList[key] = temporaryArray[key];
                  }
               }
            }  
            if (!(filter == this.transmissionFilter)) {
               let temporaryArray = [];
               for (const car of ourList) {
                  if (this.transmissionFilter.includes(car.transmission)) {
                     temporaryArray.push(car);
                  }
               }
               if (temporaryArray.length > 0) {
                  ourList.splice(0, ourList.length);
                  for (let key in temporaryArray) {
                     ourList[key] = temporaryArray[key];
                  }
               }
            }  
            if (!(filter == this.priceFilters)) {
               if (this.priceFilters.length > 0) {
                  let temporaryArray = [];
                  for (const car of ourList) {
                     let x = car.price;
                     if (typeof x === 'string') {
                        x = x.split(' ').join('');
                     }
                     if (this.priceFilters[0] <= x && this.priceFilters[1] >= x) {
                        temporaryArray.push(car);
                     }
                  }
                  ourList.splice(0, ourList.length);
                  for (let key in temporaryArray) {
                     ourList[key] = temporaryArray[key];
                  }
               }
            }  
            if (!(filter == this.yearFilters)) {
               if (this.yearFilters.length > 0) {
                  let temporaryArray = [];
                  for (const car of ourList) {
                     let x = car.year;
                     if (typeof x === 'string') {
                        x = x.split(' ').join('');
                     }
                     if (this.yearFilters[0] <= x && this.yearFilters[1] >= x) {
                        temporaryArray.push(car);
                     }
                  }
                  ourList.splice(0, ourList.length);
                  for (let key in temporaryArray) {
                     ourList[key] = temporaryArray[key];
                  }
               }
            } 
            return ourList
         },
         /**
          * Створює масиви в яких фільтри вибирають актуальні значення для фільтрації, а також масив що відображається після фільтрації
         */
         createArraysForFilters() {
            this.makeFilterArray = this.filtersReplacement(this.makeFilters);
            this.bodyFilterArray= this.filtersReplacement(this.bodyTypeFilter);
            this.transmissionFilterArray = this.filtersReplacement(this.transmissionFilter);
            this.priceFilterArray = this.filtersReplacement(this.priceFilters);
            this.yearFilterArray = this.filtersReplacement(this.yearFilters);
            //this.kilometresFilterArray = this.filtersReplacement(this.);
            this.listForDisplay = this.filtersReplacement(1);
         },
         /**
          * Знаходить максимальне та мінімальне значення властивості в масиві
          * @param property властивість
          * @param arrayForSelect масив, в якому потрібно знаходити значення
         */
         computeSliderPropertyArray(property, arrayForSelect) {
            let propertys = this.propertyCars;
            let propertyArray = [];
            let dataObject = (arrayForSelect.length > 0 ? arrayForSelect : this.listCars);
            if (dataObject.length != 0) {
                     for (let object = 0; object < dataObject.length; object++) {
                        if (hasOwn(dataObject[object], property)) {
                           let value = dataObject[object][property];
                           if (typeof value === 'string') {
                              value = parseFloat(value.split(' ').join(''));
                           }   
                           propertyArray.push(value);
                        }
                     }
                     function compareNumbers(a, b) {
                        return a - b;
                     }
                     propertyArray.sort(compareNumbers);
            }
            let minValue = propertyArray[0];
            let maxValue = propertyArray[propertyArray.length - 1];
            let minYear = propertys.year[0];
            let maxYear = propertys.year[propertys.year.length - 1];
            let minKilometres = propertys.kilometres[0];
            let maxKilometres = propertys.kilometres[propertys.kilometres.length - 1];
            return {propertys, minYear, maxYear, minKilometres, maxKilometres, minValue, maxValue}
         },
         /**
          * При переміщенні повзунка копіює їх значення до масиву kilometresFilters, з якого значення відображається в Tag
         */
         selectKilometresFilter() {
            this.kilometresFilters[0] = this.kilometres.value;
         },
      },
      watch: {
         /**
          * Запускає оновлення можливи значень для всіх фільтрів при виборі фільтра year
         */
         yearFilters: {
            handler(newValue, oldValue) {
                  this.createArraysForFilters(this.yearFilters);
            },
            deep: true
         },
         /**
          * При змініфільтрів визначає максимальне та мінімальне значення для year
         */
         yearFilterArray: {
            handler(newValue, oldValue) {
               this.yearMimMax[0] = this.computeSliderPropertyArray('year', newValue).minValue;
               this.yearMimMax[1] = this.computeSliderPropertyArray('year', newValue).maxValue;
            },
            deep: true,
            immediate: true,
         },
         /**
          * При зміні мін та макс значення для year оновлює значення для повзунків, якщо не було вибрано фільтра year
         */
         yearMimMax: {
            handler(newValue, oldValue) {
               if (oldValue) {
                  if (this.yearFilters.length == 0) {
                     this.year.value[0] = this.computeSliderPropertyArray('year', this.yearFilterArray).minValue;
                     this.year.value[1] = this.computeSliderPropertyArray('year', this.yearFilterArray).maxValue;
                  }
               }
            },
            deep: true,
            immediate: true,
            flush: 'post'
         },
         /**
          * Запускає оновлення можливих значень для всіх фільтрів при виборі фільтра price
         */
         priceFilters: {
            handler(newValue, oldValue) {
                  this.createArraysForFilters(this.priceFilters);
            },
            deep: true
         },
         /**
          * При змініфільтрів визначає максимальне та мінімальне значення для price
         */
         priceFilterArray: {
            handler(newValue, oldValue) {
               this.priceMinMax[0] = this.computeSliderPropertyArray('price', newValue).minValue;
               this.priceMinMax[1] = this.computeSliderPropertyArray('price', newValue).maxValue;
            },
            deep: true,
            immediate: true,
         },
         /**
          * При зміні мін та макс значення для price оновлює значення для повзунків, якщо не було вибрано фільтра price
         */
         priceMinMax: {
            handler(newValue, oldValue) {
               if (oldValue) {
                  if (this.priceFilters.length == 0) {
                     this.price.value[0] = this.computeSliderPropertyArray('price', this.priceFilterArray).minValue;
                     this.price.value[1] = this.computeSliderPropertyArray('price', this.priceFilterArray).maxValue;
                  }
               }
            },
            deep: true,
            immediate: true,
            flush: 'post'
         },
         bodyFilterArray: {
            handler(newValue, oldValue) {
               this.selectActiveBodyFilters();
            },
            deep: true,
            immediate: true
         },
         transmissionFilterArray: {
            handler(newValue, oldValue) {
               this.selectActiveTransmission();
            },
            deep: true,
            immediate: true
         },
         checkbox: {
            handler(newCheckbox, oldCheckbox) {
               this.selectCheckboxFilter(this.bodyTypeFilter, newCheckbox);
            },
            deep: true
         },
         checkboxTrans: {
            handler(newCheckbox, oldCheckbox) {
               this.selectCheckboxFilter(this.transmissionFilter, newCheckbox);
            },
            deep: true
         },
         bodyTypeFilter: {
            handler(newBodyTypeFilter, oldBodyTypeFilter) {
               this.createArraysForFilters();
            },
            deep: true
         },
         transmissionFilter: {
            handler(newModelFilters, oldModelFilters) {
               this.createArraysForFilters();
            },
            deep: true
         },
         modelFilters: {
            handler(newModelFilters, oldModelFilters) {
               this.createArraysForFilters();
            },
            deep: true
         },
         makeFilters: {
            handler(newMakeFilters, oldMakeFilters) {
               this.createArraysForFilters();
            },
            deep: true
         },
         listForDisplay: {
            handler(newList, oldList) {
               this.createPage(1);
               this.createPagination(this.whatShow, this.numberOfCards);
            },
            deep: true,
         }
      },
      computed: {
         //noMatches() {
         //   if (this.whatShow.length == 0) {
         //      return true
         //   } else {
         //      return false
         //   }
         //},
         //startComputeSliderPropertyArray() {
         //   let min = this.computeSliderPropertyArray('price', this.priceFilterArray).minValue;
         //   let max = this.computeSliderPropertyArray('price', this.priceFilterArray).maxValue;
         //   return {min, max}
         //},
         whatShow() {
            if (this.listForDisplay.length == 0 && (this.yearFilters.length > 0 || this.priceFilters.length > 0)) {
               this.noMatches = true;
               return this.listForDisplay
            } else {
               this.noMatches = false;
               return this.listForDisplay.length > 0 ? this.listForDisplay : this.listCars
            }
            //return this.listForDisplay.length > 0 ? this.listForDisplay : this.listCars;
         },
         selectAllMakeModel() {
            let selectedMakeObject = {};
            let selectonArray = (this.makeFilterArray.length > 0 ? this.makeFilterArray : this.listCars);
            for (const car of selectonArray) {
               if (!Object.getOwnPropertyNames(selectedMakeObject).includes(car.make)) {
                  let index = this.makeFilters.indexOf(car.make);
                  if (index == -1) {
                     selectedMakeObject[car.make] = [car.model];
                  }
               }
                else if (Object.getOwnPropertyNames(selectedMakeObject).includes(car.make) && !selectedMakeObject[car.make].includes(car.model)){
                  selectedMakeObject[car.make].push(car.model);
               }
            }
            let arrayMake = Object.getOwnPropertyNames(selectedMakeObject);
            return {selectedMakeObject, arrayMake}
         },
         computePropertyArray() {
            //console.log('computePropertyArray');
            let propertys = this.propertyCars;
            let dataObject = this.listCars;
            //let selectonArray = (this.transmissionFilterArray.length > 0 ? this.transmissionFilterArray : this.listCars);
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
         currentSortList() {
            return this.sortList.filter(item => item != this.sortItem)
         },
         filterSelectedMake() {
            return this.selectAllMakeModel.arrayMake.filter((make) => make.toLowerCase().indexOf(this.makeValue) !== -1)
         },
         filterSelectedModel() {
            return this.selectedModel.filter((model) => model.toLowerCase().indexOf(this.modelValue) !== -1)
         },
      },
      mounted() {
         this.resetPriceValue();
         this.resetYearValue();
         this.resetKilometresValue();
         this.createPage(this.nowPage);
         this.createPagination(this.whatShow, this.numberOfCards);
         this.displayedListCars = this.listCars;
         //this.selectAllMake();
         //this.selectAllModel();
         //this.selectAllMakeModel();
      },
      unmounted() {
         this.menuStore.closeFilter();
      },
      setup() {
         createPagination;
         selectedValueKilometres;
         const menuStore = useMenuStore();
         return { 
            createPagination, 
            selectedValueKilometres,
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
         //display: none;
         position: absolute;
         top: 0px;
         left: 0;
         height: 100vh;
         margin-top: 81px;
         padding: 48px var(--pdng-conteiner) 81px;
         z-index: 9;
         background: var(--color-white);
         transform: translate(0, -100%);
         opacity: 0;
         transition-property: opacity, transform, z-index;
         transition-duration: 900ms, 900ms, 500ms;
         transition-timing-function: linear;
         transition-delay: 0s, 0.2s, 0s;
         overflow-y: auto;
         overflow-x: hidden;
      }
   }

   @media (max-width: 1024px) {
      ._active-filter {
         display: block;
         transform: translate(0, 0px);
         opacity: 1;
         z-index: 10;
         transition-property: opacity, transform, z-index;
         transition-duration: 500ms, 500ms, 0ms;
         transition-timing-function: linear;
         transition-delay: 0s, 0.1s, 0.6s;
      }
      ._opened-menu {
         z-index: 9;
         transition-property: z-index;
         transition-duration: 0ms;
         transition-timing-function: linear;
         transition-delay: 0s;
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
      top: 48px ;
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
         height: min-content;
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
      cursor: pointer;
      &:not(:last-child) {
         margin-bottom: 10px;
      }
      &:hover {
         transform: scale(1.01);
         color: var(--color-text);
      }
   }

   &__select-opacity {
      width: calc(100% - 6px);
      height: 37px;
      position: absolute;
      left: 1px;
      bottom: 1px;
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
      cursor: pointer;
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
</style>