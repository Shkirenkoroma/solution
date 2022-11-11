/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ASC, tableColumns, DEFAULT, DESC } from "../../utils/utils";
import Row from "./rows/row";
import * as S from "./table.styles";

const Table = ({ searchValue }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialUsers, setInitialUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState(DEFAULT);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(getFilteredUsers());
    setOrder(DEFAULT);
  }, [searchValue]);

  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    const transformUsers = getTransformedUsers(data);
    setInitialUsers(transformUsers);
    setFilteredUsers(transformUsers);
    setIsLoading(false);
  };

  const getFilteredUsers = () => {
    return initialUsers.filter((user) => {
      const userNames = user.name.toLowerCase().split(" ");
      const searchWord = searchValue.toLowerCase();
      const matches = userNames.filter(
        (word) => word.indexOf(searchWord) === 0,
      );

      return matches.length > 0;
    });
  };

  const getTransformedUsers = (users) => {
    const getAddress = (address) => {
      const { city, street, suite } = address;
      return `${city}, ${street}, ${suite}`;
    };

    const transformedUsers = users.map((user) => ({
      ...user,
      address: getAddress(user.address),
      company: user.company.name,
    }));

    return transformedUsers;
  };

  const handleSortingChange = (accessor) => {
    const sortOrder = getSortOrder(accessor);
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSorting = (sortField, sortOrder) => {
    const sorted =
      sortOrder !== DEFAULT
        ? [...filteredUsers].sort(
          (a, b) =>
            a[sortField].localeCompare(b[sortField], "en") *
            (sortOrder === ASC ? 1 : -1),
        )
        : getFilteredUsers();

    setFilteredUsers(sorted);
  };

  const getSortOrder = (accessor) => {
    const result = sortField === accessor && order === ASC
      ? DESC
      : sortField === accessor && order === DESC
        ? DEFAULT
        : ASC;

    return result;
  };

  const getColumnClassName = (accessor) => {
    const result = sortField === accessor && order === ASC
      ? ASC
      : sortField === accessor && order === DESC
        ? DESC
        : DEFAULT;

    return result;
  };

  return (
    <S.Container>
      <S.Header>
        {tableColumns.map((column) => (
          <S.Ceil
            key={column.label}
            onClick={() => {
              handleSortingChange(column.accessor);
            }}
          >
            <S.Line>{column.label}</S.Line>
            <S.Arrow className={getColumnClassName(column.accessor)} />
          </S.Ceil>
        ))}
      </S.Header>
      <S.Content>
        {isLoading ? (
          <S.LoaderWrapper>
            <BeatLoader color="#36d7b7" />
          </S.LoaderWrapper>
        ) : (
          <>
            {filteredUsers.map((user) => (
              <Row user={user} key={user.id} />
            ))}
          </>
        )}
      </S.Content>
      <S.Count>
        <S.LineCount>Итого: {filteredUsers.length}</S.LineCount>
      </S.Count>
    </S.Container>
  );
};

export default Table;
