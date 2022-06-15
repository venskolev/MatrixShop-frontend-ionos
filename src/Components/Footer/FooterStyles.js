import styled from 'styled-components';

export const Box = styled.div`
padding: 30px 50px !important;
background: #fafafaea;
bottom: 0;
width: 100%;
border-top: 2px solid black;
@media (max-width: 1000px) {
	padding: 40px 10px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 10 auto;
	/* background: red; */
	span {
		color: #000;
		font-size: 12px;
		font-weight: italic;
		margin-left: 0;
		padding: 5px;
		text-align: right;
	}
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 60px;
span {
	color: #000;
	font-size: 12px;
	font-weight: italic;
	margin-left: 0;
	padding: 5px;
}
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #000;
margin-bottom: 2px;
font-size: 16px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}

`;

export const Heading = styled.p`
font-size: 24px;
color: #000;
margin-bottom: 2px;
font-weight: bold;
`;
 