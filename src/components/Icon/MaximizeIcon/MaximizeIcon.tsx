import _ from 'lodash';
import React from 'react';
import Icon, { IIconProps, propTypes as iconPropTypes } from '../Icon';
import { lucidClassNames } from '../../../util/style-helpers';
import { omitProps } from '../../../util/component-types';

const cx = lucidClassNames.bind('&-MaximizeIcon');

interface IMaximizeIconProps extends IIconProps {}

export const MaximizeIcon = ({
	className,
	...passThroughs
}: IMaximizeIconProps) => {
	return (
		<Icon
			{...omitProps(
				passThroughs,
				undefined,
				_.keys(MaximizeIcon.propTypes),
				false
			)}
			{..._.pick(passThroughs, _.keys(iconPropTypes))}
			className={cx('&', className)}
		>
			<path d='M9.5.5h6v6m-15 3v6h6' />
		</Icon>
	);
};

MaximizeIcon.displayName = 'MaximizeIcon';
MaximizeIcon.peek = {
	description: `
		A maximize icon.
	`,
	categories: ['visual design', 'icons'],
	extend: 'Icon',
	madeFrom: ['Icon'],
};
MaximizeIcon.propTypes = iconPropTypes;
MaximizeIcon.defaultProps = Icon.defaultProps;

export default MaximizeIcon;
