import React, { useState, useEffect } from "react";
import "../assets/rightPane.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Avatar from "@mui/material/Avatar";
import { IntensityGraph } from "./IntensityGraph";
import profilePic from "../assets/profilePic.jpg";
import axios from "axios";
import { RelevanceGraph } from "./RelevanceGraph";
import { LikelihoodGraph } from "./LikelihoodGrapg";
import Datatable from "./Datatable";

export const RightPane = () => {
  // state for storing all data from backend
  const [allData, setAllData] = useState([]);

  const baseUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${baseUrl}/v1/black-coffer?limit=10`,
        });
        const data = await response.data;
        setAllData(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getAllData();
  }, []);

  return (
    <div className="rightPane">
      <div className="header">
        <div className="searchDiv">
          <SearchOutlinedIcon className="iconsHover" />
          <input type="text" placeholder=" Type to search..." />
        </div>
        <div className="profileDiv">
          <SettingsOutlinedIcon className="iconsHover" />
          <ChatBubbleOutlineOutlinedIcon className="iconsHover" />
          <NotificationsNoneOutlinedIcon className="iconsHover" />
          <div className="textDiv">
            <p className="userText iconsHover">Vickey Kumar</p>
            <p className="desgText iconsHover">Developer</p>
          </div>
          <Avatar className="iconsHover" src={profilePic}>
            UN
          </Avatar>
          <ExpandMoreOutlinedIcon className="iconsHover" />
        </div>
      </div>
      <div className="gridContainer">
        <div className="newUsersDiv">
          <IntensityGraph allData={allData} />
        </div>
        <div>
          <RelevanceGraph allData={allData} />
        </div>
        <div>
          <LikelihoodGraph allData={allData} />
        </div>
      </div>
      <div>
        <Datatable allData={allData} />
      </div>
    </div>
  );
};
