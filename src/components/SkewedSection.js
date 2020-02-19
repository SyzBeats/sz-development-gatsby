import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SkewedSection = ({ gradientColor, angle, children, color, flexDirection, zIndex }) => {
  return (
    <SkewedContainer color={color} gradientColor={gradientColor} angle={angle} flexDirection={flexDirection} zIndex={zIndex}>
      {children && children}
    </SkewedContainer>
  );
};

SkewedSection.propTypes = {
  gradientColor: PropTypes.string.isRequired,
  angle: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  flexDirection: PropTypes.string,
  zIndex: PropTypes.number
};

const SkewedContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: center;
  align-items: center;
  min-height: 80rem;
  mix-blend-mode: multiply;
  position: relative;
  padding: 5rem 0;
  transform: skewY(${props => props.angle}deg);
  z-index: ${props => props.zIndex};

  & > * {
    transform: skewY(${props => -props.angle}deg);
  }

  color: ${props => props.color};

  background-image: ${props =>
    props.gradientColor === "dark" ? "linear-gradient(180deg, #102E37 0%, #000000 100%)" : "linear-gradient(180deg, #0A3947 0%, #0097AC 100%)"};
`;

export default SkewedSection;
