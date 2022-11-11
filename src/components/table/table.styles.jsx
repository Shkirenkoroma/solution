import styled from "styled-components";
import down from "../../images/down.png";
import up from "../../images/up.png";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 1150px;
	background-color: #ffffff;
`;

export const Ceil = styled.li`
	width: 460px;
	cursor: pointer;
	color: black;
	display: flex;
	justify-content: flex-start;
`;

export const Count = styled.div`
	position: relative;
	left: 520px;
`;

export const Line = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	color: #cdcdcd;
`;

export const Arrow = styled.div`
	display: flex;
	width: 20px;
	height: 20px;
	margin-left: 3px;
	background-size: contain;
	background-repeat: no-repeat;

	&.asc {
		background-image: url(${down});
	}

	&.desc {
		background-image: url(${up});
	}
`;

export const LineCount = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	color: #000;
`;
export const Input = styled.input`
	width: 250px;
	height: 30px;
`;

export const LineHeader = styled.span`
	font-family: "Arial";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
`;

export const Header = styled.ul`
	display: flex;
	width: 1120px;
	height: 35px;
	border-bottom: 2px solid #f5f5f5;
	padding: 16px;
`;

export const Content = styled.div`
	width: 1120px;
	overflow: overlay;
	height: 430px;
`;

export const LoaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;
