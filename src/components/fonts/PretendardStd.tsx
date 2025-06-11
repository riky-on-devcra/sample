import localFont from "next/font/local";

export const pretendardStd = localFont({
  variable: "--font-pretendard-std",
  src: [
    {
      path: "../../fonts/PretendardStd/PretendardStd-Black.woff2",
      weight: "900",
      style: "bold",
    },
    {
      path: "../../fonts/PretendardStd/PretendardStd-ExtraBold.woff2",
      weight: "800",
      style: "bold",
    },
    {
      path: "../../fonts/PretendardStd/PretendardStd-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../fonts/PretendardStd/PretendardStd-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/PretendardStd/PretendardStd-Medium.woff2",
      weight: "500",
    },

    {
      path: "../../fonts/PretendardStd/PretendardStd-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/PretendardStd/PretendardStd-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/PretendardStd/PretendardStd-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../fonts/PretendardStd/PretendardStd-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
});
