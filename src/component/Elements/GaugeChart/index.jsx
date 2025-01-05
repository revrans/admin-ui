import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../context/themeContext";

function GaugePointer({ color }) {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
      return null;
  }

  const target = {
      x: cx + outerRadius * Math.sin(valueAngle),
      y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
      <g>
          <circle cx={cx} cy={cy} r={5} fill={color} />
          <path
              d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
              stroke={color}
              strokeWidth={3}
          />
      </g>
  );
}

GaugePointer.propTypes = {
  color: PropTypes.string.isRequired,
};

export default function CompositionExample({ desc }) {
  const { theme } = useContext(ThemeContext);
  const value = Math.max(0, Math.min(100, desc || 0));

  // Log for debugging
  console.log("GaugeChart Desc Value:", desc);
  console.log("GaugeChart Clamped Value:", value);

  const valueColor = theme?.color || "#1976d2";

  return (
      <GaugeContainer
          width={130}
          height={100}
          startAngle={-90}
          endAngle={90}
          value={value}
          sx={{
              "& .value-arc": {
                  fill: valueColor,
              },
          }}
      >
          <GaugeReferenceArc />
          <GaugeValueArc className="value-arc" />
          <GaugePointer color={valueColor} />
      </GaugeContainer>
  );
}

CompositionExample.propTypes = {
  desc: PropTypes.number.isRequired,
};