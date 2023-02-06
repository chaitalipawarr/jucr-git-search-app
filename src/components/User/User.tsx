import { UserType } from "../../types/UserType";
import "./User.scss";

const User = ({ data }: { data: UserType }) => {
  return (
    <div className="user-card" data-testid="user">
      <a
        className="user-card__link"
        href={data.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={data.avatar_url}
          alt="User Profile"
          width="50px"
          height="50px"
          className="user-card__link__image"
        />
        <span className="user-card__link__name">{data.login}</span>
      </a>
    </div>
  );
};

export default User;
