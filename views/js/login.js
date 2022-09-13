/* eslint-disable */
const login = async (loginId, password) => {
    try {
      const res = await axios({
        method: "POST",
        url: "/api/v1/users/login",
        data: { loginId, password },
      });
      if (res.data.status === "success") {
        alert("logged in successfully!");
        window.setTimeout(() => {
          location.assign("/roomUsers");
        }, 1500);
      }
    } catch (err) {
      alert(err.response.data.error);
    }
  };
  document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    const loginId = e.target.loginId.value;
    const password = e.target.password.value;
    login(loginId, password);
  });
  