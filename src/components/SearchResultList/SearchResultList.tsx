import { RepositoryType } from "../../types/RepositoryType";
import { UserType } from "../../types/UserType";
import { Tabs } from "../Dashboard/Dashboard";
import Repository from "../Repository/Repository";
import User from "../User/User";
import "./SearchResultList.scss";

const SearchResultList = ({
  searchData,
  currentTab,
}: {
  searchData: UserType[] | RepositoryType[];
  currentTab: Tabs;
}) => {
  const renderResult = (data: UserType | RepositoryType) => (
    <div key={data.id}>
      {currentTab === Tabs.Users ? (
        <User data={data as UserType} />
      ) : (
        <Repository data={data as RepositoryType} />
      )}
    </div>
  );

  return (
    <div className="search-result-list" data-testid="searchResult">
      {searchData.map((data: UserType | RepositoryType) => renderResult(data))}
    </div>
  );
};

export default SearchResultList;
