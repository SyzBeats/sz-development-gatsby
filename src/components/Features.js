import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
const FeatureGrid = ({ gridItems, textColor, colWidth }) => (
  <div style={{ padding: "0 10vw 10vw 10vw" }} className='columns is-multiline'>
    {gridItems.map(item => (
      <div key={item.text} className={`column is-${colWidth}`}>
        <section className='section'>
          <div className='has-text-centered'>
            <div>
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
  textColor: PropTypes.string,
  colWidth: PropTypes.number
};

export default FeatureGrid;
