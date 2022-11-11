import * as S from "./row.styles";

const Row = ({ user }) => {
	const { name, email, address, phone, company } = user;

	return (
		<S.Container>
			<S.FirstCeil>
				<S.String>{name}</S.String>
			</S.FirstCeil>
			<S.SecondCeil>
				<S.String>{email}</S.String>
			</S.SecondCeil>
			<S.ThirdCeil title={address}>
				<S.String>{address}</S.String>
			</S.ThirdCeil>
			<S.FourthCeil>
				<S.String>{phone}</S.String>
			</S.FourthCeil>
			<S.FifthCeil>
				<S.String>{company}</S.String>
			</S.FifthCeil>
		</S.Container>
	);
};

export default Row;
