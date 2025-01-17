/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import React from 'react';
import { render } from 'enzyme';
import { Formik } from 'formik';

import FormikCheckableCard from './FormikCheckableCard';

describe('FormikCheckableCard', () => {
  test('render formRow', () => {
    const component = (
      <Formik>
        <FormikCheckableCard name="testing" formRow />
      </Formik>
    );

    expect(render(component)).toMatchSnapshot();
  });

  test('render', () => {
    const component = (
      <Formik>
        <FormikCheckableCard name="testing" />
      </Formik>
    );

    expect(render(component)).toMatchSnapshot();
  });
});
