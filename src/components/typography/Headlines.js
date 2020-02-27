import styled from "styled-components";

export const HeadlinePrimary = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 4.5rem;
  text-transform: uppercase;
  line-height: 4.5rem;
  letter-spacing: 0.2rem;
  text-align: left;
  width: 100%;
  margin: 2rem 0;
  text-align: ${props => props.textAlign};
  color: ${props => props.textColor};
`;

export const HeadlineSecondary = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.25rem;
  letter-spacing: 0.2rem;
  text-align: left;
  width: 100%;
  margin: 2rem 0;
  text-align: ${props => props.textAlign};
  color: ${props => props.textColor};
`;

export const HeadlineTertiary = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  text-align: left;
  width: 100%;
  margin: 2rem 0;
  text-align: ${props => props.textAlign};
  color: ${props => props.textColor} !important;
`;
