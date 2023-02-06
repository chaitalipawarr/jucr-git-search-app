import { useEffect, useState } from "react";
import TabMenu from "../TabMenu/TabMenu";
import Searchbox from "../Searchbox/Searchbox";
import SearchResultList from "../SearchResultList/SearchResultList";
import Spinner from "../Spinner/Spinner";
import "./Dashboard.scss";

const BASE_URL = "https://api.github.com/search/";
export enum Tabs {
  Users = "users",
  Repositories = "repositories",
}

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(Tabs.Users);
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    searchTerm && loadTabData(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab, searchTerm]);

  const loadTabData = (searchString: string) => {
    if (searchString !== searchTerm) {
      setSearchTerm(searchString);
      setUserData([]);
      setRepoData([]);
    }
    fetchSearchResults(searchString);
  };

  const fetchSearchResults = async (searchVal: string) => {
    const url = `${BASE_URL}${currentTab}?q=${searchVal}`;
    if (
      (currentTab === Tabs.Users && !userData.length) ||
      (currentTab === Tabs.Repositories && !repoData.length)
    ) {
      setIsLoading(true);
      const response = await fetch(url);
      const { items } = await response.json();
      currentTab === Tabs.Users ? setUserData(items) : setRepoData(items);
      setIsLoading(false);
    }
  };

  const renderResultList = () => {
    if (isLoading) return <Spinner />;

    return (
      <SearchResultList
        currentTab={currentTab}
        searchData={currentTab === Tabs.Users ? userData : repoData}
      />
    );
  };

  return (
    <main className="dashboard" data-testid="dashboard">
      <Searchbox
        onSearchSubmit={(value: string) => loadTabData(value)}
      ></Searchbox>

      {searchTerm && (
        <TabMenu onTabChange={(tabName: Tabs) => setCurrentTab(tabName)} />
      )}
      {renderResultList()}
    </main>
  );
};

export default Dashboard;
