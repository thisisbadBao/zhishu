import logo from "../assets/logo.png";

const Head = () => {
  const gotoHome = () => {
    console.log("will goto home.");
  };

  return (
    <div className="head">
      <img src={logo} alt="logo" className="logo" onClick={gotoHome} />
      <h2 className="title"> 知书:达礼</h2>

      <nav className="navigation">
        <a className="navigation-item" href="/Cart">购物车</a>
        <a className="navigation-item" href="/Login">登陆</a>
      </nav>

    </div>
  );
};

export default Head;
