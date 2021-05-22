import React from 'react';
import { Card, Heading, Button, Section } from '@galaxy/core';
import { fakerDomainWizard } from '@galaxy/faker';
export interface DomainWizardStepProps {
  name?: string;
  description?: string;
  step?: number;
}

export function DomainWizardStep(props: DomainWizardStepProps) {
  const { name, description, step } = props;
  return (
    <div className="space-y-2">
      <Heading
        text={step}
        fontSize={9}
        className="text-size-9"
        fontWeight="strong"
        variant="primary"
      />
      <Heading
        variant="primary"
        text={name}
        className="text-size-3"
        fontSize={3}
        fontWeight="strong"
      />
      <Heading text={description} className="text-size-3" fontSize={3} />
    </div>
  );
}

export interface DomainWizardProps {
  current?: number;
  items?: DomainWizardStepProps[];
}

export function DomainWizard(props: DomainWizardProps) {
  const { items } = props;

  if (!items) return null;
  const allDomainWizardSteps = items.map((item, i) => {
    return <DomainWizardStep key={i} {...item} />;
  });
  return (
    <Card
      title="Steps to connect your domain"
      mainClassName="space-y-2"
      main={
        <>
          <Section
            className="bg-shifter-purple-50 p-6"
            children={
              <div className="grid grid-cols-3 gap-4 justify-items-center text-center">
                {allDomainWizardSteps}
              </div>
            }
          />
          <Button variant="ghost" label="Help setting up a custom domain" />
        </>
      }
    />
  );
}

export default DomainWizard;

DomainWizard.defaultProps = {
  items: fakerDomainWizard.domainWizardSteps,
};
