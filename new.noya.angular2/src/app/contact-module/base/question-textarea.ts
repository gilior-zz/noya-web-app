import {QuestionBase} from './question-base';

export class TextSreaQuestion extends QuestionBase<string> {
  controlType = 'textarea';
  options: { key: string, value: string }[] = [];

  constructor(options: {} = {}) {
    super(options);
  }
}
