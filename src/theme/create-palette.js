import { common } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { error, indigo, info, neutral, success, warning } from './colors';

export function createPalette(mode) {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12)
    },
    background: {
      default: mode === "dark" ? neutral[700] : "#F2F5F9",
      paper: mode === "dark" ? neutral[900] : common.white
    },
    divider: '#F2F4F7',
    error,
    info,
    mode,
    neutral,
    primary: indigo,
    success,
    text: {
      primary: mode === "dark" ? common.white : neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38)
    },
    warning
  };
}
