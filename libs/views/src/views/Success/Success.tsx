import React, { FC } from 'react';
import { css, Heading, Button, Section } from '@galaxy/core';
import { thankYouTheme } from './Success.galaxy';
const { thankYou } = thankYouTheme;

export const Success: FC<SuccessProps> = ({
  variants,
  siteId,
}: SuccessProps) => {
  const thankYouCss = css({ variants: variants });
  return (
    <Section className="space-y-6 max-w-sm text-center flex flex-col mx-auto items-center">
      <svg
        width={120}
        height={120}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M63.3789 65.6936C62.4404 65.5684 61.4393 65.5059 60.4383 65.5059C59.187 65.5059 57.9983 65.631 56.8095 65.8187C60.6886 75.5163 57.0598 86.9032 47.8001 92.2838C45.6104 93.5976 43.2329 94.411 40.918 94.8489C44.0462 102.67 51.6166 108.175 60.4383 108.175C69.5102 108.175 77.2683 102.357 80.2715 94.1607C77.6437 93.7853 75.0785 92.9094 72.6385 91.533C63.6291 86.1524 59.9378 75.2035 63.3789 65.6936Z"
          fill="#E2C9E1"
        />
        <path
          d="M99.3539 59.312C97.7272 61.4392 95.7251 63.2536 93.2851 64.6926C84.2757 69.9481 73.0139 67.6957 66.5697 59.9377C66.0066 60.6884 65.4436 61.5018 64.943 62.3777C64.3174 63.4413 63.8169 64.5675 63.3789 65.6937C73.6396 67.1327 81.5228 76.0169 81.5228 86.7781C81.5228 89.3433 81.0848 91.7833 80.2715 94.0982C88.5301 95.287 97.039 91.4079 101.419 83.6499C105.986 75.6415 104.86 65.9439 99.3539 59.312Z"
          fill="#E2C9E1"
        />
        <path
          d="M63.3793 65.6936C59.9382 75.2035 63.6295 86.215 72.6389 91.4705C75.079 92.9095 77.6441 93.7228 80.2719 94.0982C81.0852 91.8458 81.5232 89.3432 81.5232 86.7781C81.5232 76.0169 73.64 67.1326 63.3793 65.6936Z"
          fill="#892885"
        />
        <path
          d="M63.1914 54.1816C63.5668 55.0575 64.0048 55.996 64.4427 56.8094C65.0684 57.873 65.7566 58.874 66.5074 59.8125C72.889 51.5539 84.4636 49.1138 93.6606 54.4944C95.8504 55.8083 97.7274 57.3724 99.2915 59.2494C104.422 52.6175 105.36 43.2327 100.918 35.5372C96.3509 27.5914 87.4667 23.7124 79.0204 25.2139C80.0214 27.654 80.5845 30.4068 80.5845 33.2223C80.6471 43.7332 73.0767 52.4924 63.1914 54.1816Z"
          fill="#E2C9E1"
        />
        <path
          d="M93.7226 54.5569C84.5255 49.1763 72.951 51.6164 66.5693 59.875C73.0135 67.6956 84.2753 69.8854 93.2847 64.6299C95.7247 63.1909 97.7268 61.3765 99.3535 59.2493C97.7894 57.4349 95.9124 55.8082 93.7226 54.5569Z"
          fill="#892885"
        />
        <path
          d="M56.6221 54.3067C57.5606 54.4318 58.5616 54.4944 59.5627 54.4944C60.814 54.4944 62.0027 54.3693 63.1914 54.1816C59.3124 44.484 62.9412 33.0971 72.2008 27.7165C74.3906 26.4026 76.7681 25.5893 79.083 25.1513C75.9547 17.3307 68.3843 11.825 59.5627 11.825C50.4907 11.825 42.7326 17.6435 39.7295 25.8396C42.3572 26.2149 44.9224 27.0909 47.3624 28.4673C56.3718 33.8479 60.0632 44.7968 56.6221 54.3067Z"
          fill="#E2C9E1"
        />
        <path
          d="M63.1911 54.1815C73.0763 52.4297 80.6467 43.7332 80.6467 33.2222C80.6467 30.4068 80.0836 27.7165 79.0826 25.2139C76.7051 25.6518 74.3902 26.4652 72.2004 27.779C62.9408 33.1596 59.2495 44.4839 63.1911 54.1815Z"
          fill="#892885"
        />
        <path
          d="M26.7158 55.3076C35.7252 50.0522 46.9869 52.3045 53.4311 60.0626C53.9942 59.3118 54.5573 58.4985 55.0578 57.6225C55.6835 56.5589 56.184 55.4328 56.622 54.3066C46.3613 52.8676 38.4781 43.9833 38.4781 33.2221C38.4781 30.657 38.916 28.2169 39.7294 25.902C31.4708 24.7133 22.9619 28.5923 18.5823 36.3504C14.0151 44.2962 15.1412 53.9938 20.647 60.6882C22.2737 58.561 24.3383 56.7466 26.7158 55.3076Z"
          fill="#E2C9E1"
        />
        <path
          d="M56.6224 54.3067C60.0635 44.7968 56.3722 33.7853 47.3628 28.5298C44.9227 27.0908 42.3576 26.2775 39.7298 25.9021C38.9165 28.1544 38.4785 30.6571 38.4785 33.2222C38.4785 43.9834 46.3617 52.8677 56.6224 54.3067Z"
          fill="#892885"
        />
        <path
          d="M56.8094 65.8186C56.434 64.9427 55.9961 64.0042 55.5581 63.1909C54.9325 62.1273 54.2442 61.1262 53.4935 60.1877C47.1118 68.4463 35.5372 70.8864 26.3402 65.5058C24.1504 64.1919 22.2734 62.6278 20.7093 60.7508C15.579 67.3827 14.6405 76.7675 19.0826 84.463C23.6499 92.4088 32.5341 96.2879 40.9804 94.7863C39.9794 92.3462 39.4163 89.5934 39.4163 86.7779C39.3537 76.267 46.9241 67.5079 56.8094 65.8186Z"
          fill="#E2C9E1"
        />
        <path
          d="M56.8092 65.8186C46.9239 67.5704 39.3535 76.267 39.3535 86.7779C39.3535 89.5934 39.9166 92.2837 40.9176 94.7863C43.2951 94.3483 45.61 93.535 47.7998 92.2211C57.0595 86.8405 60.6882 75.5162 56.8092 65.8186Z"
          fill="#892885"
        />
        <path
          d="M26.2783 65.4434C35.4754 70.824 47.05 68.384 53.4316 60.1254C46.9874 52.3047 35.7257 50.1149 26.7163 55.3704C24.2762 56.8094 22.2742 58.6238 20.6475 60.751C22.2116 62.5654 24.0885 64.1921 26.2783 65.4434Z"
          fill="#892885"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="20.9929"
            y1="99.0016"
            x2="95.9819"
            y2="24.0125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDF5FF" />
            <stop offset={1} stopColor="#EBE4ED" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
      <Heading
        text="Success!"
        fontWeight="strong"
        fontSize={8}
        className="text-shifter-purple-500"
      />
      <Heading
        text="Team has successfully been created"
        as="p"
        fontSize={5}
        variant="primary"
      />
      <Button
        label="Go to your new team"
        variant="primary"
        className="flex mx-auto"
        // TODO: Remove demo
        href="/admin/sites/ab7edf38-3979-4357-9569-37bb9de74ecf/"
      />
      <Button
        label="View all teams"
        variant="ghost"
        className="flex mx-auto"
        // TODO: Remove demo
        href="/admin/teams/"
      />
    </Section>
  );
};

export type SuccessProps = {
  variants?: any;
  variant?: string;
  siteId?: string;
};

Success.defaultProps = {
  variants: thankYou,
};
