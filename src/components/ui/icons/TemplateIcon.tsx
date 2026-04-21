type IconProps = React.SVGProps<SVGSVGElement>;

export const TemplateIcon = (props: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 30 48"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0H30V15H14M0 0L14 15M0 0L13 14M0 16H16V31H0V16ZM0 16L16 31M16 31H30M14 32L0 32M14 32V47M0 32L14 47"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};