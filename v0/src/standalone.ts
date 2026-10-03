/**
 * Offline ("standalone") build mode.
 *
 * When the bundle is built with VITE_STANDALONE=1 the simulator runs as a
 * self-contained static app: there is no Rails backend and no network access.
 * Every backend touchpoint checks STANDALONE first, so the default
 * (server-backed) behaviour is unchanged when the flag is absent.
 */
export const STANDALONE: boolean = import.meta.env.VITE_STANDALONE === "1";

type NavbarGroup = {
  dropdownItems?: Array<{ item: string }>;
  [key: string]: unknown;
};

// Navbar entries that only make sense when a Rails backend is reachable.
const OFFLINE_HIDDEN_ITEMS = new Set(["save_online"]);

/**
 * Strips the backend-only entries out of NAVBAR_DATA.json for the standalone
 * bundle. Returns the input untouched in the default build.
 */
export function navbarForBuild(groups: NavbarGroup[]): NavbarGroup[] {
  if (!STANDALONE) return groups;

  return groups.map((group) =>
    Array.isArray(group.dropdownItems)
      ? {
          ...group,
          dropdownItems: group.dropdownItems.filter(
            (item) => !OFFLINE_HIDDEN_ITEMS.has(item.item),
          ),
        }
      : group,
  );
}