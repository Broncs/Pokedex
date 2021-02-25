import { Loading } from '../../styles/components/Loader';

const index = () => {
  return (
    <Loading>
      <svg
        className="pokeball"
        width="300"
        height="300"
        viewBox="-50 -50 100 100"
      >
        <defs>
          <clipPath id="ball">
            <circle cx="0" cy="0" r="43.5" />
          </clipPath>
          <clipPath id="bottom-half">
            <rect x="-50" y="0" width="100" height="50" />
          </clipPath>

          <radialGradient id="glare" cx="0" cy=".03" r="0.7">
            <stop offset="0%" stopColor="#FFF6F1" />
            <stop offset="100%" stopColor="#FE0000" />
          </radialGradient>

          <radialGradient id="glare-border" cx="0" cy=".03" r="0.9">
            <stop offset="0%" stopColor="#c5c5d0" />
            <stop offset="100%" stopColor="#111" />
          </radialGradient>
        </defs>

        <circle cx="0" cy="0" r="45" fill="url(#glare)" />
        <circle
          clipPath="url(#bottom-half)"
          cx="0"
          cy="0"
          r="45"
          fill="#fffffc"
        />

        <circle
          cx="0"
          cy="0"
          r="45"
          fill="none"
          stroke="url(#glare-border)"
          strokeWidth="3px"
        />

        <line
          clipPath="url(#ball)"
          x1="-45"
          y1="0"
          x2="45"
          y1="0"
          stroke="#111111"
          strokeWidth="2px"
        />
        <circle
          cx="0"
          cy="0"
          r="12"
          fill="#E5DDDB"
          stroke="#111111"
          strokeWidth="1px"
        />
        <circle
          cx="0"
          cy="0"
          r="8"
          fill="#fffffc"
          stroke="#111111"
          strokeWidth="1px"
        />
      </svg>
    </Loading>
  );
};

export default index;
