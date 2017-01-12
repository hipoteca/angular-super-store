import {Component, OnInit, ElementRef, AfterViewInit, AfterContentInit} from '@angular/core';

import {Slide} from '../commons/slide';
import {Category} from '../commons/categories';
import {ApiService} from '../services/api.services';

declare var jQuery:any;

@Component({
    selector:'wellcome',
    template:
    `
    <div class="slider">

    <ul class="slides">

      <li *ngFor = "let slide of slides" >
        <img [src]="slide.image"> <!-- random image -->
        <div class="caption left-align">
          <h3>{{slide.title}}</h3>
          <h5 class="light grey-text text-lighten-3">{{slide.subtitle}}</h5>
        </div>
      </li>
    </ul>
    </div>

    <div class="divider"></div>  

      <div class="row">

        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="./assets/images/categories/boats.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">More...</a>
            </div>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="./assets/images/categories/boats.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">More...</a>
            </div>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="./assets/images/categories/boats.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">More...</a>
            </div>
          </div>
        </div>

      </div>
{{slides | json}}

    `,
    providers:[ApiService]

})
export class WellcomeComponent implements OnInit,AfterViewInit,AfterContentInit{

  elementRef: ElementRef;
  slides: Slide[];
  categories:Category[];

  constructor(elementRef: ElementRef, private apiService:ApiService){
    console.debug('WellcomeComponent::constructor');
  }


  getSlides(){
    //--
    this.apiService.getSlides().then(slides => 
    {
      this.slides=slides; 
      console.info('--->');
       jQuery('.slider').slider({
        full_width: false,
        interval:5000,
        transition:800,
      });
    }
  );
  }

  getCategiries(){
    this.apiService.getCategories()
    .then(categories=> this.categories=categories);
  }

  ngOnInit(){ 
    this.getSlides();  
  }
  ngAfterViewInit(){
    console.info('++++++++++++++++++++++++++++++++++++++++')
    jQuery('.slider').slider({
        full_width: false,
        interval:5000,
        transition:800,
      });
  }
  ngAfterContentInit(){
    console.info('**********************************************************')
    jQuery('.slider');
    jQuery('.slider').slider({
        full_width: false,
        interval:5000,
        transition:800,
      });
  }

}
