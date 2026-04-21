type LogoProps = React.SVGProps<SVGSVGElement>;

export const Logo = (props: LogoProps) => {
  return (
    <svg
      viewBox="0 0 200 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="28"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="24"
        fontWeight="700"
      >
        <tspan fill="#E1251B">Swift</tspan>
        <tspan fill="#558DED">Router</tspan>
      </text>
    </svg>
  );
};