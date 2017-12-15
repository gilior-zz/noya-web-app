import {QuestionBase} from '../base/question-base';
import {TextboxQuestion} from '../base/question-textbox';

export const questions: QuestionBase[] = [
  new TextboxQuestion({
    key: 'name',
    label: 'name',
    value: '',
    required: true,
    order: 1
  }),

  new TextboxQuestion({
    key: 'email',
    label: 'email',
    type: 'email',
    required: true,
    order: 2
  }),
  new TextboxQuestion({
    key: 'content',
    label: 'content',
    required: true,
    order: 3
  })
]
]
