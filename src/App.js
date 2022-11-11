import { useState } from "react";
import Header from "./components/header/header";
import Table from "./components/table/table";
import * as S from "./App.styles";

const App = () => {
	const [searchValue, setSearchValue] = useState("");
	const handleUserName = (value) => {
		setSearchValue(value);
	};

	return (
		<S.Container>
			<Header onChange={handleUserName} />
			<Table searchValue={searchValue} />
		</S.Container>
	);
};

export default App;
