import styled from '@emotion/styled';
import View from './View';

const size = ({ size = 'md' }) => {
	const sizes = {
		xxl: '48px',
		xl: '32px',
		lg: '24px',
		md: '16px',
		sm: '8px',
		xs: '4px',
	};

	return `margin-bottom: ${sizes[size]};`;
};

const Spacer = styled(View)`
	${size};
`;

export default Spacer;
