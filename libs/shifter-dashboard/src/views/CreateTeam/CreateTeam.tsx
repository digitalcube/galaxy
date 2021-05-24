import React, { FC } from 'react';
import {
  Heading,
  Section,
  Input,
  Button,
  Link,
  Card,
  Modal,
} from '@galaxy/core';
import { Header, Success } from '@galaxy/views';
import { Team } from '@galaxy/shifter-dashboard';
import { Form, Formik, FormikProps } from 'formik';
import { XIcon } from '@heroicons/react/solid';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

export const Step_01: FC<CreateTeam> = () => {
  return (
    <>
      <Section className="space-y-6 mb-16 w-full">
        <Heading
          text="Step 1 of 2"
          fontWeight="strong"
          fontSize={3}
          className="text-shifter-gray-600"
        />
        <Heading
          text="Team Information"
          fontWeight="strong"
          fontSize={7}
          variant="primary"
        />
      </Section>
      <Section className="max-w-lg mx-auto space-y-6">
        <Card
          main={
            <Formik
              initialValues={{
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
                    <div className="space-y-3">
                      <Heading
                        as="label"
                        htmlFor="siteName"
                        text="Team Name (required)"
                        fontSize={4}
                        variant="primary"
                        fontWeight="strong"
                      />
                      <Input placeholder="Team name" />
                    </div>
                    <div className="space-y-3">
                      <Heading
                        as="label"
                        htmlFor="siteName"
                        text="Contact Info"
                        fontSize={4}
                        variant="primary"
                        fontWeight="strong"
                      />
                      <Input placeholder="Phone number" />
                    </div>
                    <div className="space-y-3">
                      <Heading
                        as="label"
                        htmlFor="siteName"
                        text="Location Info"
                        fontSize={4}
                        variant="primary"
                        fontWeight="strong"
                      />
                      <div className="ring-2 ring-shifter-purple-primary focus:outline-none focus:border-shifter-purple-primary rounded p-3 w-full">
                        <select
                          id="country"
                          name="country"
                          className="border-transparent bg-transparent text-shifter-purple-700 rounded w-full"
                        >
                          <option>Country</option>
                          <option>Another Country</option>
                        </select>
                      </div>
                      <div className="ring-2 ring-shifter-purple-primary focus:outline-none focus:border-shifter-purple-primary rounded p-3 w-full">
                        <select
                          id="state"
                          name="state"
                          className="border-transparent bg-transparent text-shifter-purple-700 rounded w-full"
                        >
                          <option>State/Province</option>
                          <option>Another State/Province</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          }
        ></Card>
        <Button className="inline-flex" href="/create/team/2/" label="Next" />
      </Section>
    </>
  );
};

export const Step_02: FC<CreateTeam> = () => {
  return (
    <>
      <Section className="space-y-6 mb-16 w-full">
        <Heading
          text="Step 2 of 2"
          fontWeight="strong"
          fontSize={3}
          className="text-shifter-gray-600"
        />
        <Heading
          text="Add members to Cool Team"
          fontWeight="strong"
          fontSize={7}
          variant="primary"
        />
      </Section>
      <Section className="space-y-6">
        <Card
          className="p-6"
          mainClassName="flex flex-col items-center space-y-4"
          main={
            <>
              <Heading
                text="Team Information"
                fontWeight="strong"
                fontSize={4}
                variant="primary"
              />
              <Section className="space-x-4">
                <Button variant="outlinePrimary" label="Add a new member" />
                <Button variant="outlinePrimary" label="Upload team as .csv" />
              </Section>
            </>
          }
        ></Card>
        <Section className="flex space-x-4">
          <Button
            href="/create/team/"
            label="Back"
            variant="ghost"
            className="inline-flex"
          />
          <Button
            href="/create/team/3/"
            variant="primary"
            label="Next"
            className="inline-flex"
          />
          <Button
            href="/create/team/3/"
            label="Skip this step"
            variant="ghost"
            className="ml-auto inline-flex"
          />
        </Section>
      </Section>
    </>
  );
};

const Step_03: FC<CreateTeam> = () => {
  return (
    <Section>
      <Success />
    </Section>
  );
};

export const Steps: FC<CreateTeam> = () => {
  if (window.location.pathname === `/create/team/3/`) return <Step_03 />;
  if (window.location.pathname === `/create/team/2/`) return <Step_02 />;
  return <Step_01 />;
};

export const CreateTeam: FC<CreateTeam> = ({ teams }) => {
  const { admin } = useInternalLinkBase();
  return (
    <Modal>
      <Header
        aside={
          <Link href={`/${admin}/`}>
            <XIcon className="h-6 w-6 text-shifter-purple-primary" />
          </Link>
        }
      />
      <Section className="w-full max-w-screen-lg mx-auto py-20">
        <Steps />
      </Section>
    </Modal>
  );
};

export type CreateTeam = {
  teams?: Team[];
};
