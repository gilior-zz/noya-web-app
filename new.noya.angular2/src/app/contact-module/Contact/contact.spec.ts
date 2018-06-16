import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Contact} from "./contact";
import {QuestionControlService} from "../model/question-control.service";
import {CacheManager, TranslationService} from "../../services/services";
import {Actions} from "../../../store/actions/actions";
import {questions} from "./questions";
import {DynamicFormQuestionComponent} from "../model/dynamic-form-question.component";
import {By} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PPipe} from "../../pipes/pipes.pipe";

describe('contact',()=>{
  let  qcs,  cache,  actions
  let fixture:ComponentFixture<Contact>
  beforeEach(()=>{
    qcs=jasmine.createSpyObj(['toFormGroup']);
    cache=jasmine.createSpyObj(['GetFromCache']);
    actions=jasmine.createSpyObj(['dispatcAction']);
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations:[Contact,DynamicFormQuestionComponent,PPipe],
      providers:[
        TranslationService,
        QuestionControlService,
        CacheManager,
        Actions,
      ]
    })
    fixture=TestBed.createComponent(Contact);
    fixture.detectChanges();
  })

  it(`should dosplay correct number of questions ${questions.length}`,()=>{
  let dynamicFormQuestionComponents=fixture.debugElement.queryAll(By.directive(DynamicFormQuestionComponent));
    expect(dynamicFormQuestionComponents.length).toEqual(questions.length)
  })
})
