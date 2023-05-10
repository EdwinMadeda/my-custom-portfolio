import { useContext } from 'react';
import Store from '../../contexts/Store';

import 'react-tooltip/dist/react-tooltip.css';
import CustomToolTip from '../../components/CustomToolTip';

const SocialIconsTemplate = ({
  containerClass,
  itemClass,
  linkClass,
  iconClass,
  labelClass,
  iconSize = 22,
}) => {
  const { QUICK_SOCIAL_LINKS } = useContext(Store);

  return (
    <ul className={containerClass()}>
      {QUICK_SOCIAL_LINKS.map(
        (
          {
            label,
            bgColor,
            textColor,
            IconEl,
            urlLink,
            AnchorContainer,
            onClick = () => null,
          },
          index
        ) => (
          <li
            key={label}
            className={itemClass(bgColor, index)}
            style={{
              boxShadow: 'rgba(149, 157, 165, 0.1) 0px 2px 2px',
            }}
          >
            <AnchorContainer
              href={urlLink}
              className={linkClass && linkClass(bgColor)}
              style={{
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 1px 1px',
              }}
              data-tooltip-id={`social-link-${label}`}
              data-tooltip-content={label}
              data-tooltip-float={true}
              data-tooltip-offset={20}
              data-tooltip-place="top"
            >
              <span className={iconClass && iconClass(textColor)}>
                <IconEl size={iconSize} />
              </span>
              <span className={labelClass && labelClass()}>{label}</span>
            </AnchorContainer>
            <CustomToolTip id={`social-link-${label}`} className="lg:hidden" />
          </li>
        )
      )}
    </ul>
  );
};

export default SocialIconsTemplate;
