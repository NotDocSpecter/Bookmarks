import { useColorScheme } from "@mui/joy";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Navigator from "@/components/Navigator";
import useNavigateTo from "@/hooks/useNavigateTo";
import { useUserStore } from "@/stores";

const Root: React.FC = () => {
  const navigateTo = useNavigateTo();
  const { setMode } = useColorScheme();
  const { i18n } = useTranslation();
  const userStore = useUserStore();
  const currentUser = userStore.getCurrentUser();
  const currentUserSetting = userStore.getCurrentUserSetting();
  const isInitialized = Boolean(currentUser) && Boolean(currentUserSetting);

  useEffect(() => {
    if (!currentUser) {
      navigateTo("/auth", {
        replace: true,
      });
      return;
    }

    // Prepare user setting.
    userStore.fetchUserSetting(currentUser.id);
  }, []);

  useEffect(() => {
    if (!currentUserSetting) {
      return;
    }

    i18n.changeLanguage(currentUserSetting.general?.locale || "en");

    if (currentUserSetting.general?.colorTheme === "LIGHT") {
      setMode("light");
    } else if (currentUserSetting.general?.colorTheme === "DARK") {
      setMode("dark");
    } else {
      setMode("system");
    }
  }, [currentUserSetting]);

  return (
    isInitialized && (
      <div className="w-full h-auto flex flex-col justify-start items-start dark:bg-zinc-900">
        <Header />
        <Navigator />
        <Outlet />
      </div>
    )
  );
};

export default Root;
