import axios from "axios";
import Cookie from "js-cookie";
import moment from "moment";

const _baseUrl = "http://54.180.46.120";

const refresh = async (config) => {
  const refreshToken = Cookie.get("refreshToken");
  const expireAt = localStorage.getItem("expiresAt");
  let token = localStorage.getItem("accessToken");

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    const body = {
      refreshToken,
    };

    // 토큰 갱신 서버통신
    const { data } = await axios.get(`${_baseUrl}/auth/refresh`, body);

    token = data.data.accessToken;
    localStorage.setItem("accessToken", data.data.accessToken);
    localStorage.setItem(
      "expiresAt",
      moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss")
    );
  }

  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};

const refreshErrorHandle = (error) => {
  Cookie.remove("refreshToken");
};

export { refresh, refreshErrorHandle };
