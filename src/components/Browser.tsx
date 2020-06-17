import React from "react"

type Props = {
  className?: string
  children?: React.ReactNode
}

export const Browser = ({ className, children }: Props) => (
  <div className={`bg-purple-dark rounded overflow-hidden ${className}`}>
    <svg
      className="d-block"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 2"
      viewBox="0 0 380 16"
    >
      <defs>
        <mask width="380" height="16" x="0" y="0" maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M4 0h372a4 4 0 014 4v12H0V4a4 4 0 014-4z"
          />
        </mask>
      </defs>
      <g mask="url(#a)">
        <circle cx="14" cy="8" r="3" fill="#dad2d7" />
      </g>
      <g mask="url(#a)">
        <circle cx="30" cy="8" r="3" fill="#dad2d7" />
      </g>
      <g mask="url(#a)">
        <circle cx="46" cy="8" r="3" fill="#dad2d7" />
      </g>
    </svg>
    {children}
  </div>
)
