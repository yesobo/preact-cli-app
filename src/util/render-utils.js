import feather from 'feather-icons';
import SVGInline from "react-svg-inline"

const checkIcon = feather.toSvg('check-circle', { 
  'stroke': 'green',
  'stroke-width': 3 
});
const xIcon = feather.toSvg('x-circle', {
  'stroke': 'red',
  'stroke-width': 3
});

export function renderChecked(boolInput) {
  return boolInput?<SVGInline svg={ checkIcon }/>:<SVGInline svg={ xIcon } />
}

export const CheckIcon = <SVGInline svg={ checkIcon }/>;
export const XIcon = <SVGInline svg={ xIcon } />;

export const Icons = [ CheckIcon, XIcon ];

export default renderChecked;
