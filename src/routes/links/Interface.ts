export default interface MenuItem {
  label: string;
  key: string;
  icon?: string;
  type?: string;
  children?: MenuItem[];
}
