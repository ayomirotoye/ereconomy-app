import { useTheme } from "styled-components";

export const UserIcon = ({
  className,
  strokeWidth = "10",
  fill,
  iconClass = "",
}: any) => {
  const theme = useTheme();
  let iconFill = iconClass === "primary" ? Object.assign(theme).lightMode?.primaryColor : fill;
  let iconStroke = iconFill;
  return (
    <svg
      id="user-icon"
      enableBackground="new 0 0 512 512"
      height="512"
      viewBox="0 0 512 512"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill={iconFill}
        stroke={iconStroke}
        strokeWidth={strokeWidth}
        d="M318.136,458.514H49.709v-84.505c0.06-41.159,33.404-74.503,74.563-74.563h97.727h4.971
	c81.642,0.338,148.112-65.566,148.45-147.217c0.338-81.652-65.566-148.102-147.217-148.45S80.101,69.354,79.753,150.996
	c-0.149,36.377,13.113,71.531,37.262,98.741C51.25,253.635-0.06,308.135,0,374.009v109.359c0,13.73,11.125,24.854,24.854,24.854
	h293.282c13.73,0,24.854-11.125,24.854-24.854S331.866,458.514,318.136,458.514z M226.97,54.879
	c53.845,1.541,96.246,46.428,94.705,100.272c-1.442,50.604-41.378,91.693-91.921,94.586h-7.755
	c-53.755-3.38-94.596-49.699-91.216-103.454C133.985,95.332,175.929,55.476,226.97,54.879z"
      />
      <g>
        <path
          fill={iconFill}
          stroke={iconStroke}
          strokeWidth={strokeWidth}
          d="M487.146,398.864H338.019c-13.73,0-24.854-11.125-24.854-24.854s11.125-24.854,24.854-24.854
		h149.126c13.73,0,24.854,11.125,24.854,24.854S500.875,398.864,487.146,398.864z"
        />
        <path
          fill={iconFill}
          stroke={iconStroke}
          strokeWidth={strokeWidth}
          d="M412.583,473.427c-13.73,0-24.854-11.125-24.854-24.854V299.446
		c0-13.73,11.125-24.854,24.854-24.854s24.854,11.125,24.854,24.854v149.126C437.437,462.302,426.312,473.427,412.583,473.427z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
