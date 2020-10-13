import React from 'react';
import 'antd/dist/antd.css';
import { Form, Checkbox, Input } from 'antd';

export default function FilterForm() {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  const typesOfForce = ['Presence', 'Chemical', 'Projectile'];

  return (
    <div>
      <div>
        <Form>
          <Input.Group>
            City <input id={'city'} />
            State <input id={'state'} />
          </Input.Group>
          <Checkbox.Group
            options={typesOfForce}
            defaultValue={['Presence', 'Chemical', 'Projectile']}
            onChange={onChange}
          />
        </Form>
      </div>
    </div>
  );
}
