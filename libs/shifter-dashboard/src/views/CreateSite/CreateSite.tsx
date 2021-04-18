import React, { FC } from 'react';
import { Overlay, Heading, Section, Input, Button, Link } from '@galaxy/core';
import { Header, PricingPlans } from '@galaxy/views';
import { Team } from '@galaxy/shifter-dashboard';
import { Form, Formik, FormikProps } from 'formik';
import { XIcon } from '@heroicons/react/solid';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

export const Step_01: FC<CreateSite> = () => {
  return (
    <>
      <Section className="space-y-6 mb-16 w-full">
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
            siteName: '',
            teamName: '',
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
              <div className="space-y-8">
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
                    <Input />
                  </div>
                </div>
                  <Button className="inline-flex" href="/create/2/" label="Confirm" />
              </div>
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export const Step_02: FC<CreateSite> = () => {
  return (
    <>
      <Section className="space-y-6 mb-16 w-full">
        <Heading
          text="Step 2 of 3"
          fontWeight="strong"
          fontSize={3}
          className="text-shifter-gray-600"
        />
        <Heading
          text="Select a plan"
          fontWeight="strong"
          fontSize={7}
          className="text-shifter-purple-700"
        />
      </Section>
      <Section>
        <Formik
          initialValues={{
            siteName: '',
            teamName: '',
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
              <PricingPlans />
            </Form>
          )}
        </Formik>
      </Section>
    </>
  );
};

export const Steps: FC<CreateSite> = () => {
  if (window.location.pathname === `/create/2/`) return <Step_02 />;
  return <Step_01 />;
};

export const CreateSite: FC<CreateSite> = ({ teams }) => {
  const { admin } = useInternalLinkBase();
  return (
    <Overlay className="flex justify-start bg-white">
      <Header
        aside={
          <Link href={`/${admin}/`}>
            <XIcon className="h-6 w-6 text-shifter-purple-primary" />
          </Link>
        }
      />
      <Section className="w-full max-w-screen-md mx-auto mt-20">
        <Steps />
      </Section>
    </Overlay>
  );
};

export type CreateSite = {
  teams?: Team[];
};
