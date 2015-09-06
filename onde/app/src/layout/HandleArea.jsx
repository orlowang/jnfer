import React from 'react';
import Format from '../../../../lib/utils/Format';
import MouseMenu from '../../../../lib/MouseMenu';
import ProplabelDropdown from '../../../../lib/ProplabelDropdown';
import Wrapper from '../../../../lib/utils/Wrapper';
import TitleLike from '../../../../lib/struct/TitleLike';

let HandleArea = React.createClass({
	render(){
		let styles = {
			position: 'absolute',
			right: 0,
			top: 0,
			height: '100%',
			width: 'calc( 100% - 320px )'
		};
		let after = {clear: 'both'};
		Object.assign(styles, Format.NoUserSelect);
		return (
			<div className="handleArea" style={styles}>
				<MouseMenu title="Title" titlePosition="center">
					<ProplabelDropdown proplabelName="BorderWidth"></ProplabelDropdown>
					<ProplabelDropdown proplabelName="BorderStyle"></ProplabelDropdown>
					<ProplabelDropdown proplabelName="BorderColor"></ProplabelDropdown>
					<ProplabelDropdown proplabelName="BorderRadius"></ProplabelDropdown>
				</MouseMenu>
				<TitleLike>
					<div layoutPosition="left">i'm A</div>
					<div layoutPosition="center">i'm B</div>
					<div layoutPosition="right">i'm C</div>
				</TitleLike>
			</div>
		);
	}
});

export default HandleArea;