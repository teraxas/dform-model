import { DForm } from '../src/index';

const testObject = {
  version: '0.0.0',
  formName: 'name',
  formSymbolicName: 'NAME',
  controls: [
    {
      name: 'ctrlName',
      label: 'CTRLNAME',
      type: 'Textbox',
      validators: [
        {
          type: 'Regex',
          regex: 'someregex'
        },
        {
          type: 'MaxLength',
          number: 6
        }
      ]
    },
    {
      name: 'ctrlName',
      label: 'CTRLNAME',
      type: 'Checkbox',
      validators: [
        {
          type: 'Required'
        }
      ]
    }
  ]
};

describe('DForm model', () => {

  it('should map to specified object', () => {
    const dform = testObject as DForm;
  });
});
