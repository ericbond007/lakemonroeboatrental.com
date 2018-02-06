import React from 'react';
import SVGInline from 'react-svg-inline';

const SVG = () => (
  <div>
    <SVGInline svg={
    <svg x="0" y="0" width="693" height="220" xml:space="preserve">
    <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox">
		<path fill="#fff" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"/>
    </pattern>
<g>
<text  id="text" x="115" y="150" style="font-weight:bold;font-size: 98pt; font-family:helvetica">Lake Monroe Boat Rental</text>	
</g>

	<mask id="text-mask">
      <use x="0" y="0" xlink:href="#text" opacity="1" fill="#ffffff"/>
    </mask>	
        <g id="eff">
    <use x="0" y="0" xlink:href="#text" fill="#69a8c9"/>
  	<rect class="water-fill" mask="url(#text-mask)" fill="url(#water)" x="-300" y="100" width="1200" height="120" opacity="0.3">
    <animate attributeType="xml" attributeName="x" from="-300" to="0" repeatCount="indefinite" dur="3s"/>
  </rect>

   <rect class="water-fill" mask="url(#text-mask)" fill="url(#water)" y="95" width="1600" height="120" opacity="0.3">
    <animate attributeType="xml" attributeName="x" from="-400" to="0" repeatCount="indefinite" dur="4s"/>
  </rect>
      
  <rect class="water-fill" mask="url(#text-mask)" fill="url(#water)" y="105" width="800" height="120" opacity="0.3">
    <animate attributeType="xml" attributeName="x" from="-200" to="0" repeatCount="indefinite" dur="2.4s"/>
  </rect>

      <rect class="water-fill" mask="url(#text-mask)" fill="url(#water)" y="105" width="2000" height="120" opacity="0.3">
    <animate attributeType="xml" attributeName="x" from="-500" to="0" repeatCount="indefinite" dur="3.8s"/>
  </rect>
    </g>

    <use xlink:href="#eff" opacity="0.9"/>
</svg>
    } />
  </div>
  );

  export default SVG;
