const size = {
    mobile: '600px',
    tablet: '769px',
    laptopS: '1216px',
    laptop: '1360px'
};

export const device = {
mobile: `(max-width: ${size.mobile})`,
tablet: `(max-width: ${size.tablet})`,
laptopS: `(min-width: ${size.laptopS})`,
laptop: `(min-width: ${size.laptop})`,
};