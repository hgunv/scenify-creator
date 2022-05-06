function Logo({ size }: { size: number }) {
  return (
    <svg height={size} width="70px" viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.1892 13.0178C6.17304 20.02 -0.323621 37.8694 6.67855 52.8856L13.4404 67.3865C20.4426 82.4027 38.292 88.8994 53.3082 81.8972L66.9028 75.5579C81.919 68.5558 88.4157 50.7064 81.4135 35.6902L59.6621 45.833L52.9002 31.3321L74.6516 21.1892C67.6495 6.17303 49.8001 -0.323626 34.7839 6.67854L21.1892 13.0178Z" fill="#555"/>
          <path d="M20.703 42.7355C20.3754 42.033 20.4832 41.2044 20.9797 40.6092L30.8879 28.7306C31.8267 27.6052 33.617 27.8382 34.2364 29.1664L39.9471 41.413C40.2657 42.0964 40.1729 42.901 39.707 43.4939L30.0127 55.8312C29.0915 57.0035 27.2576 56.792 26.6275 55.4407L20.703 42.7355Z" fill="white"/>
          <g filter="url(#filter0_d)">
            <path d="M27.4832 43.0787C27.1591 42.3838 27.2609 41.5648 27.7452 40.9703L40.376 25.4655C41.308 24.3215 43.1156 24.5461 43.7392 25.8835L51.4 42.3122C51.715 42.9877 51.6282 43.7823 51.1749 44.3739L38.8274 60.4863C37.914 61.6781 36.0619 61.4759 35.4273 60.115L27.4832 43.0787Z" fill="#FF017D"/>
          </g>
          <g filter="url(#filter1_d)">
            <path d="M35.8992 44.5635C35.5702 43.8579 35.6806 43.0254 36.1821 42.4299L52.5162 23.0359C53.4577 21.9182 55.241 22.1546 55.8586 23.4791L65.214 43.5417C65.5342 44.2284 65.4388 45.0371 64.9678 45.6305L48.9806 65.7686C48.0563 66.9329 46.2299 66.7176 45.6016 65.3703L35.8992 44.5635Z" fill="white"/>
          </g>
      </g>
      <defs>
          <filter id="filter0_d" x="18.9541" y="24.0686" width="41.2583" height="45.8614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <filter id="filter1_d" x="26.542" y="21.6643" width="48.3762" height="53.5209" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <clipPath id="clip0">
            <rect width="88" height="88" fill="white"/>
          </clipPath>
      </defs>
    </svg>
  )
}

export default Logo
