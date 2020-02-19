import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
const FeatureGrid = ({ gridItems, textColor }) => (
  <div style={{ padding: "0 10vw" }} className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.text} className='column is-6'>
        <section className='section'>
          <div className='has-text-centered'>
            <div
              style={{
                width: "100%",
                display: "inline-block"
              }}>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p className={`text--subimage text--${textColor}`}>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  ),
  textColor: PropTypes.string
};

export default FeatureGrid;
