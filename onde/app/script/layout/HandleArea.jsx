import React from 'react';
import Format from '../../../../lib/utils/Format';
import MouseMenu from '../../../../lib/MouseMenu';
import ProplabelDropdown from '../../../../lib/ProplabelDropdown';
import Wrapper from '../../../../lib/utils/Wrapper';
import TitleLike from '../../../../lib/struct/TitleLike';
import Grid from '../../../../lib/struct/Grid';
import FucNav from '../../../../lib/BusinessModule/Navigation/FucNav';

let HandleArea = React.createClass({
	render(){
		let styles = {
			default: {
				display: 'flex'
			},
			container: {
				width: '100%'
			}
		};
		let after = {clear: 'both'};
		let data = [
			{
				name: 'Jnfer',
				tag: 'a',
				props: {
					type: 'logo',
					img: './img/logo.svg',
					href: '/'
				}
			},
			{
				name: '提问',
				tag: 'input',
				props: {
					type: 'button',
					onClick: function() {
						console.warn('// TODO...')
					}
				}
			},
			{
				name: '首页',
				tag: 'a',
				props: {
					type: 'link',
					href: '/'
				}
			},
			{
				name: '话题',
				tag: 'a',
				props: {
					type: 'link',
					href: '/toptic'
				}
			},
			{
				name: '发现',
				tag: 'a',
				props: {
					type: 'link',
					href: '/explore'
				}
			},
			{
				name: '登录',
				tag: 'a',
				props: {
					type: 'button',
					onClick: function() {
						console.warn('// TODO...')
					}
				}
			}
		];
		Object.assign(styles, Format.NoUserSelect);
		return (
			<div className="handleArea" style={styles.default}>
				<div className="hA-container" style={styles.container}>
					<FucNav data={data}></FucNav>
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
					<Grid unit={3} gap={0}>
						<h2 width={2}>ok, this is 1</h2>
						<h2 width={1}>ok, this is 2</h2>
						<h2>ok, this is 3</h2>
					</Grid>
				</div>
			</div>
		);
	}
});

export default HandleArea;