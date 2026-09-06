import { apiInitializer } from "discourse/lib/api";
import BreadCrumbs from "../components/breadcrumbs";
import config from "../lib/breadcrumb-config";

export default apiInitializer("1.14.0", (api) => {
  config.firstLevelLabel = settings.first_level_label?.trim() || "";
  config.firstLevelUrl = settings.first_level_url?.trim() || "";
  config.homeIcon = settings.home_icon || "house";
  config.homeLabel = settings.home_label || "Home";
  config.homeUrl = settings.home_url || "/";

  api.renderInOutlet("above-main-container", BreadCrumbs);
});
