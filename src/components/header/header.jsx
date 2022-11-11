import * as S from "./header.styles";

const Header = ({ onChange }) => {
  const handleUserName = (event) => {
    onChange(event.target.value);
  };

  return (
    <S.Container>
      <S.Title>Список пользователей</S.Title>
      <S.Input
        onChange={handleUserName}
        placeholder="Поиск по ФИО"
        type="text"
      />
    </S.Container>
  );
};

export default Header;
