import { Classic } from '@theme-toggles/react';
import '@theme-toggles/react/css/Classic.css';
import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Classic
      toggle={toggleTheme}
      toggled={theme === 'light'}
      placeholder=""
      className="text-3xl"
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    />
  );
}
