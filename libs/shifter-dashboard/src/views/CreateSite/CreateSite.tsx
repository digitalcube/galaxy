import React, { FC } from 'react';
import { Overlay, Heading, Section } from '@galaxy/core';
import { Team } from '@galaxy/shifter-dashboard';
import { Field, Form, Formik, FormikProps } from 'formik';

const Input = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};

export const CreateSite: FC<CreateSite> = ({ teams }) => {
  return (
    <Overlay className="flex justify-start bg-white">
      <Section className="w-full max-w-screen-md mx-auto">
        <Section className="space-y-6 mb-20 w-full">
          <Heading
            text="Step 1 of 3"
            fontWeight="strong"
            fontSize={3}
            className="text-shifter-gray-600"
          />
          <Heading
            text="Site Information"
            fontWeight="strong"
            fontSize={7}
            className="text-shifter-purple-700"
          />
        </Section>
        <Section>
          <Formik
            initialValues={{
              email: '',
              color: 'red',
              firstName: '',
            }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props: FormikProps<any>) => (
              <Form>
                {/* <Section className="space-y-8">
                  <Section className="flex">
                    <Section className="flex flex-col space-y-2">
                      <Heading
                        as="label"
                        htmlFor="siteTeam"
                        text="Team"
                        fontSize={4}
                        fontWeight="strong"
                      />
                      <Field
                        name="siteTeam"
                        as="select"
                        className="rounded border border-shifter-purple-primary bg-white pl-3 pr-10 py-2 text-left focus:outline-none"
                      >
                        <option value="red">Default Team</option>
                        <option value="red">Another Team</option>
                      </Field>
                    </Section>
                    <Field
                      name="siteName"
                      placeholder="Site Name"
                      component={Input}
                    />
                  </Section>
                  <button type="submit">Submit</button>
                </Section> */}
                <div className="flex">
                  <div className="space-y-3 w-1/3">
                    <Heading
                      as="label"
                      htmlFor="siteName"
                      text="Team"
                      fontSize={4}
                      variant="primary"
                      fontWeight="strong"
                    />
                    <div className="ring-2 ring-shifter-purple-primary focus:outline-none focus:border-shifter-purple-primary rounded-l p-3 w-full">
                      <select
                        id="siteTeam"
                        name="siteTeam"
                        className="border-transparent bg-transparent text-shifter-purple-700 rounded w-full"
                      >
                        <option>Default Team</option>
                        <option>Another Team</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3 flex-grow">
                    <Heading
                      as="label"
                      htmlFor="siteName"
                      text="Site Name"
                      fontSize={4}
                      variant="primary"
                      fontWeight="strong"
                    />
                    <input
                      type="text"
                      name="siteName"
                      id="siteName"
                      className="ring-2 ring-shifter-purple-primary focus:outline-none focus:border-shifter-purple-primary block w-full p-3 rounded-r"
                      placeholder="Site Name"
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Section>
      </Section>
    </Overlay>
  );
};

export type CreateSite = {
  teams?: Team[];
};
