const express = require("express");
const app = express();
const http = require("http");
const apidata = require("pix-apidata");
var cors = require("cors");
app.use(cors());
const fyers = require("fyers-api-v2");

const fyersLogin = async () => {
  fyers.setAppId("OU4MHNZV2Z-100");
  fyers.setRedirectUrl(
    "https://trade.fyers.in/api-login/redirect-uri/index.html",
  );
  fyers.generateAuthCode();
  const tokenData = await fyers.generate_access_token({
    auth_code:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJpYXQiOjE2NzY1NzU3NzIsImV4cCI6MTY3NjYwNTc3MiwibmJmIjoxNjc2NTc1MTcyLCJhdWQiOiJbXCJ4OjBcIiwgXCJ4OjFcIiwgXCJ4OjJcIiwgXCJkOjFcIiwgXCJkOjJcIiwgXCJ4OjFcIiwgXCJ4OjBcIl0iLCJzdWIiOiJhdXRoX2NvZGUiLCJkaXNwbGF5X25hbWUiOiJYUzYxNTQyIiwib21zIjoiSzEiLCJub25jZSI6IiIsImFwcF9pZCI6Ik9VNE1ITlpWMloiLCJ1dWlkIjoiY2Q5ZDAxYWUwODI5NGQ1NWExZDk4MzkyNDYyZjQ3YjciLCJpcEFkZHIiOiIwLjAuMC4wIiwic2NvcGUiOiIifQ.r_f_riyFXTYgu0VfRWV3pVxsXxhPTmQOVsoldEbR1I8",
    secret_key: "U1Q0MGHITH",
  });

  console.log(tokenData);

  //fyers.setAccessToken(tokenData.access_token);
};

const fyersdata = async () => {
  fyers.setAppId("OU4MHNZV2Z-100");
  fyers.setAccessToken(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE2NzgzNDE2NzMsImV4cCI6MTY3ODQwODIxMywibmJmIjoxNjc4MzQxNjczLCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCa0NYWXBvalNMZUxJTEVTM2QwMzNBaEVPZUQxLWdQMUFTLUExSm44dndzeGtTaUs1OEFhamtlVDhUM3djMXdyRkJRTzJmdnQtTTRDMnNFMXFPNFZoa3czZmdWdWpaUERzVkIzTkh6OEtnX0VKMThwRT0iLCJkaXNwbGF5X25hbWUiOiJTVUJJUiBTSU5HSCIsIm9tcyI6IksxIiwiZnlfaWQiOiJYUzYxNTQyIiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.qiPslVfL6tpZwKkBH3_ZLZ2RV3kP0typr6G9jyRzkN4",
  );
  fyers.get_profile().then((response) => {
    console.log(response);
  });
  fyers.get_positions().then((response) => {
    console.log(response);
  });
  /*const reqBody = {
    symbol: ["NSE:ONGC-EQ", "NSE:IOC-EQ"],

    dataType: "symbolUpdate",
  };

  fyers.fyers_connect(reqBody, function (data) {
    console.log(data);
  });*/
};

//fyersLogin();

fyersdata();
app.listen(5001, () => {
  console.log("Server listening on port 5001");
});
