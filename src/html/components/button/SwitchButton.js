import React from "react";
import { styled } from "@mui/material/styles";
import { FormGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useTheme } from "../../../context/themeProvider";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 150,
  height: 55,
  padding: 7,
  position: "fixed",
  right: "0",
  bottom: "10px",
  overflow: "inherit",
  zIndex: "999",
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    top: "50%",
    transition:
      "left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    transform: "translate(-5px,-50%)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translate(85px,-50%)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        backgroundSize: "35px 35px",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 65,
    height: 65,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      backgroundSize: "35px 35px",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,

    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 100,
  },
}));

//일반함수로 쓰면 export를 동시에 할 수있음
//화살표함수로 쓸려면 const로 선언 해준 후 맨 아래에다 export default해줘야함.
const SwitchButton = () => {
  const [ThemeMode, toggleTheme] = useTheme();
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            onClick={toggleTheme}
            mode={ThemeMode}
            sx={{ m: 1 }}
          />
        }
      />
    </FormGroup>
  );
};
export default SwitchButton;
