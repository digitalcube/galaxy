import React, { FC } from 'react';
import { Section, Heading, Button, Link } from '@galaxy/core';
import { Team, TeamsControls } from '@galaxy/shifter-dashboard';

const ZeroTeams = () => {
  return (
    <Section as="div" className="flex flex-col items-center space-y-6">
      <svg
        width={250}
        height={183}
        viewBox="0 0 250 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M192.207 79.6871H154.954V150.064H192.207V79.6871Z"
          fill="#E2C9E1"
        />
        <path d="M123.037 0H0V112.022H123.037V0Z" fill="url(#paint0_linear)" />
        <path
          d="M187.072 13.3146H49.8389V171.788H187.072V13.3146Z"
          fill="#E2C9E1"
        />
        <path
          opacity="0.8"
          d="M174.285 38.442H82.6621V46.651H174.285V38.442Z"
          fill="url(#paint1_linear)"
        />
        <path
          opacity="0.8"
          d="M174.285 75.1821H82.6621V83.3911H174.285V75.1821Z"
          fill="url(#paint2_linear)"
        />
        <path
          opacity="0.8"
          d="M148.208 111.322H82.6621V119.531H148.208V111.322Z"
          fill="url(#paint3_linear)"
        />
        <path
          opacity="0.8"
          d="M179.823 108.719H148.208V122.434H179.823V108.719Z"
          fill="url(#paint4_linear)"
        />
        <path
          opacity="0.8"
          d="M174.285 147.161H82.6621V155.37H174.285V147.161Z"
          fill="url(#paint5_linear)"
        />
        <path
          d="M183.951 150.865C203.691 150.865 219.694 134.954 219.694 115.326C219.694 95.6985 203.691 79.7872 183.951 79.7872C164.211 79.7872 148.208 95.6985 148.208 115.326C148.208 134.954 164.211 150.865 183.951 150.865Z"
          stroke="#F80A5B"
          strokeWidth={3}
          strokeMiterlimit={10}
        />
        <path
          d="M209.648 139.304L206.159 142.772L232.43 168.893L235.918 165.424L209.648 139.304Z"
          fill="#E2C9E1"
        />
        <path
          d="M209.625 139.352L206.202 142.856L232.38 168.885L235.904 165.381L209.625 139.352Z"
          fill="#F80A5B"
        />
        <path
          d="M219.928 148.32L215.158 153.062L238.082 175.856L242.852 171.113L219.928 148.32Z"
          fill="#E2C9E1"
        />
        <path
          d="M219.996 141.254L208.015 153.067L238.119 183L250 171.087L219.996 141.254Z"
          fill="#892885"
        />
        <path
          d="M64.438 41.145L67.6599 44.3485L76.0167 36.1395"
          stroke="#EEEEEE"
          strokeWidth={3}
          strokeMiterlimit={10}
        />
        <path
          d="M64.438 77.8851L67.6599 81.1887L76.0167 72.8796"
          stroke="#EEEEEE"
          strokeWidth={3}
          strokeMiterlimit={10}
        />
        <path
          d="M64.438 114.725L67.6599 117.929L76.0167 109.72"
          stroke="#EEEEEE"
          strokeWidth={3}
          strokeMiterlimit={10}
        />
        <path
          d="M64.438 151.466L67.6599 154.669L76.0167 146.46"
          stroke="#EEEEEE"
          strokeWidth={3}
          strokeMiterlimit={10}
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1={0}
            y1="56.0008"
            x2="123.087"
            y2="56.0008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EBE4ED" />
            <stop offset={1} stopColor="#EBE4ED" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="82.6553"
            y1="42.5882"
            x2="163.575"
            y2="42.5882"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#68296A" />
            <stop offset={1} stopColor="#68296A" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="82.6553"
            y1="79.2858"
            x2="163.575"
            y2="79.2858"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#68296A" />
            <stop offset={1} stopColor="#68296A" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="82.6553"
            y1="115.396"
            x2="152.472"
            y2="115.396"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#68296A" />
            <stop offset={1} stopColor="#68296A" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="199.789"
            y1="115.293"
            x2="149.706"
            y2="115.673"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3952" stopColor="#68296A" />
            <stop offset={1} stopColor="#68296A" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="82.6553"
            y1="151.295"
            x2="163.575"
            y2="151.295"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#68296A" />
            <stop offset={1} stopColor="#68296A" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>

      <Heading
        fontSize={4}
        fontWeight="strong"
        variant="primary"
        text="You haven't created any teams yet"
      />
      <Section className="space-y-4 text-center">
        <Button label="Create a new team" href="/create/" />
        <Heading fontSize={3} text="or" />
        <Link href="/admin/guides/">
          <Heading
            fontSize={3}
            variant="text-shifter-purple-primary"
            text="Learn more about teams"
          />
        </Link>
      </Section>
    </Section>
  );
};

const TeamsList = ({ teams }: Teams) => {
  if (!teams) return null;
  return (
    <Section className="space-y-10">
      <TeamsControls />
      <Section className="space-y-4">
        {teams.map((team, i) => (
          <Team key={i} {...team} />
        ))}
      </Section>
    </Section>
  );
};

export const Teams: FC<Teams> = ({ teams }) => {
  if (!teams) return null;
  return teams.length > 0 ? <TeamsList teams={teams} /> : <ZeroTeams />;
};

export type Teams = {
  teams?: Team[];
};
