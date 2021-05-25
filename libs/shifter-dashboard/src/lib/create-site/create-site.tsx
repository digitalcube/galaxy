import React, { FC } from 'react';
import {
  Modal,
  Heading,
  Section,
  Field,
  Button,
  Link,
  Form,
  Select,
} from '@galaxy/core';
import {
  Header,
  PricingPlans,
  PricingTable,
  Checkout,
  ThankYou,
} from '@galaxy/views';
import { Team } from '@galaxy/shifter-dashboard';
import { IoCloseOutline } from 'react-icons/io5';
import { useInternalLinkBase } from '../../lib/internal-path-provider/internal-path-provider';

/* eslint-disable-next-line */
export interface CreateSiteProps {
  teams?: Team[];
}

const Step_01: FC<CreateSiteProps> = () => {
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
          variant="primary"
        />
      </Section>
      <Section>
        <Form>
          <div className="space-y-8 flex-grow">
            <div className="flex items-end">
              <div className="space-y-3 w-1/3">
                <Heading
                  as="label"
                  htmlFor="siteName"
                  text="Team"
                  fontSize={4}
                  variant="primary"
                  fontWeight="strong"
                />
                <Select
                  className="w-full"
                  options={['Default Team', 'Another Team']}
                  handleSelect={() => undefined}
                />
              </div>
              <div className="space-y-3 flex-grow flex flex-col">
                <Heading
                  as="label"
                  htmlFor="siteName"
                  text="Site Name"
                  fontSize={4}
                  variant="primary"
                  fontWeight="strong"
                />
                <Field placeholder="Site Name" variant="primary" />
              </div>
            </div>
            <Button
              className="inline-flex"
              href="/site/create/2/"
              label="Confirm"
            />
          </div>
        </Form>
      </Section>
    </>
  );
};

const Step_02: FC<CreateSiteProps> = () => {
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
          variant="primary"
          fontSize={7}
        />
      </Section>
      <Section className="space-y-16">
        <PricingPlans />
        <Button
          label="Compare plans"
          variant="ghost"
          className="flex mx-auto"
        />
        <PricingTable />
      </Section>
    </>
  );
};

const Step_03: FC<CreateSiteProps> = () => {
  return (
    <>
      <Section className="space-y-6 mb-16 w-full">
        <Heading
          text="Step 3 of 3"
          fontWeight="strong"
          fontSize={3}
          className="text-shifter-gray-600"
        />
        <Heading
          text="Checkout"
          fontWeight="strong"
          fontSize={7}
          variant="primary"
        />
      </Section>
      <Section>
        <Checkout />
      </Section>
    </>
  );
};

const Step_04: FC<CreateSiteProps> = () => {
  return (
    <Section>
      <ThankYou />
    </Section>
  );
};

const Steps: FC<CreateSiteProps> = () => {
  if (window.location.pathname === `/site/create/4/`) return <Step_04 />;
  if (window.location.pathname === `/site/create/3/`) return <Step_03 />;
  if (window.location.pathname === `/site/create/2/`) return <Step_02 />;
  return <Step_01 />;
};

export function CreateSite(props: CreateSiteProps) {
  const { admin } = useInternalLinkBase();
  return (
    <Modal>
      <Header
        logo="/assets/shifter-logomark.svg"
        className="px-8 py-6"
        mainClassName="px-8"
        aside={
          <Link href={`/${admin}/`}>
            <IoCloseOutline className="h-6 w-6 text-shifter-purple-primary" />
          </Link>
        }
      />
      <Section className="w-full max-w-screen-lg mx-auto py-20">
        <Steps />
      </Section>
    </Modal>
  );
}

export default CreateSite;
