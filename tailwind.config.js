/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'
export default withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray: '#2F3235',
        bgAmberColor:'#F4E28D',
        btnHoverColor:"#3F89A1",
        heroBgColor:"#181C1F",
        titleGray:"#DEE5E5",
        gitBookEditorBtn:"#61977F",
        publishedSiteBtn:"#FDA599",
        publicDocsSectionBg: '#BBDDE5',
        internalDocsSectionBg:'#F4E28D',
        gitSyncSectinBg:'#FDA599',
        gitBookAiSectionBg:"#F2F0FF",
        VisitorAuthenticationSectionBg:'#3F89A1',
        IntegrationsSectionBg:'#202427',
        sideBarIconColor:'#3F89A1',
        textGray:'#EDF2F2',
        lightGray:'#F3F3F3',
        scalarTextColor:'#2A2F45'
      }
    },
  },
  plugins: [],
})

