import React from "react";
import { Switch,Route,Link} from 'react-router-dom';
import { Layout, Typography, Space } from "antd";

import { Navbar,Homepage,CryptoDeatils,Cryptocurrencies,News,Exchanges } from "./components";
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
          <Layout>
              <div className="routes">
                    <Switch>
                        <Route exact path="/">
                                <Homepage />
                        </Route>
                        <Route exact path="/exchanges">
                                <Exchanges />
                        </Route>
                        <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies /> ssasa
                        </Route>
                        <Route exact path="/crypto/:coinId">
                                <CryptoDeatils />
                        </Route>
                        <Route exact path="/news">
                                <News />
                        </Route>
                    </Switch>
              </div>
          </Layout>
          <div className="footer">
          <Typography.Title level={5} style={{ color:'white', textAlign: 'center'}} >
              CryptoPlus <br/>
              All rights reserverd
          </Typography.Title>
          <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">news</Link>
          </Space>
      </div>
      </div>
      
    </div>
  );
};

export default App; 
